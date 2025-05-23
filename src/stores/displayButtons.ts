import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDisplayButtonsStore = defineStore('display', () => {
  const displayButton = ref(true)

  function disable() {
    displayButton.value = false
  }
  function enable() {
    displayButton.value = true
  }

  return { displayButton, disable, enable }
})
