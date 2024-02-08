<template>
  <main class="bg-slate-200 w-screen">
    <header class="p-3 bg-slate-400 flex flex-col gap-3">
      <h1 class="text-center text-xl font-bold">Pinia Tasks</h1>

      <!-- task form -->

      <div>
        <TaskForm />
      </div>
    </header>

    <!-- task list button -->
    <nav class="p-3 flex gap-2">
      <button
        @click="filter = 'all'"
        class="p-2 bg-slate-300 text-white cursor-pointer text-sm rounded-md hover:bg-slate-400"
      >
        all tasks
      </button>
      <button
        @click="filter = 'fav'"
        class="p-2 bg-slate-300 text-white cursor-pointer text-sm rounded-md hover:bg-slate-400"
      >
        fav tasks
      </button>
    </nav>

    <!-- task list -->
    <div class="flex flex-col items-center gap-5 py-10" v-if="filter === 'all'">
      <p class="">You have {{ taskstore.totalcount }} tasks to do</p>
      <div v-for="task in taskstore.tasks" :key="task.id">
        <taskDetails :task="task" />
      </div>
    </div>

    <div class="flex flex-col items-center gap-5 py-10" v-if="filter === 'fav'">
      <p>you have {{ taskstore.favcount }} fav tasks</p>
      <div v-for="task in taskstore.fav" :key="task.id">
        <taskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from "./stores/TaskStore";
import taskDetails from "./components/taskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { ref } from "vue";

const taskstore = useTaskStore();

const filter = ref("all");
</script>

<style scoped></style>
