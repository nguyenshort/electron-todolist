<template>
  <div class="task-list">
    <ul>
      <li
          v-for="task in tasksStore.tasks"
          :key="task.id"
          class="task-list__item cursor-pointer"
          @click="toggleTask(task)"
      >
        <task-check-box class="mr-3" :done="task.status === TaskStatusEnum.DONE " />
        <p
            class="transition duration-300 ease-in-out transform"
            :class="{
              'line-through opacity-50': task.status === TaskStatusEnum.DONE
            }"
        >
          {{ task.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const ipcRenderer = require('electron').ipcRenderer

import {useTasksStore} from "../../store/tasks";
import {ITask, TaskStatusEnum} from "../../models/tasks";
import TaskCheckBox from "./TaskCheckBox.vue";
import {onMounted} from "vue";

const tasksStore = useTasksStore()

tasksStore.setTasks([
  {
    id: "1",
    name: "Xem Phim",
    status: TaskStatusEnum.PROCESSING
  },
  {
    id: "2",
    name: "Ăn Bún Đậu",
    status: TaskStatusEnum.DONE
  }
])

const toggleTask = (task: ITask) => {
  task.status = task.status === TaskStatusEnum.PROCESSING ? TaskStatusEnum.DONE : TaskStatusEnum.PROCESSING
  tasksStore.updateByInstance(task)
}

onMounted(() => {
  // console.log(ipcRenderer)
})

</script>

<style scoped>
.task-list {
  @apply px-4 pt-3 bg-primary-50 min-h-screen
}

.task-list p {
  @apply text-sm
}

.task-list__item {
  @apply py-2.5 border-b border-gray-200 last:border-b-0 flex items-center
}
</style>
