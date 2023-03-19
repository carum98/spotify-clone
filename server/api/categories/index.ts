import { Category } from "~~/models/category"
import { httpClient } from "~~/server/lib/request"

export default defineEventHandler(async (event) => {
    const data = await httpClient.get('/browse/categories')

    return {
        // api: data,
        data: data.categories.items.map((item: any) => new Category(item)) as Category[],
    }
})