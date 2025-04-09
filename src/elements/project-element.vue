<script lang="ts" setup>
import SmallSkillElement from '../elements/small-skill-element.vue'
import ProjectElementImgs from '../elements/project-element-imgs.vue'

import CloseIcon from '@/components/icons/project/close-icon.svg'

import { ref } from 'vue'
import { useDisplayButtonsStore } from '@/stores/displayButtons'

defineProps({
  cover: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  skills: {
    type: Array<{
      title: string
      icon: string
    }>,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  imgs: {
    type: Array<string>,
    required: true,
  },
  projectIndex: {
    type: Number,
    required: true,
  },
})

const displayInformation = ref(false)

const store = useDisplayButtonsStore()

const toggleDisplayInformation = (preload: MouseEvent) => {
  const target = preload.target as HTMLElement
  if (
    (target.tagName === 'BUTTON' && target.id === 'close-button') ||
    target.id === 'close-button'
  ) {
    displayInformation.value = false
    store.enable()

    document.body.style.overflowY = 'auto'
    return
  }

  displayInformation.value = true
  document.body.style.overflowY = 'hidden'
  store.disable()
}
</script>

<template>
  <div class="project-element" :id="`project-index-${id}`">
    <div class="project-element-cover">
      <div
        :class="`project-element-cover-img-content display-information-${displayInformation}`"
        @click="toggleDisplayInformation"
      >
        <div class="cover-information">
          <div class="cover-title-content">
            <h1 v-if="!link">
              {{ title }}
            </h1>
            <a :href="link" v-if="link" target="_blank">
              <h1>
                {{ title }}
              </h1>
              <img v-if="link" src="../components/icons/project/link-icon.svg" />
            </a>
            <span>click em qualquer lugar para ter mais infamações</span>
          </div>
          <div class="project-element-cover-img-content-skill">
            <SmallSkillElement
              v-for="skill in skills"
              :key="skill.title"
              :title="skill.title"
              :icon="skill.icon"
            />
          </div>
        </div>
        <div class="close-button-content">
          <button class="close-button" @click="toggleDisplayInformation" id="close-button">
            <img id="close-button" :src="CloseIcon" />
          </button>
        </div>
        <ProjectElementImgs
          :imgs="[cover, ...imgs]"
          :displayMoreInformation="displayInformation"
          :projectIndex="projectIndex"
        />
        <div class="cover-more-information">
          <div class="cover-title-content">
            <h1 v-if="!link">{{ title }}</h1>
            <a :href="link" v-if="link" target="_blank">
              <h1>
                {{ title }}
              </h1>
              <img v-if="link" src="../components/icons/project/link-icon.svg" />
            </a>
          </div>
          <div class="project-element-cover-img-content-skill">
            <SmallSkillElement
              v-for="skill in skills"
              :key="skill.title"
              :title="skill.title"
              :icon="skill.icon"
            />
          </div>
          <p>
            {{ about }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-element {
  width: 100dvw;

  .project-element-cover {
    display: flex;
    justify-content: center;
    width: 100dvw;

    .project-element-cover-img-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      transform: scale(1);
      width: 60%;
      min-height: 100px;
      border-radius: 10px;
      padding: 0rem;
      background-color: var(--default-background);
      .close-button-content {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        .close-button {
          cursor: pointer;
          background-color: #0000;
          border: none;
          color: var(--font-color-green);
          margin-bottom: 1rem;
          img {
            width: 40px;
          }
        }
      }
      img {
        width: 100%;
        transition: all 0.2s ease-in-out;
      }

      z-index: 1;

      .cover-more-information {
        position: absolute;
        opacity: 0;
        transition: position 1s ease-in-out;
      }

      * .cover-title-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 100%;

        h1 {
          color: var(--font-color-green);
        }

        span {
          font-size: 0.9rem;
          color: var(--font-color-gray);
        }

        a {
          display: flex;
          justify-content: start;
          align-items: center;
          text-decoration: none;

          img {
            width: 20px;
            margin-left: 10px;
          }
        }
      }

      * .project-element-cover-img-content-skill {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, auto));
        width: 100%;
        margin-top: 0.5rem;
        gap: 10px;
      }

      .cover-information {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100.1%;
        padding: 1rem 2rem;
        left: -0.5px;
        bottom: 0px;
        border-radius: 0px 0px 10px 10px;
        opacity: 0;
        background-color: var(--dark-background);
        transition: opacity 0.3s ease-in-out;
        z-index: 5;
      }
    }

    .project-element-cover-img-content.display-information-false {
      .close-button {
        display: none;
      }
      &:hover {
        transform: scale(1.02);

        .cover-information {
          opacity: 1;
        }
      }

      &:active {
        transform: scale(1);
      }
    }

    .project-element-cover-img-content.display-information-true {
      position: fixed;
      top: 0px;
      left: 0px;
      overflow-y: auto;
      align-items: center;
      background-color: var(--default-background);
      width: 100dvw;
      height: 100dvh;
      padding: 4rem;
      padding-top: 2rem;
      z-index: 999;
      .close-button {
        display: block;
      }

      &::-webkit-scrollbar {
        width: 10px;
        background-color: var(--default-background);
        z-index: 999;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: var(--font-color-green);
        z-index: 999;
      }

      .cover-more-information {
        position: relative;
        width: 100%;
        opacity: 1;
        transition: opacity 1s ease-in-out;
        width: 100%;
        margin-top: 1rem;
      }

      p {
        margin-top: 1rem;
        font-size: 1.3rem;
        color: var(--font-color-gray);
      }
    }

    img {
      width: 100%;
    }
  }
}

@media (max-width: 1250px) {
  .project-element {
    .project-element-cover {
      .project-element-cover-img-content {
        width: 70%;
      }
    }
  }
}
@media (max-width: 1000px) {
  .project-element {
    .project-element-cover {
      .project-element-cover-img-content {
        width: 80%;
      }
    }
  }
}
@media (max-width: 700px) {
  .project-element {
    .project-element-cover {
      .project-element-cover-img-content {
        width: 90%;
      }
    }
  }
}
@media (max-width: 600px) {
  .project-element {
    .project-element-cover {
      .project-element-cover-img-content {
        width: 100%;
      }
      .project-element-cover-img-content.display-information-true {
        padding: 3rem;
        min-height: 100dvh;
        max-height: 100dvh;
      }
    }
  }
}
@media (max-width: 500px) {
  .project-element {
    .project-element-cover {
      .project-element-cover-img-content {
        width: 100%;
        .cover-information {
          display: none;
        }
      }
      .project-element-cover-img-content.display-information-true {
        padding: 1rem;
      }
    }
  }
}
@media (max-height: 550px) {
  .project-element {
    .project-element-cover {
      .project-element-cover-img-content {
        height: 100%;
        min-height: auto;
      }
    }
  }
}
</style>
