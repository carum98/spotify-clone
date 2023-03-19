<script setup lang="ts">
import { Category } from '~~/models/category';

defineProps<{
    category: Category
}>()
</script>

<template>
    <article>
        <h1>{{ category.name }}</h1>
        <img :src="category.image" :alt="category.name" />
    </article>
</template>