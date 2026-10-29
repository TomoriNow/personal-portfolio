import { useEffect, useRef } from "react";
import { anchors, person, education } from "./data/content.js";

// Plan geometry in a 1600 x 1000 sheet. Hub labels come from content: now, before, school.
const SPOTS = [{ x: 760, y: 800 }, { x: 880, y: 300 }, { x: 1340, y: 320 }];
const HUBS = anchors().map((a, i) => ({ ...SPOTS[i], id: `hub${i}`, label: a.label.toUpperCase(), now: a.current }));
const [H, S, A] = HUBS;
const [AVE_HA, AVE_SH, AVE_SA] = person.practice.map((p) => p.toUpperCase());
const ORIGIN = education[education.length - 1];
const deg = (d) => (d * Math.PI) / 180;
const pt = (h, r, a) => [h.x + r * Math.cos(deg(a)), h.y + r * Math.sin(deg(a))];

// land axis passes through HIVE and the midpoint of SIRCLO–ANU
const AXIS = "M617 1000 L1303 40";
const GRID = Array.from({ length: 33 }, (_, i) => i * 50);
const REDUCE = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

// light packets travelling the avenues and the land axis, in both directions
const PACKETS = [
  { path: "ave-sh", dur: 7, begin: 0 }, { path: "ave-sh", dur: 7, begin: 3.5, back: true },
  { path: "ave-ha", dur: 8, begin: 1.2 }, { path: "ave-ha", dur: 8, begin: 5.2, back: true },
  { path: "ave-sa", dur: 9, begin: 2.4 }, { path: "ave-sa", dur: 9, begin: 6.9, back: true },
  { path: "axis-path", dur: 13, begin: 0.6, small: true }, { path: "axis-path", dur: 13, begin: 7.1, small: true, back: true },
];

function Packet({ path, dur, begin, back, small }) {
  const timing = { dur: `${dur}s`, begin: `${begin + 2.2}s`, repeatCount: "indefinite" };
  return (
    <circle className={small ? "packet small" : "packet"} r={small ? 4 : 6} opacity="0">
      <animateMotion {...timing} keyPoints={back ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear"><mpath href={`#${path}`} /></animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" {...timing} />
    </circle>
  );
}

function Hub({ h, i }) {
  const streets = Array.from({ length: 12 }, (_, k) => k * 30 + 15);
  return (
    <g className="hub" style={{ "--d": `${0.5 + i * 0.15}s` }}>
      {streets.map((a) => {
        const [x1, y1] = pt(h, 44, a);
        const [x2, y2] = pt(h, a % 60 === 15 ? 170 : 120, a);
        return <path key={a} className="draw street" pathLength="1" d={`M${x1} ${y1}L${x2} ${y2}`} />;
      })}
      {streets.map((a, k) => {
        const [x, y] = pt(h, 96, a + 15);
        // parcels light up one after another around each hub
        return <rect key={`p${a}`} className="parcel" style={{ "--k": `${k * 0.7 + i * 0.35}s` }} x={x - 13} y={y - 9} width="26" height="18" transform={`rotate(${a + 15} ${x} ${y})`} />;
      })}
      <circle className="pulse" style={{ "--p": `${i * 1.3}s` }} cx={h.x} cy={h.y} r="34" />
      <circle className="draw ring" pathLength="1" cx={h.x} cy={h.y} r="34" />
      <circle className="ring-outer" cx={h.x} cy={h.y} r="72" />
      <circle className={h.now ? "core now" : "core"} cx={h.x} cy={h.y} r="12" />
      <text className="hub-label" x={h.x} y={h.y - 84} textAnchor="middle">{h.label}</text>
      {h.now && <text className="hub-note" x={h.x} y={h.y + 98} textAnchor="middle">CURRENT</text>}
    </g>
  );
}

export default function Plan() {
  const svgRef = useRef(null);
  const loupeRef = useRef(null);
  const reticleRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const p = svg.createSVGPoint();
    const place = (x, y) => {
      loupeRef.current.setAttribute("cx", x);
      loupeRef.current.setAttribute("cy", y);
      reticleRef.current.setAttribute("transform", `translate(${x} ${y})`);
    };
    place(H.x, H.y);
    if (reduce) return;

    let raf = 0, visible = true, mouse = false, t = 0;
    // idle survey path wanders between the hubs until a mouse takes over
    const tick = () => {
      t += 0.0035;
      if (!mouse) place(1100 + Math.sin(t * 2) * 300, 520 + Math.sin(t * 3 + 1) * 280);
      raf = visible && !mouse ? requestAnimationFrame(tick) : 0;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) svg.unpauseAnimations(); else svg.pauseAnimations();
      svg.closest(".hero").classList.toggle("paused", !visible);
      if (visible && !raf && !mouse) raf = requestAnimationFrame(tick);
    });
    io.observe(svg);
    const move = (e) => {
      mouse = true;
      p.x = e.clientX; p.y = e.clientY;
      const q = p.matrixTransform(svg.getScreenCTM().inverse());
      place(q.x, q.y);
    };
    const hero = svg.closest(".hero");
    if (canHover) hero.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(raf); io.disconnect(); hero.removeEventListener("pointermove", move); };
  }, []);

  return (
    <svg ref={svgRef} className="plan" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="loupeGrad">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="loupe" maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="1000">
          <circle ref={loupeRef} r="230" fill="url(#loupeGrad)" />
        </mask>
        <path id="ave-sh" d={`M${S.x} ${S.y}L${H.x} ${H.y}`} />
        <path id="ave-ha" d={`M${H.x} ${H.y}L${A.x} ${A.y}`} />
        <path id="ave-sa" d={`M${S.x} ${S.y}L${A.x} ${A.y}`} />
        <path id="axis-path" d={AXIS} />
        <g id="construction">
          {GRID.map((v) => <path key={`v${v}`} d={`M${v} 0V1000`} />)}
          {GRID.slice(0, 21).map((v) => <path key={`h${v}`} d={`M0 ${v}H1600`} />)}
          {HUBS.map((h) => [220, 330, 470].map((r) => <circle key={h.id + r} cx={h.x} cy={h.y} r={r} />))}
          <path d="M976 -100 L712 1000 M-200 284 L1800 327 M1630 80 L470 1040" />
          <path className="unbuilt" d="M880 300 L300 0 M1340 320 L1600 120 M760 800 L380 1000 M760 800 L1600 960 M880 300 L640 1000" />
        </g>
      </defs>

      <use href="#construction" className="cons faint" />
      <use href="#construction" className="cons lit" mask="url(#loupe)" />

      <g className="lake">
        <path d="M-40 528H1700V592H-40Z" />
        <path d="M1180 528L1480 470H1700V650H1480L1180 592Z" />
        <path className="ripple" d="M60 548H1660M160 572H1560M1240 520H1640M1240 612H1640" />
      </g>
      <path className="draw bridge" pathLength="1" d="M915 522L931 598M935 522L951 598" />

      <path className="draw axis" pathLength="1" d={AXIS} />
      <path className="draw avenue" pathLength="1" d={`M${S.x} ${S.y}L${H.x} ${H.y}L${A.x} ${A.y}Z`} />

      <text className="ave-label"><textPath href="#ave-sh" startOffset="50%" textAnchor="middle">{AVE_SH}</textPath></text>
      <text className="ave-label"><textPath href="#ave-ha" startOffset="50%" textAnchor="middle">{AVE_HA}</textPath></text>
      <text className="ave-label"><textPath href="#ave-sa" startOffset="50%" textAnchor="middle">{AVE_SA}</textPath></text>

      {HUBS.map((h, i) => <Hub key={h.id} h={h} i={i} />)}

      {/* slow survey sweep around the current hub */}
      <g transform={`translate(${H.x} ${H.y})`}>
        <g className="sweep">
          <path className="sweep-wedge" d="M0 0L190 0A190 190 0 0 0 164.5 -95Z" />
          <path className="sweep-arm" d="M0 0H190" />
        </g>
      </g>

      {!REDUCE && <g className="packets">{PACKETS.map((k, i) => <Packet key={i} {...k} />)}</g>}

      <g className="summit">
        <path d="M1281 70l-14 24h28z" />
        <text x="1308" y="92">SUMMIT</text>
      </g>

      <g className="bearing">
        <path className="draw" pathLength="1" d="M300 470H70M70 470l18-9v18z" />
        <text x="76" y="452">{`TO ${ORIGIN.country} · ${ORIGIN.school}`.toUpperCase()}</text>
      </g>

      <g className="north" transform="translate(1530 140)">
        <circle r="30" />
        <path d="M0 -24L9 10L0 4L-9 10Z" />
        <text y="-38" textAnchor="middle">N</text>
      </g>

      <g ref={reticleRef} className="reticle">
        <circle r="26" />
        <path d="M-44 0H-12M12 0H44M0 -44V-12M0 12V44" />
        <circle r="2" className="dot" />
      </g>
    </svg>
  );
}
