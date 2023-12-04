<script setup lang="ts">
const router = useRouter()
const change = () => {
    router.push({name: "page2"})
}
</script>

<template>
    <h2 class="mt-3">Page3</h2>
    <button class="btn btn-outline-primary" 
        v-on:click="change"> Change Page 
    </button>
</template>