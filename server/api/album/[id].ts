import { Album } from "~~/models/album"
import { httpClient } from "~~/server/lib/request"

export default defineEventHandler(async (event) => {
    const data = await httpClient.get(`/albums/${event.context.params!.id}`)

    return {
        data: new Album(data)
    } 
})