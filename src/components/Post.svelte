<script lang="ts">

    import LinksAPI from "../lib/links_api_web";

    export let link: string
    export let title: string
    export let description: string
    export let votes: number
    export let id: number

    function shake(target: HTMLElement) {
        target.parentElement.animate([
            { transform: "translateX(-25%) rotate(-30deg)" },
            { transform: "translateX(20%) rotate(20deg)" },
            { transform: "translateX(-20%) rotate(-20deg)" },
            { transform: "translateX(10%) rotate(10deg)" },
            { transform: "translateX(0%) rotate(0deg)" }
        ], {
            duration: 450,
            iterations: 1,
        })
    }

    async function upvote(e: MouseEvent) {
        if (await LinksAPI.upvote(Number(id))) votes++
        else shake(e.target as HTMLElement)
    }

    async function downvote(e: MouseEvent) {
        if (await LinksAPI.downvote(Number(id))) votes--
        else shake(e.target as HTMLElement)
    }

</script>

<div class="post">
    <div class="votes">
        <span><button class="up" on:click={upvote}></button></span>
        <p class="count">{votes}</p>
        <span><button class="down" on:click={downvote}></button></span>
    </div>
    <div class="content">
        <a class="title" href={link}>
            <h1>{title}</h1>
        </a>
        <a class="link" href={link}>{link}</a>
        <p class="description">{description}</p>
    </div>
</div>

<style lang="scss">

    * {
        font-family: 'Courier New', Courier, monospace;
        color: black;
    }
    a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    .post {
        padding: 20px;
        margin: 20px;
        border-bottom: solid 1px #0000000e;

        display: grid;
        grid-template-columns: 60px 1fr;
        gap: 30px;

        &:last-child {
            border-bottom: none;
        }

        .votes {
            display: flex;
            align-items: center;
            flex-direction: column;

            .count {
                font-size: 18px;
                text-align: center;
                font-weight: bold;
            }
            button {
                height: 20px;
                width: 20px;
                background: transparent;
                border: none;
                border-top: solid 2px rgba(0, 0, 0, 0.3);
                border-left: solid 2px rgba(0, 0, 0, 0.3);
                cursor: pointer;
                &.up { transform: rotate(45deg); }
                &.down { transform: rotate(-135deg); }
                &:hover { border-color: black; }
            }
        }

        .content {
            .title h1 {
                margin: 0;
            }
            .link {
                font-size: 13px;
                margin: 0;
            }
        }
    }

</style>