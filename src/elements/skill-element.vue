<script lang="ts" setup>
  const { src } = defineProps({
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  });

</script>

<template>
  <div class="skill-element">
    <img :src="src" alt="">
    <h4>{{ title }}</h4>
  </div>
</template>

<style lang="scss" scoped>
  .skill-element {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--light-background);
    box-shadow: 0px 0px 40px rgba(0, 255, 221, 0.055);
    border-radius: 8px;

    img {
      margin-right: 1rem;
      width: 30px;
    }
    h4 {
      width: 100%;
      font-size: 1.5rem;
      text-align: center;
      color: var(--font-color-green);
    }
  }

  @media (max-width: 1000px) {
    .skill-element {
      padding: 1rem 1.5rem;
      img {
        width: 28px;
      }
      h4 {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 480px) {
    .skill-element {
      img {
        width: 25px;
      }
      h4 {
        font-size: 1rem;
      }
    }
  }
</style>
