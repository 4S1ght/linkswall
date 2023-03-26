<script lang="ts">

</script>

<section class="feed-wrapper">
    <div class="feed">
        <slot/>
    </div>
</section>

<style lang="scss">

    section.feed-wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 90px;

        .feed {
            max-width: 1400px;
            width: calc(100% - 40px);
            border-radius: 10px;
            border: solid 1px #0000001c;
            margin-bottom: 100px;
            padding: 20px;
        }
        
    }

</style>