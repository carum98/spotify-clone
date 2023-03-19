import { httpClient } from "~~/server/lib/request"

export default defineEventHandler(async (event) => {
    const data = await httpClient.get(`/browse/categories/${event.context.params!.id}/playlists`)

    return {
        api: data,
    }
})