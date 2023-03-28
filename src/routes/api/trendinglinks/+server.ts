
import { error } from '@sveltejs/kit';
import Links from '../../../links';
import config from '../../../config.json';

export async function GET() {

    const links = (await Links.list())
        .filter(x => x.votes >= config.trending_link_vote_threshold)
        .sort((a, b) => a.votes - b.votes)

	return new Response(
        JSON.stringify(links),
        { headers: { "Content-Type": "application/json" } }
    )
    
}