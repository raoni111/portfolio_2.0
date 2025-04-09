<script lang="ts" setup>
import LinkedinIcon from './icons/header/linkedin-icon.vue'
import GithubIcon from './icons/header/github-icon.vue'

import getExperienceYear from './utils/experience-year'
</script>

<template>
  <section class="footer-components">
    <div class="footer-component-info">
      <div class="footer-component-info-about-more">
        <h1>Sobre mim</h1>
        <p>
          Desenvolvedor de software desde os 16 anos, tenho {{ getExperienceYear() }} anos de
          experiência profissional, com expertise em JavaScript, TypeScript e Python. Minha
          trajetória na programação começou cedo, motivada pela paixão em criar soluções práticas e
          inovadoras.
        </p>
      </div>
      <div class="footer-component-info-social">
        <h1>Social</h1>
        <ul class="footer-component-info-social-list">
          <a
            class="footer-component-info-social-list-item"
            href="https://www.linkedin.com/in/raoni-oliveira-quevedo-3719871b3"
            target="_blank"
          >
            <li>
              <LinkedinIcon class="icon-element" />
              Linkedin
            </li>
          </a>
          <a
            class="footer-component-info-social-list-item"
            href="https://github.com/raoni111"
            target="_blank"
          >
            <li>
              <GithubIcon class="icon-element" />
              GitHub
            </li>
          </a>
        </ul>
      </div>
    </div>
    <div class="footer-copyright">
      <p>
        Todos os direitos reservados para
        <a href="https://www.linkedin.com/in/raoni-oliveira-quevedo-3719871b3"
          >© Raoni Oliveira Quevedo</a
        >
        {{ new Date().getFullYear() }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer-components {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2rem 0rem;
  h1 {
    font-size: 2.5rem;
    color: var(--font-color-green);
    margin-bottom: 1.5rem;
  }
  .footer-component-info {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 80%;
    margin-bottom: 3rem;
    .footer-component-info-about-more {
      p {
        width: 50%;
        font-size: 1.5rem;
        color: var(--font-color-gray);
      }
    }
    .footer-component-info-social {
      width: 50%;
      .footer-component-info-social-list {
        list-style: none;
        padding: 0px;
        .footer-component-info-social-list-item {
          text-decoration: none;
          li {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 1rem;
            font-size: 1.2rem;
            color: var(--font-color-gray);
            .icon-element {
              width: 30px;
              height: 30px;
              margin-right: 1rem;
              color: var(--font-color-green);
            }
          }
        }
      }
    }
  }
  .footer-copyright {
    p {
      color: var(--font-color-gray);
      a {
        text-decoration: none;
        color: var(--font-color-green);
      }
    }
  }
}
@media (max-width: 1000px) {
  .footer-components {
    h1 {
      font-size: 2rem;
    }
    .footer-component-info {
      .footer-component-info-about-more {
        p {
          width: 60%;
          font-size: 1.2rem;
        }
      }
      .footer-component-info-social {
        width: 40%;
      }
    }
  }
}
@media (max-width: 700px) {
  .footer-components {
    h1 {
      font-size: 2rem;
    }
    .footer-component-info {
      width: 90%;
      .footer-component-info-about-more {
        p {
          width: 60%;
          font-size: 1.2rem;
        }
      }
      .footer-component-info-social {
        width: 40%;
      }
    }
  }
}
@media (max-width: 600px) {
  .footer-components {
    h1 {
      font-size: 1.8rem;
    }
    .footer-component-info {
      width: 90%;
      .footer-component-info-about-more {
        p {
          width: 70%;
          font-size: 1.1rem;
        }
      }
      .footer-component-info-social {
        width: 30%;
      }
    }
  }
}
@media (max-width: 500px) {
  .footer-components {
    .footer-component-info {
      width: 90%;
      flex-direction: column;
      .footer-component-info-about-more {
        p {
          width: 100%;
        }
      }
      .footer-component-info-social {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
  .footer-copyright {
    text-align: center;
    font-size: 0.7rem;
  }
}
</style>
