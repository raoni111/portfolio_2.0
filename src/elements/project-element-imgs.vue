<script lang="ts" setup>
import { onUpdated, ref } from 'vue'
import ArrowLeft from '../components/icons/project/arrow-left.svg'
import ArrowRight from '../components/icons/project/arrow-right.svg'

const { imgs, displayMoreInformation, projectIndex } = defineProps({
  imgs: {
    type: Array<string>,
    required: true,
  },
  displayMoreInformation: {
    type: Boolean,
    required: true,
  },
  projectIndex: {
    type: Number,
    required: true,
  },
})

const imgLength = ref(imgs.length)

const imgsIndex = ref(0)

const decrement = () => {
  if (imgsIndex.value - 1 < 0) {
    imgsIndex.value = imgLength.value
    moveToView()
    return
  }

  imgsIndex.value--
  moveToView()
}

const increment = () => {
  if (imgsIndex.value + 1 >= imgLength.value) {
    imgsIndex.value = 0
    moveToView()
    return
  }

  imgsIndex.value++
  moveToView()
}

const moveToView = () => {
  const img = document.getElementById(
    `img-more-information-${imgsIndex.value}-project-index-${projectIndex}`,
  )

  if (!img) {
    return
  }

  img.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
}

onUpdated(() => {
  if (displayMoreInformation === false) {
    imgsIndex.value = 0
    moveToView()
  }
})
</script>

<template>
  <div class="project-element-imgs">
    <div v-if="displayMoreInformation" class="project-element-imgs-buttons">
      <button class="project-element-imgs-carousel-button" @click="decrement">
        <img :src="ArrowLeft" alt="seta do carrossel apontado para direita" />
      </button>
      <button class="project-element-imgs-carousel-button" @click="increment">
        <img :src="ArrowRight" alt="seta do carrossel apontado para direita" />
      </button>
    </div>
    <div class="project-element-imgs-content">
      <img
        v-for="(img, index) in imgs"
        :src="img"
        alt="imagem do projeto"
        :id="`img-more-information-${index}-project-index-${projectIndex}`"
        :key="`imgs-${index}`"
      />
    </div>
  </div>
</template>

<style lang="scss">
.project-element-imgs {
  position: relative;
  .project-element-imgs-content {
    overflow-x: hidden;
    display: flex;
    gap: 30px;
    img {
      width: 100%;
      border-radius: 10px;
    }
    z-index: 0;
  }

  .project-element-imgs-buttons {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .project-element-imgs-carousel-button {
      cursor: pointer;
      border: none;
      padding: 0rem 1.5rem;
      background-color: #0000;

      &:hover {
        transform: scale(1.2);
      }

      &:active {
        transform: scale(1);
      }

      img {
        width: 20px;
      }
    }
    z-index: 3;
  }
}
</style>
