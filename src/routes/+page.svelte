<script lang="ts">

    import Navbar from '../components/Navbar.svelte'
    import Feed from '../components/Feed.svelte'
    import Post from '../components/Post.svelte'

    import type { Link } from '../links';

    async function getLinks() {
        const req = await fetch('/api/links')
        return await req.json() as Link[]
    }

</script>

<Feed>
    {#await getLinks()}
        <p>Loading...</p>
    {:then links}
        {#each links as link, i}
            <Post {...link}/>
        {/each}
    {:catch error}
        <p>Something went wrong: {error.message}</p>
    {/await}
</Feed>