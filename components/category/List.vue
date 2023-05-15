<script setup lang="ts">
import { Category } from '~~/models/category';

defineProps<{
    categories: Category[]
}>()
</script>

<template>
    <section class="card-list">
        <header class="card-list-header">
            <h2>Browse all</h2>
        </header>

        <div class="categories-list">
            <CategoryItem v-for="category in categories" :key="category.id" :category="category" />
        </div>
    </section>
</template>