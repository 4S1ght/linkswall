
import { error } from '@sveltejs/kit';
import Links from '../../../../../links';

// @ts-ignore
export async function GET({ params }: { params: { action: 'up'|'down', id: number } }) {

    console.log(params)

    if (params.action === 'up') {
        const success = await Links.upvote(Number(params.id))
        if (success) return new Response()
        else throw error(400)
    }
    else if (params.action === 'down') {
        const success = await Links.downvote(Number(params.id))
        if (success) return new Response()
        else throw error(400)
    }
    else {
        throw error(400, `Unknown action: "${params.id}"`)
    }
    
}