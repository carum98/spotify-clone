import { Session } from './session.model'

const { clientId, clientSecret } = useRuntimeConfig()
const storage = useStorage('session')

async function requestToken() : Promise<Session> {
    const data = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const json = await data.json()

    console.log('Generate new token')

    return Session.create(json)
}

async function getToken() : Promise<Session> {
    const session = await storage.getItem('token')

    const data = session ? Session.fromStorage(session) : null

    if (data && data.isNotExpired()) {
        return data
    }

    const response = await requestToken()
    storage.setItem('token', response.toStorage())

    return response 
}

export const useSession = () => ({
    token: async () => {
        const { token } = await getToken()

        return token
    }
})