import { RiNextjsFill } from "react-icons/ri";
import TypescriptIcon from "../icons/TypescriptIcon";
import TailwindIcon from "../icons/TailwindIcon";
import PythonIcon from "../icons/PythonIcon";
import { VueIcon } from "../icons/VueIcon";
import { ViteIcon } from "../icons/ViteIcon";
import DirectusIcon from "../icons/DirectusIcon";
import PostgresqlIcon from "../icons/PostgresqlIcon";
import GoIcon from "../icons/GoIcon.svg";
import JavaIcon from "../icons/JavaIcon";
import SpringbootIcon from "../icons/SpringbootIcon.svg";
import DjangoIcon from "../icons/DjangoIcon.svg";
import { ScikitLearnLogo } from "../icons/ScikitLearnLogo";
import { LogosSeabornIcon } from "../icons/SeabornIcon";
import NumpyIcon from "../icons/NumpyIcon.svg";
import PandasIcon from "../icons/PandasIcon.svg";
import ReactIcon from "../icons/ReactIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";

const iconMap = {
  nextJS: RiNextjsFill,
  tailwind: TailwindIcon,
  typescript: TypescriptIcon,
  vue: VueIcon,
  vite: ViteIcon,
  directus: DirectusIcon,
  python: PythonIcon,
  postgresql: PostgresqlIcon,
  golang: GoIcon,
  java: JavaIcon,
  springboot: SpringbootIcon,
  django: DjangoIcon,
  scikitlearn: ScikitLearnLogo,
  seaborn: LogosSeabornIcon,
  numpy: NumpyIcon,
  pandas: PandasIcon,
  react: ReactIcon,
  whatsapp: WhatsappIcon,
};

export const mapIcon = (iconName, className) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
};
