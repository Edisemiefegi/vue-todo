<template>
  <form
    action=""
    @submit.prevent="handlesubmit"
    class="flex gap-2 justify-center"
  >
    <input
      type="text"
      placeholder="I need to..."
      class="p-2 outline-none rounded-md"
      v-model="taskObject.title"
    />
    <button class="text-sm bg-orange-400 p-3 w-24 rounded-md">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const taskstore = useTaskStore();

const taskObject = ref({
  title: "",
  isfav: false,
  id: "",
});

const handlesubmit = async () => {
  if (taskObject.value.title.trim()) {
    taskstore.addTask(taskObject.value);

    taskObject.value.title = "";
  }
};
</script>
