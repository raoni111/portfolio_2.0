<script setup lang="ts">
import GithubIcon from './icons/github-icon.vue';
import LinkedinIcon from './icons/linkedin-icon.vue';

</script>

<template>
  <header class="header-element">
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
  </header>
</template>

<style lang="css" scoped>
.header-element {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100dvw;
  padding: 1.5rem 6rem;

  .title {
    color: var(--font-color-green);
  }
  
  .header-social-list {
    display: flex;
    list-style: none;
  
    .social-icon {
    
      a {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: var(--font-color-green);
        &:nth-child(1) {
          margin-right: 2rem;
        }
        
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
</style>
