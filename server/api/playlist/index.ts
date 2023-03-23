import { Category } from "~~/models/category"
import { Playlist } from "~~/models/playlist"
import { httpClient } from "~~/server/lib/request"

export default defineEventHandler(async (event) => {
    const categories = await $fetch('/api/categories?limit=5')

    // Get 2 random categories
    const randomCategories = categories.data.sort(() => Math.random() - 0.5).slice(0, 2)

    const playlists = await Promise.all([
        httpClient.get(`/browse/featured-playlists?limit=7&country=US`),
        ...randomCategories.map((category: Category) => fetchPlaylistCategory(category)),
    ])

    return {
        data: playlists.map((playlist: any) => parserPlaylist(playlist.message, playlist.playlists)),
    }
})

async function fetchPlaylistCategory(category: Category) {
    const data = await httpClient.get(`/browse/categories/${category.id}/playlists?limit=7&country=US`)

    return {
        message: category.name,
        ...data
    }
}

function parserPlaylist(message: string, playlist: { items: any[]; }) {
    return {
        name: message,
        playlist: playlist?.items.map((item: any) => new Playlist(item)) as Playlist[] || [],
    }
}