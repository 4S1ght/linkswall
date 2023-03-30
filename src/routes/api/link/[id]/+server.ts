
import type { RequestHandler } from './$types'

import { error, json } from '@sveltejs/kit';
import Links from '../../../../links';

// @ts-ignore
export const GET: RequestHandler = async (e) => {

    const link = await Links.get(Number(e.params.id))

    if (!link) throw error(404)

    return json(link)
    
}