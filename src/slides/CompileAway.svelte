<script>
    import Notes from "../lib/Notes.svelte";
    import Slide from "../lib/Slide.svelte";
</script>

<Slide bgImage="/svelte-robot.png">
    <h2>Compiler Magic</h2>
    <div class="rounded fragment">
        <p>
            VueやReactの仮想DOMが担う相当な処理はsvelteがコンパイル時点で処理します。
        </p>
        <img class="fragment fade-up" src="vdom-overhead.svg" alt="" />
    </div>
    <Notes>
        バンドルサイズがなぜこんなに違うかというと、svelteはバーチャルDOMに頼らないからです。
        <br />--NEXT--<br />
        VUEやリアクトの仮想DOMが担う相当な処理はsvelteがコンパイル時点で処理します。
        結果として、小さいバンドルサイズの上、よりパーフォーマントなランタイムも手に入ります。
        ちょっと目で見た方が、この違いがわかりやすいかなぁと思って、図を作ってきました。
        <br />--NEXT--<br />
        右の方の、vueとリアクトの仕組みを見ると、ある変化を効率的にBrowserのDOMにアプライするために、
        まず仮想DOMでコンポーネントをレンダーし、それで実際に変わるとわかった部分だけを本当のDOMで変えます。
        それと違って、svelteはテンプレートを分解し、それで得た情報によって効率的にdomを直接アップデートするjavascriptを生成します。
        つまり、svelteのコンパイル・ステップで生成されるコードはユーザーが書いた宣言的なコードから、
        ブラウザーが理解する命令的なコードに翻訳されます。 Reactやvueはランタイム時点でその翻訳を行う必要があるので、
        svelteよりwebから遠く離れていると言ってもいいと思います。
    </Notes>
</Slide>

<style>
    h2,
    p {
        text-align: start;
    }

    :global(.reveal) div {
        background: #d9e3eeaa;
        color: #151515;
        backdrop-filter: blur(5px);
        padding: 5%;
    }

    :global(.reveal) img {
        box-shadow: none;
    }
</style>
