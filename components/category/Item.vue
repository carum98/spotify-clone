<script setup lang="ts">
import { Category } from '~~/models/category';

function randomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'gray', 'black', 'white'];
    return colors[Math.floor(Math.random() * colors.length)];
}

defineProps<{
    category: Category
}>()
</script>

<template>
    <article :style="{ backgroundColor: randomColor() }">
        <h1>{{ category.name }}</h1>
        <img :src="category.image" :alt="category.name" />
    </article>
</template>