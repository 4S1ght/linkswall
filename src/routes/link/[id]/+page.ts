
import type { PageLoad } from './$types'
import type { Link } from '../../../links';


export const load: PageLoad = async (e) => {

    async function getLink(id: string) {
        const req = await e.fetch(`/api/link/${id}`)
        return await req.json() as Link
    }

    return {
        ...(await getLink(e.params.id))
    }
}