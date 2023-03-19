import { useSession } from './useSession'

enum Method {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

const session = useSession();

async function fetcher(url: string, method: Method, body?: any) {
    const token = await session.token()

	const response = await fetch('https://api.spotify.com/v1' + url, {
		method,
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})

	return response.json()
}

export const httpClient = {
    get: (url: string) => fetcher(url, Method.GET),
    post: (url: string, body: any) => fetcher(url, Method.POST, body),
    put: (url: string, body: any) => fetcher(url, Method.PUT, body),
    delete: (url: string) => fetcher(url, Method.DELETE)
}