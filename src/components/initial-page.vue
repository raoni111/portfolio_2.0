<script setup lang="ts">
import ProgrammingSvg from './icons/main/programming-svg.vue'
</script>

<template>
  <article class="initial-page">
    <section class="initial-page-about-section">
      <div class="initial-page-about section-initial-page">
        <div class="developer-information">
          <span>Ola, meu nome e</span>
          <h1>Raoni Oliveira Quevedo</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Desenvolvedor de software desde os 16 anos, tenho 2.5 anos de experiência profissional,
            com expertise em JavaScript, TypeScript e Python. Minha trajetória na programação
            começou cedo, motivada pela paixão em criar soluções práticas e inovadoras.
          </p>
        </div>
        <div class="about-more-button-content section-initial-page">
          <button class="about-more-button">Mais sobre mim</button>
        </div>
      </div>
      <div class="initial-page-img">
        <ProgrammingSvg />
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped >
.initial-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  gap: 10%;

  .initial-page-about-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    .initial-page-about {
      width: 55%;

      .developer-information {
        span {
          font-size: 1.5rem;
          color: var(--font-color-green);
        }

        h1 {
          font-size: 3.5rem;
          color: var(--font-color-gray);
        }

        h2 {
          font-size: 3rem;
          color: var(--font-color-gray-dark);
        }

        p {
          font-size: 1.5rem;
          margin-top: 1rem;
          color: var(--font-color-gray-dark);
        }
      }

      .about-more-button-content {
        margin-top: 4rem;

        .about-more-button {
          cursor: pointer;
          padding: 0.5rem 2.5rem;
          font-size: 1.3rem;
          border-radius: 7px;
          border: 2px solid var(--font-color-green);
          color: var(--font-color-green);
          background-color: transparent;

          transition: all 0.2s ease-in-out;

          &:hover {
            color: var(--font-color-default);
            background-color: var(--font-color-green);
          }
        }
      }
    }

    .initial-page-img {
      width: 40%;
    }
  }
}

@media (max-width: 1500px) {
  .initial-page {
    .initial-page-about-section {
      width: 80%;

    }
  }
}

@media (max-width: 1300px) {
  .initial-page {
    .initial-page-about-section {
      width: 90%;
      .initial-page-about {
        .developer-information {
          span {
            font-size: 1.3rem;
          }

          h1 {
            font-size: 3rem;
          }

          h2 {
            font-size: 2.4rem;
          }

          p {
            font-size: 1.3rem;
          }
        }
        .about-more-button-content {
          .about-more-button {
            font-size: 1.2.3rem;
            padding: 0.6rem 2.5rem;
          }
        }
      }
      .initial-page-img {
        width: 36%;
      }
    }
  }
}

@media (max-width: 1000px) {
  .initial-page {
    .initial-page-about-section {
      .initial-page-about {
        .developer-information {
          span {
            font-size: 1.3rem;
          }

          h1 {
            font-size: 2.6rem;
          }

          h2 {
            font-size: 2.2rem;
          }

          p {
            font-size: 1.2rem;
          }
        }
        .about-more-button-content {
          .about-more-button {
            font-size: 1rem;
            padding: 0.5rem 2rem;
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .initial-page {
    .initial-page-about-section {
      width: 70%;
      .initial-page-about {
        width: 100%;
        .developer-information {
          span {
            font-size: 1.3rem;
          }

          h1 {
            font-size: 2.6rem;
          }

          h2 {
            font-size: 2.2rem;
          }

          p {
            font-size: 1.2rem;
          }
        }
        .about-more-button-content {
          .about-more-button {
            font-size: 1rem;
            padding: 0.5rem 2rem;
          }
        }
      }
      .initial-page-img {
        width: 0%;
      }
    }
  }
}
@media (max-width: 600px) {
  .initial-page {
    .initial-page-about-section {
      width: 85%;
      .initial-page-about {
        .about-more-button-content {
          .about-more-button {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .initial-page {
    .initial-page-about-section {
      width: 85%;
      .initial-page-about {
        .developer-information {
          span {
            font-size: 1.2rem;
          }

          h1 {
            font-size: 2.2rem;
          }

          h2 {
            font-size: 2rem;
          }

          p {
            font-size: 1.1rem;
          }
        }
        .about-more-button-content {
          margin-top: 3rem;
          .about-more-button {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}
</style>
