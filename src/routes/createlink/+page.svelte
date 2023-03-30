<script lang="ts">

    import Navbar from '../../components/Navbar.svelte'
    import Feed from '../../components/Feed.svelte'
    import Post from '../../components/Post.svelte'

    import type { Link } from '../../links';

    async function redirect(e: SubmitEvent) {
        e.preventDefault()
    }

</script>

<Feed>

    <form method="POST" action="/api/createlink">

        <label for="title">Title</label>
        <input type="text" name="title" id="title" required>

        <label for="link">Link</label>
        <input type="text" name="link" id="link" pattern="https?://[^\s/$.?#].[^\s]*" required>

        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" required></textarea>

        <button type="submit">Submit</button>

    </form>

</Feed>

<style lang="scss">

    form {

        input {
            background-color: transparent;
            border: solid 1px #0000001c;
            border-radius: 5px;
            margin-bottom: 20px;
            padding: 7px 10px;
            width: calc(100% - 20px);
            display: block;

            &:focus {
                outline: none;
                background-color: #00000009;
            }
        }

        textarea#description {
            background-color: transparent;
            border: solid 1px #0000001c;
            border-radius: 5px;
            margin-bottom: 20px;
            padding: 7px 10px;
            width: calc(100% - 20px);
            display: block;
            min-height: 100px;
            resize: vertical;
            overflow-y: auto;

            &:focus {
                outline: none;
                background-color: #00000009;
            }
        }

        label {
            font-family: 'Courier New', Courier, monospace;
            font-size: 13px;
            color: black;
        }

        button {
            background-color: transparent;
            border: solid 1px #0000001c;
            border-radius: 5px;
            padding: 7px 20px;
            &:hover {
                background-color: #00000009;
                cursor: pointer;
            }
        }

    }


</style>