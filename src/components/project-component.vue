<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>

import { ref } from 'vue';

import ProjectElement from '@/elements/project-element.vue';

import ArrowLeft from './icons/project/arrow-left.svg';
import ArrowRight from './icons/project/arrow-right.svg';

import projectList from './utils/project-list';


const projectsLength = projectList.length;

const projectIndex = ref(1);

const increment = () => {
  if ((projectIndex.value + 1) > projectsLength) {
    return;
  }

  projectIndex.value++;
  moveToView()
}
const decrement = () => {
  if ((projectIndex.value - 1) < 1) {
    return;
  }

  projectIndex.value--;
  moveToView()
}

const moveToView = () => {
  const element = document.getElementById(`project-index-${projectIndex.value}`);

  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: 'smooth',
  });
}

</script>

<template>
  <section class="project-component">
    <div class="project-component-carousel">
      <div class="project-carousel-button-content">
        <button class="project-carousel-button" @click="decrement">
          <img :src="ArrowLeft" alt="seta do carrossel apontado para esquerda" />
        </button>
      </div>
      <div class="project-carousel-button-content">
        <button class="project-carousel-button" @click="increment">
          <img :src="ArrowRight" alt="seta do carrossel apontado para direita" />
        </button>
      </div>
      <div class="project-component-carouse-list">
        <ProjectElement
          v-for="project in projectList"
          :key="project.id"
          :title="project.title"
          :cover="project.cover"
          :id="project.id"
          :link="project.link"
          :skills="project.skill"
          :about="project.about"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-component {
  width: 100dvw;
  height: 100dvh;
  background: rgb(38, 50, 56);
  background: -moz-linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  background: -webkit-linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  background: linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#263238",endColorstr="#1e3632",GradientType=1);

  .project-component-carousel {
    .project-carousel-button-content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      height: 100vh;
      &:nth-child(1) {
        left: 0px;
      }
      &:nth-child(2) {
        right: 0px;
      }
      .project-carousel-button {
        cursor: pointer;
        background-color: #0000;
        border: none;
        padding: 0rem 1rem;
        transition: transform 0.1s ease-in-out;
        &:hover {
          transform: scale(1.2);
        }
        &:active {
          transform: scale(1);
        }
        img {
          width: 25px;
        }
      }
    }
    .project-component-carouse-list {
      overflow-x: hidden;
      display: flex;
      align-items: center;
      width: 100dvw;
      height: 100dvh;
    }
  }
}
</style>
