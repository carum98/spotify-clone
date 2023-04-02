<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <section class="card-list">
        <header class="card-list-header">
            <h2>{{ name }}</h2>

            <button>
                Show all
            </button>
        </header>

        <div class="card-list-items">
            <slot />
        </div>
    </section>
</template>