<script lang="ts">

</script>

<nav>
    <section class="body">
        <a href="/">Home</a>
        <a href="/links">Trending links</a>
        <a href="/newlinks">New links</a>
    </section>
</nav>

<style lang="scss">

    nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.103);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;

        section.body {
            display: block;
            max-width: 1400px;
            width: 100%;
            margin: 0 30px;

            a {
                margin: 0 25px 0 0;
                font-family: 'Courier New', Courier, monospace;
                text-decoration: none;
                color: black;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

</style>