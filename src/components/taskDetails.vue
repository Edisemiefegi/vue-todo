<template>
  <div class="flex w-96 p-3 justify-between bg-white border rounded-md">
    <p class="font-bold text-sm">{{ task.title }}</p>
    <div class="flex gap-2">
      <i class="pi pi-times" @click="taskstore.deleteTask(task.id)"></i>
      <i
        :class="task.isfav ? 'text-red-400' : 'text-gray-600'"
        class="pi pi-heart-fill"
        @click="taskstore.togglefav(task.id)"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const taskstore = useTaskStore();

// console.log(props.task);
</script>
