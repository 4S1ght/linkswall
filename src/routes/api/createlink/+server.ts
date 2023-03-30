
import { error, redirect } from '@sveltejs/kit'
import Links from '../../../links'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async (e) => {

    const data = await e.request.formData()

    const title = data.get('title')       as string
    const link =  data.get('link')        as string
    const desc =  data.get('description') as string

    if (!title || !link || !desc) throw error(400)

    const id = await Links.add(link, title, desc)
    
    throw redirect(302, `/link/${id}`)
    
}