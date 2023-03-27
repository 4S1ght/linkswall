
import { error } from '@sveltejs/kit';
import Links from '../../../links';

export async function GET() {

    const links = (await Links.list()).filter(x => x.votes >= 5)

	return new Response(
        JSON.stringify(links),
        { headers: { "Content-Type": "application/json" } }
    )
    
}