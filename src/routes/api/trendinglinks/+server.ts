
import Links from '../../../links';
import config from '../../../config.json';

import type { Link } from '../../../links';

const day = 24 * 60 * 60 * 1000

export async function GET() {

    const now = Date.now()

    const links = ((await Links.list()) as Array<Link & { vote_intensity: number }>)
        .filter(x => x.votes >= config.trending_link_vote_threshold)
        .map(x => {
            const age = Math.max(1, Math.round((now - x.timestamp) / day))
            return { ...x, vote_intensity: x.votes / age }
        })
        .sort((a, b) => b.vote_intensity - a.vote_intensity)

	return new Response(
        JSON.stringify(links),
        { headers: { "Content-Type": "application/json" } }
    )
    
}