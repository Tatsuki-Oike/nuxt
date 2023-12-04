<script setup lang="ts">
  const log = (err: any) => console.log(err)
  const clearError = (error: any) => {  
    error.value = null;
  };
  const homePage = async (error: any) => {  
    await navigateTo("/")
    error.value = null;
  };
</script>

<template>
  <div>
    <NuxtErrorBoundary @error="log">
      <ErrorComp/>
      <template v-slot:error="{ error }">
        <p class="mt-3">エラーが発生しました。</p>
        {{ error }}
        <button class="btn btn-outline-dark me-3" @click="clearError(error)">Clear Error</button>
        <button class="btn btn-outline-dark" @click="homePage(error)">Home Page</button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
