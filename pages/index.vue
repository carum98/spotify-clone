<script setup>
const data = await useFetch('/api/categories')
</script>

<template>
    <CategoryList :categories="data.data.value.data " />
</template>