<script>
    import Notes from "../lib/Notes.svelte";
    import Slide from "../lib/Slide.svelte";
</script>

<Slide bgImage="/svelte-robot.png">
    <h2>
        <a href="https://svelte.dev/repl/hello-world?version=3.53.1"
            >Svelte REPL</a
        >
        <div />
    </h2>
    <Notes>
        まだ時間が大丈夫であれば、ちょっとそのコンパイルステップについて紹介したいと思います。
    </Notes>
</Slide>

<style>
    div {
        height: 42vh;
    }
</style>
