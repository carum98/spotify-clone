<script setup lang="ts">
const data = await useFetch('/api/categories')
const search = ref('')

const categories = computed(() => data.data.value?.data ?? [])
</script>

<template>
    <Teleport to="#header-slot">
        <div class="search-input">
            <IconSearch />
            <input type="text" v-model="search" placeholder="What do you want to listen to?" autofocus />
        </div>
    </Teleport>

    <CategoryList :categories="categories " />
</template>