
export interface Link {
    link: string
    title: string
    description: string
    votes: number
    id: number
    timestamp: number
}

export default class LinksAPI {

    public static getInstance = () => this.instance || new this()
    private static instance: LinksAPI

    private link_upvote_threshold = 5
    private trending_link_vote_threshold = 50

    private constructor() {
        if (!localStorage.getItem('links')) {
            localStorage.setItem('links', JSON.stringify(defaultLinksContent))
        }
    }

    public List() {
        return  JSON.parse(localStorage.getItem('links')) as Link[]
    }

    public add(link: string, title: string, description: string) {
        const links: Link[] = JSON.parse(localStorage.getItem('links'))
        const id = links.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id + 1
        const newLink: Link = { id, link, title, description, votes: 0, timestamp: Date.now() }
        localStorage.setItem('links', JSON.stringify([...links, newLink]))
        return id
    }

    public get(id: number) {
        const links: Link[] = JSON.parse(localStorage.getItem('links'))
        return links.find(x => x.id === id)
    }

    public upvote(id: number) {
        const links: Link[] = JSON.parse(localStorage.getItem('links'))
        const link = links.find(x => x.id === id)
        if (link) { 
            link.votes++
            localStorage.setItem('links', JSON.stringify(links))
            return true 
        }
        return false
    }

    public downvote(id: number) {
        const links: Link[] = JSON.parse(localStorage.getItem('links'))
        const link = links.find(x => x.id === id)
        if (link && link.votes > 0) { 
            link.votes--
            localStorage.setItem('links', JSON.stringify(links))
            return true 
        }
        return false
    }

    public links = () => this.List().filter(x => x.votes >= this.link_upvote_threshold)
    public newlinks = () => this.List().filter(x => x.votes <= this.link_upvote_threshold)

    public trendinglinks() {

        const now = Date.now()
        const day = 24 * 60 * 60 * 1000

        return (this.List() as Array<Link & { vote_intensity: number }>)
            .filter(x => x.votes >= this.trending_link_vote_threshold)
            .map(x => {
                const age = Math.max(1, Math.round((now - x.timestamp) / day))
                return { ...x, vote_intensity: x.votes / age }
            })
            .sort((a, b) => b.vote_intensity - a.vote_intensity)
    }

}

const defaultLinksContent = [
    {
        "link": "https://google.com",
        "title": "Google market share down",
        "description": "Once upon a time at google...",
        "votes": 59,
        "id": 0,
        "timestamp": 168003336437
    },
    {
        "link": "https://google.com",
        "title": "Google loses to bing",
        "description": "Once upon a time at google...",
        "votes": 132,
        "id": 1,
        "timestamp": 1680012366437
    },
    {
        "link": "https://github.com/4S1ght/soybean",
        "title": "Soybean.",
        "description": "Automation tool, etc...",
        "votes": 50,
        "id": 2,
        "timestamp": 1680033366437
    },
    {
        "link": "https://google.com",
        "title": "A new link",
        "description": "*A creative description*",
        "votes": 3,
        "id": 3,
        "timestamp": 1680033366437
    },
    {
        "link": "https://google.com",
        "title": "lorem",
        "description": "...ipsum?",
        "votes": 4,
        "id": 4,
        "timestamp": 1680033366437
    }
]