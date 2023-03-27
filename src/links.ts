
import fs from 'fs/promises'
import path from 'path'
import url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export interface Link {
    link: string,
    title: string,
    description: string,
    votes: number
}

export default class Links {

    private static url = path.join(__dirname, 'links.json')

    public static async list() {
        const links: Link[] = JSON.parse(await fs.readFile(this.url, 'utf-8'))
        return links
    }

}

