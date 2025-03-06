<script setup lang="ts">
import GithubIcon from './icons/header/github-icon.vue'
import LinkedinIcon from './icons/header/linkedin-icon.vue'
</script>

<template>
  <header class="header-element">
    <div class="header-content">
      <h1 class="title">{{ "<RQ />" }}</h1>
      <ul class="header-social-list">
        <li class="social-icon">
          <a href="https://www.linkedin.com/in/raoni-oliveira-quevedo-3719871b3" target="_blank">
            <LinkedinIcon />
            <h2 class="social-name">Linkedin</h2>
          </a>
        </li>
        <li class="social-icon">
          <a href="https://github.com/raoni111" target="_blank">
            <GithubIcon />
            <h2 class="social-name">Github</h2>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-element {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100dvw;
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    padding: 1rem 0rem;
    .title {
      color: var(--font-color-green);
      font-size: 1.8rem;
    }

    .header-social-list {
      display: flex;
      list-style: none;

      .social-icon {
        &:nth-child(1) {
            margin-right: 1rem;
        }
        a {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: var(--font-color-green);


          .social-name {
            margin-left: 1rem;
            font-size: 1.4rem;
            font-weight: 300;
            color: var(--font-color-gray);
          }
        }
      }
    }
  }
}
@media (max-width: 1500px) {
  .header-element {
    .header-content {
      width: 80%;
      .title {
        font-size: 1.8rem;
      }
      .header-social-list {

      .social-icon {
          a {
            .social-name {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1300px) {
  .header-element {
    .header-content {
      width: 90%;
    }
  }
}
@media (max-width: 800px) {
  .header-element {
    .header-content {
      width: 70%;
    }
  }
}
@media (max-width: 600px) {
  .header-element {
    .header-content {
      width: 90%;
    }
  }
}
@media (max-width: 450px) {
  .header-element {
    .header-content {
      .header-social-list {
        .social-icon {
          .social-name {
            display: none;
          }
        }
      }
    }
  }
}
</style>
