<script setup lang="ts">
const data = await useFetch('/api/categories')

const categories = computed(() => data.data.value?.data ?? [])
</script>

<template>
    <CategoryList :categories="categories " />
</template>