
export interface Link {
    link: string
    title: string
    description: string
    votes: number
    id: number
    timestamp: number
}

export default class LinksAPI {

    private link_upvote_threshold = 5
    private trending_link_vote_threshold = 50

    public static async links(): Promise<Link[]> {
        const req = await fetch('http://localhost:3000/api/links')
        return await req.json()
    }

    public static async newlinks(): Promise<Link[]> {
        const req = await fetch('http://localhost:3000/api/newlinks')
        return await req.json()
    }

    public static async trendinglinks(): Promise<Link[]> {
        const req = await fetch('http://localhost:3000/api/trending')
        return await req.json()
    }

    public static async get(id: number): Promise<Link> {
        const req = await fetch(`http://localhost:3000/api/link/${id}`)
        return await req.json()
    }

    public static async add(link: string, title: string, description: string): Promise<number> {
        const req = await fetch(`http://localhost:3000/api/createlink`, { 
            method: 'POST',
            body: JSON.stringify({ link, title, description })
        })
        return (await req.json()).id as number
    }

    public static async upvote(id) {
        const req = await fetch(`http://localhost:3000/api/upvote/${id}`)
        return req.status === 200
    }

    public static async downvote(id) {
        const req = await fetch(`http://localhost:3000/api/upvote/${id}`)
        return req.status === 200
    }
    
}