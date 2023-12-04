<template>
    <h2 class="mt-5"> Hello, World </h2>
 
    <div class="d-flex mt-3">
        <NuxtLink class="btn btn-primary flex-fill" v-bind:to="{name: 'csr'}">
            CSR (Client-Side Rendering)
        </NuxtLink>
    </div>

    <div class="d-flex mt-3">
        <NuxtLink class="btn btn-primary flex-fill" v-bind:to="{name: 'ssr'}">
            SSR (Server-Side Rendering)
        </NuxtLink>
    </div>

    <div class="d-flex mt-3">
        <NuxtLink class="btn btn-primary flex-fill" v-bind:to="{name: 'ssg'}">
            SSG (Static Site Generation)
        </NuxtLink>
    </div>

    <div class="d-flex mt-3">
        <NuxtLink class="btn btn-primary flex-fill" v-bind:to="{name: 'isg'}">
            ISG (Incremental Site Generation)
        </NuxtLink>
    </div>

    
    <div class="d-flex mt-5">
        <NuxtLink class="btn btn-secondary flex-fill" v-bind:to="{name: 'post'}">
            POST
        </NuxtLink>
    </div>

    <div class="d-flex mt-3">
        <NuxtLink class="btn btn-secondary flex-fill" v-bind:to="{name: 'delete'}">
            DELETE
        </NuxtLink>
    </div>
    
</template>
