import { Playlist } from "~~/models/playlist"
import { httpClient } from "~~/server/lib/request"

export default defineEventHandler(async (event) => {
    const data = await httpClient.get(`/playlists/${event.context.params!.id}`)

    return {
        data: new Playlist(data)
    }
})