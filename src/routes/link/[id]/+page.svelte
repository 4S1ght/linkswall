<script lang="ts">

    import type { PageData } from './$types'
    export let data: PageData

    import Navbar from '../../../components/Navbar.svelte'
    import Feed from '../../../components/Feed.svelte'
    import Post from '../../../components/Post.svelte'

    import type { Link } from '../../../links';

    async function getLink() {
        const req = await fetch('/api/link/')
        return await req.json() as Link[]
    }

</script>

<Feed>
    <Post {...data}/>
</Feed>