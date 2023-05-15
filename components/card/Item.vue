<script setup lang="ts">
defineProps<{
    to: string
    image: string
    name: string
    description: string
    circle?: boolean
}>()
</script>

<template>
    <article class="card">
        <NuxtLink :to="to">
            <div class="card-content">
                <img :src="image" :alt="name" loading="lazy" height="170" :class="{ circle }"  />
                <button class="play-button">
                    <IconPlay />
                </button>
            </div>
            <p class="card-name">{{ name }}</p>
            <p class="card-description">{{ description }}</p>
        </NuxtLink>
    </article>
</template>