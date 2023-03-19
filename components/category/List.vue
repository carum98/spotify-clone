<script setup lang="ts">
import { Category } from '~~/models/category';

defineProps<{
    categories: Category[]
}>()
</script>

<template>
    <section>
        <CategoryItem v-for="category in categories" :key="category.id" :category="category" />
    </section>
</template>