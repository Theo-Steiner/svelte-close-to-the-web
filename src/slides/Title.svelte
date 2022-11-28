<script>
    import Notes from "../lib/Notes.svelte";
    import Slide from "../lib/Slide.svelte";
</script>

<Slide transition="convex-in slide-out" bgImage="/svelte-machine.png">
    <div class="fragment">
        <h2>ウェブにより近い</h2>
        <h1>Svelte.js</h1>
    </div>
    <Notes>
        先の図ではわかりにくかったですが、このCIミスが起こる前も、
        svelte.jsの使用率がとても激しいペースで上がっていました。
        去年から丸一年でダウンロード数が倍になり、
        <br />
        まもなく正式にリリースされるメタ・フレームワークのsvelte-kitが出たら、 さらに人気が増えると思います。
        <br />
        今日の発表で皆さんにこの話題のフレームワークについてちょっと紹介できればと思います。
        よろしくお願いいたします。
        <br />
        --NEXT--
        <br />
        僕にとってスベルトの魅力はウェブにより近いjavascriptフレームワークであるということにあると思います。
        そのウェブへの近さが一番感じられるのはテンプレートだと思います。
    </Notes>
</Slide>

<style>
    div {
        height: 80vh;
        padding-top: 5vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }

    h2 {
        text-align: start;
    }
</style>
