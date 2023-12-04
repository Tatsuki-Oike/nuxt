<script setup lang="ts">

// throw createError("Errorが発生しました。")

const onThrowsErrorClick = (): void => {
    throw createError({
        message: "Errorが発生しました。",
        statusCode: 500,
        fatal: true
    })
}
</script>

<template>
  <button class="btn btn-outline-danger mt-3" v-on:click="onThrowsErrorClick">
    エラーを発生させる
  </button>
</template>