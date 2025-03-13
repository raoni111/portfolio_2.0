<script setup lang="ts">
  import SkillElement from '@/elements/skill-element.vue'

  // icons Front End
  import CssIcon from '@/components/icons/skills/front-end/CSS3.svg';
  import HtmlIcon from '@/components/icons/skills/front-end/HTML5.svg';
  import JavascriptIcon from '@/components/icons/skills/front-end/js.png';
  import PythonIcon from '@/components/icons/skills/front-end/python.svg';
  import ReactIcon from '@/components/icons/skills/front-end/React-icon.png';
  import SassIcon from '@/components/icons/skills/front-end/Sass.png';
  import TailwindIcon from '@/components/icons/skills/front-end/Tailwind_CSS.png';
  import TypescriptIcon from '@/components/icons/skills/front-end/typescript.png';
  import VueIcon from '@/components/icons/skills/front-end/Vue.png';
  import Electron from '@/components/icons/skills/front-end/electron.png';
  import Next from '@/components/icons/skills/front-end/next.webp';

  // Icons Back End
  import DockerIcon from '@/components/icons/skills/back-end/docker.png';
  import ExpressIcon from '@/components/icons/skills/back-end/express-js.svg';
  import FirebaseIcon from '@/components/icons/skills/back-end/firebase.png';
  import FlaskIcon from '@/components/icons/skills/back-end/flask.svg';
  import MySQLIcon from '@/components/icons/skills/back-end/my-sql.png';
  import NestIcon from '@/components/icons/skills/back-end/nest-js-icon.png';
  import NodeIcon from '@/components/icons/skills/back-end/nodejs.svg';
  import Aws from '@/components/icons/skills/back-end/aws.webp';
  import SocketIo from '@/components/icons/skills/back-end/socket-io.svg';

  const frontEndSkills = [
    { src: JavascriptIcon, title: "JavaScript" },
    { src: TypescriptIcon, title: "TypeScript" },
    { src: PythonIcon, title: "Python" },
    { src: HtmlIcon, title: "HTML5" },
    { src: CssIcon, title: "CSS3" },
    { src: SassIcon, title: "Sass" },
    { src: VueIcon, title: "Vue.js" },
    { src: ReactIcon, title: "React" },
    { src: ReactIcon, title: "React Native" },
    { src: Electron, title: "Electron.JS" },
    { src: TailwindIcon, title: "Tailwind CSS" },
    { src: Next, title: "Next.JS"},
  ];

  const backEndSkills = [
    { src: NodeIcon, title: "Node.js" },
    { src: TypescriptIcon, title: "TypeScript" },
    { src: PythonIcon, title: "Python"},
    { src: ExpressIcon, title: "Express.js" },
    { src: FlaskIcon, title: "Flask" },
    { src: NestIcon, title: "NestJS" },
    { src: MySQLIcon, title: "MySQL" },
    { src: DockerIcon, title: "Docker" },
    { src: FirebaseIcon, title: "Firebase" },
    { src: Aws, title: "AWS" },
    { src: SocketIo, title: "Socket.io" },
  ];
</script>

<template>
  <section class="skill-component">
    <h1>Minhas habilidades</h1>
    <div class="skill-content">
      <div class="sector-content front-end-content">
        <h2>Front End</h2>
        <ul class="skill-list">
          <li class="skill-list-item" v-for="skill in frontEndSkills" :key="skill.title">
            <SkillElement :key="skill.title" :title="skill.title" :src="skill.src" />
          </li>
        </ul>
      </div>
      <div class="sector-content back-end-content">
        <h2>Back End</h2>
        <ul class="skill-list">
          <li class="skill-list-item" v-for="skill in backEndSkills" :key="skill.title">
            <SkillElement :key="skill.title" :title="skill.title" :src="skill.src" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skill-component {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100dvw;
  min-height: 100dvh;
  padding: 6rem 0rem;

  h1 {
    width: 100%;
    font-size: 2.5rem;
    text-align: center;
    color: var(--font-color-green);
  }
  .skill-content {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-top: 4rem;
    .sector-content {
      h2 {
        width: 100%;
        text-align: center;
        font-size: 2rem;
        color: var(--font-color-gray);
      }
      .skill-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        list-style: none;
        padding: 0px;
        margin-top: 2rem;
        .skill-list-item {
          padding: 0px;
        }
      }
    }
  }
}

@media (max-width: 1450px) {
  .skill-component {
    .skill-content {
      width: 80%;
    }
  }
}

@media (max-width: 1250px) {
  .skill-component {
    .skill-content {
      width: 95%;
    }
  }
}

@media (max-width: 1000px) {
  .skill-component {
    .skill-content {
      .sector-content {
      .skill-list {
        gap: 15px;
      }
    }
    }
  }
}

@media (max-width: 850px) {
  .skill-component {
    .skill-content {
      width: 80%;
      flex-direction: column;
      margin-top: 2rem;
      .sector-content {
        margin-top: 2rem;
        .skill-list {
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .skill-component {
    h1 {
      font-size: 2rem;
    }
    .skill-content {
      width: 90%;
      .sector-content {
        h2 {
          font-size: 1.8rem;
        }
        .skill-list {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
      }
    }
  }
}
</style>
