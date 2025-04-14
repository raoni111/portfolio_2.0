// Photo Proença
import CoverProenca from '../icons/project/project-img/proenca/capa-proenca.png'
import proenca1 from '../icons/project/project-img/proenca/proeca-1.png'
import proenca2 from '../icons/project/project-img/proenca/proeca-2.png'
import proenca3 from '../icons/project/project-img/proenca/proeca-3.png'
import proenca4 from '../icons/project/project-img/proenca/proeca-4.png'
import proenca5 from '../icons/project/project-img/proenca/proeca-5.png'

// Photo Sistema de Gerenciamento escolar
import CoverSecEducacao from '../icons/project/project-img/sec-educacao/capa-sec-educacao.png'
import educacao1 from '../icons/project/project-img/sec-educacao/1-sec-educacao.png'
import educacao2 from '../icons/project/project-img/sec-educacao/2-sec-educacao.png'
import educacao3 from '../icons/project/project-img/sec-educacao/3-sec-educacao.png'
import educacao4 from '../icons/project/project-img/sec-educacao/4-sec-educacao.png'
import educacao5 from '../icons/project/project-img/sec-educacao/5-sec-educacao.png'
import educacao6 from '../icons/project/project-img/sec-educacao/6-sec-educacao.png'
import educacao7 from '../icons/project/project-img/sec-educacao/7-sec-educacao.png'
import educacao8 from '../icons/project/project-img/sec-educacao/8-sec-educacao.png'
import educacao9 from '../icons/project/project-img/sec-educacao/9-sec-educacao.png'
import educacao10 from '../icons/project/project-img/sec-educacao/10-sec-educacao.png'
import educacao11 from '../icons/project/project-img/sec-educacao/11-sec-educacao.png'
import educacao12 from '../icons/project/project-img/sec-educacao/12-sec-educacao.png'

// icons Front End
// import CssIcon from '@/components/icons/skills/front-end/CSS3.svg';
import HtmlIcon from '@/components/icons/skills/front-end/HTML5.svg'
// import JavascriptIcon from '@/components/icons/skills/front-end/js.png';
// import PythonIcon from '@/components/icons/skills/front-end/python.svg';
import ReactIcon from '@/components/icons/skills/front-end/React-icon.png'
import SassIcon from '@/components/icons/skills/front-end/Sass.png'
// import TailwindIcon from '@/components/icons/skills/front-end/Tailwind_CSS.png';
import TypescriptIcon from '@/components/icons/skills/front-end/typescript.png'
// import VueIcon from '@/components/icons/skills/front-end/Vue.png';
// import Electron from '@/components/icons/skills/front-end/electron.png';
// import Next from '@/components/icons/skills/front-end/next.webp';

// Icons Back End
// import DockerIcon from '@/components/icons/skills/back-end/docker.png';
import ExpressIcon from '@/components/icons/skills/back-end/express-js.svg'
import FirebaseIcon from '@/components/icons/skills/back-end/firebase.png'
// import FlaskIcon from '@/components/icons/skills/back-end/flask.svg';
// import MySQLIcon from '@/components/icons/skills/back-end/my-sql.png';
// import NestIcon from '@/components/icons/skills/back-end/nest-js-icon.png';
import NodeIcon from '@/components/icons/skills/back-end/nodejs.svg'
// import Aws from '@/components/icons/skills/back-end/aws.webp';
// import SocketIo from '@/components/icons/skills/back-end/socket-io.svg';

export default [
  {
    id: 1,
    title: 'Proença',
    cover: CoverProenca,
    link: 'https://promanute.com.br',
    imgs: [proenca1, proenca2, proenca3, proenca4, proenca5],
    about: `
              O site da empresa Proença foi criado para servir como uma vitrine virtual, apresentando os serviços oferecidos, destacando projetos realizados, exibindo parcerias importantes e facilitando o contato direto com a empresa. <br /><br />
              Todo o projeto foi desenvolvido com foco em usabilidade, design responsivo e comunicação clara, garantindo uma boa experiência para visitantes em qualquer dispositivo. A proposta visual transmite profissionalismo e solidez, alinhando-se à identidade da marca e ao setor industrial em que a empresa atua. <br /><br />
              Este projeto representa mais do que a construção de um site: é um passo estratégico na presença digital da Proença, pensado para ampliar sua visibilidade e fortalecer relacionamentos comerciais.
            `,
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
    ],
  },
  {
    id: 2,
    title: 'Sistema de gerenciamento escolar',
    cover: CoverSecEducacao,
    link: undefined,
    imgs: [
      educacao1,
      educacao2,
      educacao3,
      educacao4,
      educacao5,
      educacao6,
      educacao7,
      educacao8,
      educacao9,
      educacao10,
      educacao11,
      educacao12,
    ],
    about: `
            O Sistema de Gestão Educacional é uma plataforma completa desenvolvida por Raoni Oliveira Quevedo, pensada para facilitar e modernizar a administração de escolas e secretarias de educação. Embora tenha sido criado inicialmente para atender as necessidades da Secretaria Municipal de Educação de Itaoca (SP), o sistema não é exclusivo e pode ser utilizado por outras secretarias ou redes de ensino que buscam melhorar a organização e o acompanhamento pedagógico. <br /><br />
            Com ele, é possível cadastrar alunos e turmas, lançar frequência, notas, boletins e registrar documentos como planos de aula, relatórios, atas e muito mais. O sistema também oferece ferramentas específicas para professores e coordenadores, como o acompanhamento da hipótese de escrita, diagnóstico de matemática, e análise da aprendizagem ao longo do ano — tudo com visualizações em gráficos fáceis de entender. <br /><br />
            Além da parte pedagógica, a plataforma também conta com recursos para o setor psicológico, permitindo o registro de atendimentos, anamnese e prontuários dos alunos. Outro destaque é o suporte a indicadores institucionais, como o acompanhamento do Plano Municipal de Educação e programas como o Bolsa Família, com dados organizados para facilitar a tomada de decisões. <br /><br />
            O sistema funciona em uma estrutura segura e dedicada, com servidor próprio, banco de dados exclusivo e tecnologias de autenticação avançadas. Ele foi desenvolvido com o objetivo de tornar a gestão educacional mais simples, eficiente e centrada nas reais necessidades de quem trabalha na educação pública. <br /><br />
            Todo o desenvolvimento e manutenção é feito por Raoni Oliveira Quevedo, que também é responsável por adaptar o sistema conforme a realidade de cada instituição interessada.
            `,
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
    ],
  },
]
