<script lang="ts">

    import Navbar from '../components/Navbar.svelte'
    import Feed from '../components/Feed.svelte'
    import Post from '../components/Post.svelte'

    import LinksAPI from '../lib/links_api_web'

    async function getLinks() {
        const links = await LinksAPI.links()
        return links
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
