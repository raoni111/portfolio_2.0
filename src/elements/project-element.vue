<script lang="ts" setup>
import SmallSkillElement from '../elements/small-skill-element.vue';

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
      title: string;
      icon: string;
    }>,
    required: true,
  }
})
</script>

<template>
  <div class="project-element" :id="`project-index-${id}`">
    <div class="project-element-cover">
      <div class="project-element-cover-img-content">
        <img :src="cover" alt="" />
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
      overflow: hidden;
      position: relative;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      transform: scale(1);
      width: 60%;
      border-radius: 10px;
      &:hover {
        transform: scale(1.02);
        .cover-information {
          opacity: 1;
        }
      }
      &:active {
        transform: scale(1);
      }
      img {
        width: 100%;
      }
      z-index: 1;
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
        .cover-title-content {
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
        z-index: 1;
      }
      .project-element-cover-img-content-skill {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, auto));
        width: 100%;
        margin-top: 0.5rem;
        gap: 10px;
      }
    }
  }
}
</style>
