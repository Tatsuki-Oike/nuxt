<script setup lang="ts">

const value1 = ref("apple")

const sampleObj = computed(() => {
  return {
    key1: value1.value,
    key2: "100"
  };
});

const asyncData = await useFetch(
    "http://127.0.0.1:5000/api/helloWorld",
    {
        key: "key10",
        query: sampleObj,
        watch: [value1]
    }
)
const data = asyncData.data

</script>

<template>
    <p> useFetch watch </p>

    <select v-model="value1">
      <option value="apple" selected>apple</option>
      <option value="banana">banana</option>
      <option value="cherry">cherry</option>
    </select>
    <br>
    
    <p>{{ data }}</p>
</template>