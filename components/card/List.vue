<script setup lang="ts">
defineProps<{
    name: string
    hideButton?: boolean
}>()
</script>

<template>
    <section class="card-list">
        <header class="card-list-header">
            <h2>{{ name }}</h2>

            <button v-if="!hideButton">
                Show all
            </button>
        </header>

        <div class="card-list-items">
            <slot />
        </div>
    </section>
</template>