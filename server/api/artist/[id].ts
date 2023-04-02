import { Album } from "~~/models/album"
import { Artist } from "~~/models/artist"
import { Track } from "~~/models/track"
import { httpClient } from "~~/server/lib/request"

export default defineEventHandler(async (event) => {
    const id = event.context.params!.id

    const [data, albums, topTracks] = await Promise.all([
        httpClient.get(`/artists/${id}`),
        httpClient.get(`/artists/${id}/albums?limit=7&country=US`),
        httpClient.get(`/artists/${id}/top-tracks?country=US`),
    ])

    return {
        data: new Artist(data),
        albums: albums.items.map((item: any) => new Album(item)) as Album[],
        topTracks: topTracks.tracks.map((item: any) => new Track(item)) as Track[],
    } 
})