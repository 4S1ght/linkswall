<script lang="ts">

    import Navbar from './components/Navbar.svelte'
    import Feed from './components/Feed.svelte'
    import Post from './components/Post.svelte'

    import PageIndex from './pages/Index.svelte'
    import PageLink from './pages/Link.svelte'
    import PageNewlinks from './pages/Newlinks.svelte'
    import PageTrending from './pages/Trendinglinks.svelte'
    import PageCreatelink from './pages/Createlink.svelte'

    let _location: string
    let _id: string

    function navigate() {
        const [_, location, id] = window.location.hash.replace('#', '').split('/')
        _location = location || ''
        _id = id
    }

    window.addEventListener('hashchange', navigate)
    navigate()

  
</script>

<main>

    <Navbar/>

    {#if _location === ''}
        <PageIndex/>
    {:else if _location === 'link' && _id !== ''}
        <PageLink id={_id}/>
    {:else if _location === 'newlinks'}
        <PageNewlinks/>
    {:else if _location === 'trending'}
        <PageTrending/>
    {:else if _location === 'createlink'}
        <PageCreatelink/>
    {:else}
        <h1>404</h1>
    {/if}

</main>

<style>

</style>
