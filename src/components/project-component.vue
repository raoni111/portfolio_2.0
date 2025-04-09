<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { ref } from 'vue'

import ProjectElement from '@/elements/project-element.vue'

import ArrowLeft from './icons/project/arrow-left.svg'
import ArrowRight from './icons/project/arrow-right.svg'

import projectList from './utils/project-list'
import { storeToRefs } from 'pinia'
import { useDisplayButtonsStore } from '@/stores/displayButtons'

const projectsLength = projectList.length

const projectIndex = ref(1)

const store = useDisplayButtonsStore()

const { displayButton } = storeToRefs(store)

const increment = () => {
  if (projectIndex.value + 1 > projectsLength) {
    return
  }

  projectIndex.value++
  moveToView()
}
const decrement = () => {
  if (projectIndex.value - 1 < 1) {
    return
  }

  projectIndex.value--
  moveToView()
}

const moveToView = () => {
  const element = document.getElementById(`project-index-${projectIndex.value}`)
  if (!element) {
    return
  }

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
}
</script>

<template>
  <section class="project-component">
    <h1 class="project-component-title">Projetos</h1>
    <div class="project-component-carousel">
      <div :class="`project-carousel-button-content display-button-${displayButton}`">
        <button class="project-carousel-button" @click="decrement">
          <img :src="ArrowLeft" alt="seta do carrossel apontado para esquerda" />
        </button>
      </div>
      <div :class="`project-carousel-button-content display-button-${displayButton}`">
        <button class="project-carousel-button" @click="increment">
          <img :src="ArrowRight" alt="seta do carrossel apontado para direita" />
        </button>
      </div>
      <div class="project-component-carouse-list">
        <ProjectElement
          v-for="(project, index) in projectList"
          :key="project.id"
          :title="project.title"
          :cover="project.cover"
          :id="project.id"
          :link="project.link"
          :skills="project.skill"
          :about="project.about"
          :imgs="project.imgs"
          :projectIndex="index"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-component {
  position: relative;
  width: 100dvw;
  min-height: 100dvh;
  background: rgb(38, 50, 56);
  background: -moz-linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  background: -webkit-linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  background: linear-gradient(45deg, rgba(38, 50, 56, 1) 0%, rgba(30, 54, 50, 1) 67%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#263238",endColorstr="#1e3632",GradientType=1);
  .project-component-title {
    position: absolute;
    width: 100%;
    font-size: 2.5rem;
    padding: 2rem;
    padding-bottom: 0rem;
    text-align: center;
    color: var(--font-color-green);
  }
  .project-component-carousel {
    .project-carousel-button-content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      height: 100vh;
      z-index: 2;
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
        &:hover {
          transform: scale(1.2);
        }
        &:active {
          transform: scale(1);
        }
      }
      &.display-button-true {
        .project-carousel-button {
          opacity: 1;
          transition: all 0.2s ease-in-out;
          img {
            width: 25px;
          }
        }
      }
      &.display-button-false {
        .project-carousel-button {
          opacity: 0;
          transition: all 0.2s ease-in-out;
          img {
            width: 0px;
          }
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
