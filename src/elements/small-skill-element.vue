<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>
f
<template>
  <div class="small-skill-element">
    <img :src="icon" :alt="title" />
    <h5>{{ title }}</h5>
  </div>
</template>
<style lang="scss" scoped>
.small-skill-element {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: var(--light-background);
  h5 {
    font-size: 0.9rem;
    color: var(--font-color-green);
  }
  img {
    width: 18px;
    margin-right: 8px;
  }
}
</style>
