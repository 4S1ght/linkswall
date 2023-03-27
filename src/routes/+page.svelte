<script lang="ts">

    import Navbar from '../components/Navbar.svelte'
    import Feed from '../components/Feed.svelte'
    import Post from '../components/Post.svelte'

</script>

<Feed>
    {#each new Array(10) as item, i}
        <Post link="https://google.com" title="(x{i}) Google market share down " description="Once upon a time at google..." votes={1337}/>
    {/each}
</Feed>