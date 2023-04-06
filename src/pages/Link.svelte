<script lang="ts">

    import Navbar from '../components/Navbar.svelte'
    import Feed from '../components/Feed.svelte'
    import Post from '../components/Post.svelte'

    import LinksAPI from '../lib/links_api'

    export let id: string

    function getLink(id: string) {
        return LinksAPI.getInstance().get(Number(id))
    }

</script>

<Feed>
        
    {#await getLink(id)}
        <p>Loading...</p>
    {:then link}
        <Post {...link}/>
    {:catch error}
        <p>Something went wrong: {error.message}</p>
    {/await}

</Feed>