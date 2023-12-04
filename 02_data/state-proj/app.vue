<script setup lang="ts">

// headerの設定
useHead({
  title: "sample",
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      rel: "stylesheet", 
      integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", 
      crossorigin: "anonymous"}
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", 
      integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin: "anonymous"
    }
  ]
})

// stateのデータ準備
type TaskType = {
  id: number;
  task: string;
  status: string;
}
useState<TaskType[]>(
  "taskList",
  (): TaskType[] => {
    const TaskList = [
      {"id": 1, "task": "task1", "status": "todo"},
      {"id": 2, "task": "task2", "status": "active"},
      {"id": 3, "task": "task3", "status": "done"},
    ]
    return TaskList
  }
)

const TaskList = useState<TaskType[]>("taskList")

</script>

<template>
  <div class="container">
    <h2 class="mt-5"> app.vue </h2>
    <p> {{ TaskList }} </p>
    <Comp1/>
  </div>
</template>
