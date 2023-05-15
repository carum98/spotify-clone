import { Album } from "~/models/album"
import { Playlist } from "~/models/playlist"
import { Track } from "~/models/track"
import { httpClient } from "~/server/lib/request"
import { Artist } from "~~/models/artist"

export default defineEventHandler(async (event) => {
    const data = await httpClient.get(`/search?q=${event.context.params!.q}&type=artist%2Cplaylist%2Calbum%2Ctrack&country=US&limit=5`)

    return {
        data: {
            artists: data.artists?.items.map((item: any) => new Artist(item)) || [],
            playlists: data.playlists?.items.map((item: any) => new Playlist(item)) || [],
            albums: data.albums?.items.map((item: any) => new Album(item)) || [],
            tracks: data.tracks?.items.map((item: any) => new Track(item)) || [],
        }
    }
})