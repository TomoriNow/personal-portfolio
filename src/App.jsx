import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, useScroll, useTransform } from "motion/react";
import { FiArrowUpRight, FiGithub, FiArrowRight } from "react-icons/fi";
import Plan from "./Plan.jsx";
import { person, links, roles, skills, projects, currentRole, educationLine, countWord } from "./data/content.js";

const NAV = [["skills", "Skills"], ["about", "About"], ["work", "Work"], ["contact", "Contact"]];
const LINE_STYLES = ["solid", "dashed", "double"];
// plates after the lead repeat this rhythm, so any number of projects composes
const RHYTHM = ["w7", "w5", "w5", "w7", "full"];
const usedBy = (skill) => projects.map((p, i) => (p.tools.includes(skill) ? i : -1)).filter((i) => i >= 0);

function Nav() {
  const [solid, setSolid] = useState(false);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 88]);
  useEffect(() => {
    const hero = document.getElementById("top");
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: "-72px 0px 0px 0px" });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return (
    <header className={solid ? "bar solid" : "bar"}>
      <a className="brand" href="#top" aria-label="Sean Galant, back to top">
        <span className="seal">SG</span><span className="brand-name">Sean Galant</span>
      </a>
      <nav aria-label="Sections">
        {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <svg className="keymap" viewBox="-6 -8 100 16" aria-hidden="true">
        <path d="M0 0H88" />
        {[0, 22, 44, 66, 88].map((t) => <path key={t} d={`M${t} -4V4`} />)}
        <motion.g style={{ x }}><circle r="4.5" /></motion.g>
      </svg>
      <a className="bar-cta" href={links.resume} target="_blank" rel="noopener noreferrer">Resume</a>
    </header>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div className="plan-wrap" style={{ scale }}><Plan /></motion.div>
      <div className="hero-in">
        <div className="cartouche">
          <img className="medallion" src={person.profileImg} alt="Portrait of Sean Galant" width="76" height="76" />
          <h1>Sean Galant</h1>
          <p className="lede">{person.role}. {person.tagline}</p>
        </div>
        <dl className="titleblock">
          <div><dt>Role</dt><dd>{currentRole.title}, {currentRole.org}</dd></div>
          <div><dt>Practice</dt><dd>{person.practice.join(" · ")}</dd></div>
          <div><dt>Location</dt><dd>{person.location}</dd></div>
          <div className="tb-actions">
            <a className="btn solid" href={links.resume} target="_blank" rel="noopener noreferrer">Download Resume <FiArrowUpRight aria-hidden="true" /></a>
            <a className="btn line" href="#contact">Get in touch <FiArrowRight aria-hidden="true" /></a>
          </div>
        </dl>
      </div>
    </section>
  );
}

// Every section after the hero is a sheet on the land axis: the axis draws down its left edge
// as you scroll, with a hub where the section begins and a marker for where you are.
function Sheet({ id, tone, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const top = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  return (
    <section ref={ref} className={`sheet ${tone}`} id={id} data-assemble>
      <div className="rail" aria-hidden="true">
        <motion.span className="rail-line" style={{ scaleY: scrollYProgress }} />
        <span className="rail-hub" />
        <motion.span className="rail-mark" style={{ top }} />
      </div>
      {children}
    </section>
  );
}

const W = 180; // parcel width in the precinct map

function PrecinctMap({ lit }) {
  return (
    <svg className="pmap" viewBox={`0 0 420 ${40 + projects.length * 80}`} role="img" aria-label="Map of the project precincts">
      <path className="pm-axis" d={`M210 10V${30 + projects.length * 80}`} />
      {projects.map((p, i) => {
        const left = i % 2 === 0;
        const y = 30 + i * 80;
        const x = left ? 20 : 220;
        const on = lit.includes(i);
        return (
          <g key={p.short} className={on ? "pm lit" : lit.length ? "pm dim" : "pm"} style={{ "--k": i }}>
            <path className="pm-road" pathLength="1" d={left ? `M${x + W} ${y + 28}H210` : `M210 ${y + 28}H${x}`} />
            <rect x={x} y={y} width={W} height="56" pathLength="1" />
            <text className="pm-no" x={x + 12} y={y + 22}>P{i + 1}</text>
            {/* long names are squeezed to fit the parcel instead of spilling out */}
            <text className="pm-name" x={x + 12} y={y + 42} {...(p.short.length * 8.2 > W - 24 ? { textLength: W - 24, lengthAdjust: "spacingAndGlyphs" } : {})}>{p.short}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Skills() {
  const [hover, setHover] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = hover ?? pinned;
  const lit = active ? usedBy(active) : [];
  return (
    <Sheet id="skills" tone="tint">
      <div className="wrap">
        <h2>Skills</h2>
        <p className="intro">{countWord(Object.keys(skills).length)} networks serve the plan. Point at a skill to see which projects it reaches.</p>
        <div className="skills-grid">
          <div className="legend" onMouseLeave={() => setHover(null)}>
            {Object.entries(skills).map(([group, list], gi, all) => (
              <div className="net" key={group}>
                <h3><svg className={`swatch ${LINE_STYLES[gi % LINE_STYLES.length]}`} viewBox="0 0 64 10" aria-hidden="true"><path d="M0 3H64" /><path d="M0 7H64" /></svg>{group}</h3>
                <ul>
                  {list.map((s, k) => {
                    const n = usedBy(s).length;
                    const order = all.slice(0, gi).reduce((t, [, l]) => t + l.length, 0) + k;
                    return (
                      <li key={s} style={{ "--k": order }}>
                        <button
                          type="button"
                          className={`${active === s ? "on " : ""}${n ? "" : "offsheet"}`}
                          aria-pressed={pinned === s}
                          onMouseEnter={() => setHover(s)}
                          onFocus={() => setHover(s)}
                          onBlur={() => setHover(null)}
                          onClick={() => setPinned(pinned === s ? null : s)}
                        >{s}</button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <figure className="pmap-fig">
            <PrecinctMap lit={lit} />
            <figcaption aria-live="polite">
              {!active && `All ${countWord(projects.length).toLowerCase()} precincts. Dashed skills are not used in the projects on this page.`}
              {active && lit.length > 0 && <><strong>{active}</strong> reaches {lit.map((i) => `P${i + 1}`).join(", ")}.</>}
              {active && lit.length === 0 && <><strong>{active}</strong> is not used in the projects on this page.</>}
            </figcaption>
          </figure>
        </div>
      </div>
    </Sheet>
  );
}

function About() {
  return (
    <Sheet id="about" tone="blue">
      <div className="wrap about">
        <figure className="mount" data-draw>
          <img src={person.aboutImg} alt="Sean Galant" loading="lazy" width="1050" height="1400" />
        </figure>
        <div>
          <h2>About</h2>
          <p className="bio">{person.about}</p>
          <ol className="axis-list" aria-label="Roles">
            {roles.map((r, k) => (
              <li key={r.title + r.org} className={r.current ? "now" : ""} style={{ "--k": k }}>
                <span className="node" aria-hidden="true" />
                <strong>{r.title}</strong>
                <span>{r.org}{r.period && ` · ${r.period}`}{r.current && " · current"}</span>
              </li>
            ))}
          </ol>
          <p className="edu"><span>Education</span>{educationLine.join(" · ")}</p>
        </div>
      </div>
    </Sheet>
  );
}

const CAN_TILT = typeof matchMedia !== "undefined" && matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
const tilt = (e) => {
  const el = e.currentTarget, r = el.getBoundingClientRect();
  el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 5}deg`);
  el.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -4}deg`);
};
const untilt = (e) => { e.currentTarget.style.removeProperty("--rx"); e.currentTarget.style.removeProperty("--ry"); };

function Precinct({ p, i, size }) {
  return (
    <article className={`plate ${p.featured ? "lead" : size}`} data-draw {...(CAN_TILT ? { onPointerMove: tilt, onPointerLeave: untilt } : {})}>
      <div className="plate-photo">
        <img src={p.img} alt={`Screenshot of ${p.short}`} loading="lazy" style={{ objectPosition: p.imgFocus ?? "center" }} />
      </div>
      <div className="plate-body">
        <p className="plate-meta"><span className="pno">P{i + 1}</span>{p.type}{p.year && ` · ${p.year}`}</p>
        <h3>{p.name}</h3>
        <p className="plate-desc">{p.description}</p>
        <p className="plate-tools">{p.tools.join(" · ")}</p>
        <div className="plate-links">
          {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer">{p.featured ? "Press release" : "Visit site"} <FiArrowUpRight aria-hidden="true" /></a>}
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> Source</a>}
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <Sheet id="work" tone="light">
      <div className="wrap">
        <h2>Work</h2>
        <p className="intro">{countWord(projects.length)} precincts on the plan, from production AI to research prototypes.</p>
        <div className="plates">
          {projects.map((p, i) => {
            const k = projects.slice(0, i).filter((q) => !q.featured).length;
            return <Precinct key={p.short} p={p} i={i} size={RHYTHM[k % RHYTHM.length]} />;
          })}
        </div>
      </div>
    </Sheet>
  );
}

function Contact() {
  return (
    <Sheet id="contact" tone="blue">
      <div className="wrap">
        <h2>Contact</h2>
        <p className="intro">The axis ends here. Write to me, or use any route below.</p>
        <div className="tb-full">
          <ul className="routes">
            <li style={{ "--k": 0 }}><span>Email</span><a href={`mailto:${links.email}`}>{links.email}</a></li>
            <li style={{ "--k": 1 }}><span>Phone</span><a href={links.phoneHref}>{links.phone}</a></li>
            <li style={{ "--k": 2 }}><span>LinkedIn</span><a href={links.linkedin} target="_blank" rel="noopener noreferrer">sean-galant</a></li>
            <li style={{ "--k": 3 }}><span>GitHub</span><a href={links.github} target="_blank" rel="noopener noreferrer">TomoriNow</a></li>
            <li style={{ "--k": 4 }}><span>Resume</span><a href={links.resume} target="_blank" rel="noopener noreferrer">Download PDF</a></li>
          </ul>
          <form className="tb-form" action={links.formAction} method="POST">
            <label className="cell"><span>Name</span><input name="name" required autoComplete="name" /></label>
            <label className="cell"><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
            <label className="cell msg"><span>Message</span><textarea name="message" rows="5" required /></label>
            <button className="btn solid send" type="submit">Send message <FiArrowRight aria-hidden="true" /></button>
          </form>
          <p className="tb-foot">
            <span>Drawn by Sean Galant</span><span>{person.location}</span><span>© {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </Sheet>
  );
}

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.2 }
    );
    document.querySelectorAll("[data-draw]").forEach((el) => io.observe(el));
    const sio = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), sio.unobserve(e.target))),
      { rootMargin: "0px 0px -20% 0px" }
    );
    document.querySelectorAll("[data-assemble]").forEach((el) => sio.observe(el));
    return () => { io.disconnect(); sio.disconnect(); };
  }, []);
  return (
    <>
      <a className="skip" href="#skills">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <About />
        <Work />
        <Contact />
      </main>
      <Analytics />
    </>
  );
}
