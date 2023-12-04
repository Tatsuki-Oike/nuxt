<script setup lang="ts">
type TaskType = {
  id: number;
  task: string;
  status: string;
}
const TaskList = useState<TaskType[]>("taskList")
</script>

<template>
    <h2> Comp1.vue </h2>
    <p> {{ TaskList }} </p>
</template>