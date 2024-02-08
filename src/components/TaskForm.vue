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
      v-model="newtask"
    />
    <button class="text-sm bg-orange-400 p-3 w-24 rounded-md">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const taskstore = useTaskStore();

const newtask = ref();

const handlesubmit = () => {
  if (newtask.value.length > 0) {
    taskstore.addTask({
      title: newtask.value,
      isfav: false,
      id: Math.floor(Math.random() * 10000),
    });
    newtask.value = "";
  }
};
</script>
