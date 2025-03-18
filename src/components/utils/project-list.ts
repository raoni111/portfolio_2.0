import CoverProenca from '../icons/project/project-img/proenca/capa-proenca.png';
import CoverSecEducacao from '../icons/project/project-img/sec-educacao/capa-sec-educacao.png';

// icons Front End
// import CssIcon from '@/components/icons/skills/front-end/CSS3.svg';
import HtmlIcon from '@/components/icons/skills/front-end/HTML5.svg';
// import JavascriptIcon from '@/components/icons/skills/front-end/js.png';
// import PythonIcon from '@/components/icons/skills/front-end/python.svg';
import ReactIcon from '@/components/icons/skills/front-end/React-icon.png';
import SassIcon from '@/components/icons/skills/front-end/Sass.png';
// import TailwindIcon from '@/components/icons/skills/front-end/Tailwind_CSS.png';
import TypescriptIcon from '@/components/icons/skills/front-end/typescript.png';
// import VueIcon from '@/components/icons/skills/front-end/Vue.png';
// import Electron from '@/components/icons/skills/front-end/electron.png';
// import Next from '@/components/icons/skills/front-end/next.webp';

// Icons Back End
// import DockerIcon from '@/components/icons/skills/back-end/docker.png';
import ExpressIcon from '@/components/icons/skills/back-end/express-js.svg';
import FirebaseIcon from '@/components/icons/skills/back-end/firebase.png';
// import FlaskIcon from '@/components/icons/skills/back-end/flask.svg';
// import MySQLIcon from '@/components/icons/skills/back-end/my-sql.png';
// import NestIcon from '@/components/icons/skills/back-end/nest-js-icon.png';
import NodeIcon from '@/components/icons/skills/back-end/nodejs.svg';
// import Aws from '@/components/icons/skills/back-end/aws.webp';
// import SocketIo from '@/components/icons/skills/back-end/socket-io.svg';

export default [
  {
    id: 1,
    title: 'Proença',
    cover: CoverProenca,
    link: 'https://promanute.com.br',
    imgs: [],
    about: '',
    skill: [
      {
        title: 'Typescript',
        icon: TypescriptIcon,
      },
      {
        title: 'React',
        icon: ReactIcon,
      },
      {
        title: 'HTML5',
        icon: HtmlIcon,
      },
      {
        title: 'SASS',
        icon: SassIcon,
      },
    ]
  },
  {
    id: 2,
    title: 'Sistema de gerenciamento escolar',
    cover: CoverSecEducacao,
    link: undefined,
    imgs: [],
    about: '',
    skill: [
      {
        title: 'Typescript',
        icon: TypescriptIcon,
      },
      {
        title: 'React',
        icon: ReactIcon,
      },
      {
        title: 'HTML5',
        icon: HtmlIcon,
      },
      {
        title: 'SASS',
        icon: SassIcon,
      },
      {
        title: 'Node.js',
        icon: NodeIcon,
      },
      {
        title: 'Express.js',
        icon: ExpressIcon,
      },
      {
        title: 'Firebase',
        icon: FirebaseIcon,
      },
    ]
  },
]
