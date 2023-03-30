<script lang="ts">

    export let link: string
    export let title: string
    export let description: string
    export let votes: number
    export let id: number

    async function upvote() {
        const req = await fetch(`/api/vote/${id}/up`)
        if (req.status === 200) {
            votes++
        }
    }

    async function downvote() {
        const req = await fetch(`/api/vote/${id}/down`)
        if (req.status === 200) {
            votes--
        }
    }

</script>

<div class="post">
    <div class="votes">
        <button class="up" on:click={upvote}></button>
        <p class="count">{votes}</p>
        <button class="down" on:click={downvote}></button>
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