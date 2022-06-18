<template>
  <div
      class="task-list__checkbox"
      :class="{
        'task-list__checkbox--done': done
      }"
  >
    <van-icon size="13px" name="success" class="task-list__checkbox--icon" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  done: boolean
}>()
</script>

<style scoped>

.task-list__checkbox {
  @apply w-5 h-5 border rounded-full transition duration-300 ease-in-out flex items-center justify-center
}

.task-list__checkbox.task-list__checkbox--done {
  @apply border-primary-500
}

.task-list__checkbox--icon {
  @apply text-primary-500 transition duration-300 ease-in-out transform opacity-0 scale-0
}

.task-list__checkbox.task-list__checkbox--done .task-list__checkbox--icon {
  @apply opacity-100 scale-100
}

</style>
