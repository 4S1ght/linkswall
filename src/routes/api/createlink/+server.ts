
import { error, redirect } from '@sveltejs/kit';
import Links from '../../../links';
import config from '../../../config.json';
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async (e) => {

    const data = await e.request.formData()

    const title = data.get('title')       as string
    const link =  data.get('link')        as string
    const desc =  data.get('description') as string

    if (!title || !link || !desc) throw error(400)

    await Links.add(link, title, desc)

    e.setHeaders({ Location: "/newlinks" })
    
    return new Response()
    
}