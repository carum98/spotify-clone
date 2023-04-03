import { Track } from "~~/models/track"
import { httpClient } from "~~/server/lib/request"

export default defineEventHandler(async (event) => {
    const data = await httpClient.get(`/tracks/${event.context.params!.id}`)

    return {
        data: new Track(data)
    }
})