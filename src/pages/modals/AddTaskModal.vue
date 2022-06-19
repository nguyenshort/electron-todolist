<template>
  <div class="px-4 py-4">
    <form class="mt-6">
      <text-field v-model:value="formState.name" class="text-gray-700 text-sm">
        <template #prefix>
          <van-icon name="orders-o" size="18" />
        </template>
      </text-field>

      <div class="flex justify-end mt-4">
        <van-button type="primary" size="small" round @click="addTask">Add Task</van-button>
      </div>

    </form>
  </div>
</template>

<script lang="ts" setup>

import { ipcRenderer } from 'electron'

import {useTasksStore} from "../../store/tasks";
import {onMounted, reactive} from "vue"

const store = useTasksStore()

const formState = reactive({
  name: ''
})

onMounted(() => console.log(store.tasks))

const addTask = () => {
  console.log('Click addtask')
  ipcRenderer.send('addTask', formState.name)
}

</script>
