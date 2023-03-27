
import fs from 'fs/promises'
import path from 'path'
import url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export interface Link {
    link: string
    title: string
    description: string
    votes: number
    id: number
}

export default class Links {

    private static url = path.join(__dirname, 'links.json')

    public static async list() {
        const links: Link[] = JSON.parse(await fs.readFile(this.url, 'utf-8'))
        return links
    }

    public static async upvote(id: number) {
        const links: Link[] = JSON.parse(await fs.readFile(this.url, 'utf-8'))
        const link = links.find(x => x.id === id)
        if (link) { 
            link.votes++
            await fs.writeFile(this.url, JSON.stringify(links, null, 4))
            return true 
        }
        return false
    }

    public static async downvote(id: number) {
        const links: Link[] = JSON.parse(await fs.readFile(this.url, 'utf-8'))
        const link = links.find(x => x.id === id)
        if (link) { 
            link.votes > 0 && link.votes--
            await fs.writeFile(this.url, JSON.stringify(links, null, 4))
            return true 
        }
        return false
    }

}

