<template>
  <button class="floating-button" @click="openAddTask">
    <van-icon name="plus"/>
    Add Task
  </button>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useWindow} from "../../composables/useWindow";

import { ipcRenderer } from 'electron'
const {BrowserWindow} = require('@electron/remote')

const modal = ref()

const initModal = async () => {

  const win = useWindow()

  modal.value = new BrowserWindow({
    width: 1000,
    height: 500,
    show: true,
    parent: win,
    title: 'Add Task',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      plugins: true,
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  await modal.value.loadURL('http://localhost:3000/modal/add-task')
  modal.value.webContents.openDevTools()
  // Add listener
  modal.value.webContents.on('close', () => {
    // xoá modal
    modal.value = null
  })
}

const openAddTask = () => {
  !modal.value ? initModal() : modal.value.show()
}

ipcRenderer.on('addTask', (event, arg) => {
  console.log(arg, event)
})

</script>

<style scoped>
.floating-button {
  @apply fixed bottom-5 left-7 right-7 bg-gradient-to-r from-primary-500 to-primary-700 px-3 py-2 text-white text-sm rounded-md shadow shadow-primary-400
}
</style>
