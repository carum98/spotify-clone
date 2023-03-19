export class Session {
    token: string
    expires_in: number
    created_at: Date

    constructor(token: string , expires_in: number, created_at: Date) {
        this.token = token
        this.expires_in = expires_in
        this.created_at = created_at
    }

    isExpired() {
        return new Date().getTime() - this.created_at.getTime() > this.expires_in * 1000
    }

    isNotExpired() {
        return !this.isExpired()
    }

    static create(json: any) {
        return new Session(
            json.access_token || json.token,
            json.expires_in,
            new Date()
        )
    }

    static fromStorage(json: any) {
        return new Session(
            json.access_token || json.token,
            json.expires_in,
            new Date(json.created_at)
        )
    }

    toStorage() {
        return JSON.stringify(this)
    }
}