<script lang="ts" setup>
import photo from '@/assets/img/photo.jpg'
import getExperienceYear from './utils/experience-year'
</script>

<template>
  <section class="about-more-component" id="about-more-container">
    <div class="about-more-content">
      <div class="about-more-photo-content">
        <img :src="photo" alt="" />
      </div>
      <div class="about-more-text">
        <h1>Mais sobre mim</h1>
        <p>
          Meu nome é Raoni e sou desenvolvedor de software desde os 16 anos, com
          {{ getExperienceYear() }} anos de experiência profissional. <br />
          <br />
          Atualmente, sou responsável pelo desenvolvimento e manutenção de um SaaS de administração
          escolar, uma solução que criei e distribuo para escolas, centralizando informações
          acadêmicas e otimizando a gestão pedagógica. Além do desenvolvimento full stack, atuo
          diretamente na implementação do sistema, garantindo que ele se adapte às necessidades dos
          usuários. <br />
          <br />
          Possuo amplo domínio em JavaScript, TypeScript e Python, além de experiência com React,
          Vue.js e Flask. Minha trajetória como desenvolvedor autônomo me proporcionou habilidades
          valiosas, como autonomia na resolução de problemas, comunicação eficaz com clientes e
          adaptação de soluções às necessidades reais dos usuários.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-more-component {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  min-height: 100dvh;
  background: rgb(38, 50, 56);
  background: -moz-linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  background: -webkit-linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  background: linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#263238",endColorstr="#1e3632",GradientType=1);
  .about-more-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 3rem 0rem;
    .about-more-photo-content {
      display: flex;
      justify-content: center;
      width: 40%;
      img {
        width: 70%;
        border-radius: 100%;
        border: 5px solid var(--font-color-green);
        box-shadow: 0px 0px 50px rgba(0, 255, 85, 0.185);
      }
    }
    .about-more-text {
      width: 60%;
      h1 {
        width: 100%;
        margin-bottom: 1rem;
        font-size: 2.5rem;
        color: var(--font-color-green);
      }
      p {
        color: var(--font-color-gray);
        font-size: 1.5rem;
      }
    }
  }
}

@media (max-width: 1300px) {
  .about-more-component {
    .about-more-content {
      width: 90%;
    }
  }
}
@media (max-width: 1200px) {
  .about-more-component {
    .about-more-content {
      .about-more-text {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
}
@media (max-width: 750px) {
  .about-more-component {
    .about-more-content {
      .about-more-text {
        width: 100%;
      }
      .about-more-photo-content {
        display: none;
      }
    }
  }
}
</style>
