<script>
    import svelteSnippet from "./snippets/svelte.js";
    import vueSnippet from "./snippets/vue.js";
    import Slide from "../lib/Slide.svelte";
    import Code from "../lib/Code.svelte";
    import Notes from "../lib/Notes.svelte";

    import reveal from "../lib/reveal.js";

    let vueVisibility = "hidden";

    $: if ($reveal) {
        $reveal.on("fragmentshown", (event) => {
            if (event.fragment.toString() === "[object HTMLHRElement]") {
                vueVisibility = "visible";
            }
        });
        $reveal.on("fragmenthidden", (event) => {
            if (event.fragment.toString() === "[object HTMLHRElement]") {
                vueVisibility = "hidden";
            }
        });
    }
</script>

<Slide transition="none" bgImage="/svelte-machine.png">
    <!-- a dummy element to detect when data-fragment-index 1 should be mounted -->
    <hr style="display: none;" class="fragment none" data-fragment-index="1" />
    <div>
        <article>
            <header>
                <img src="svelte.svg" alt="" />
                <span>Svelte.js</span>
            </header>
            <Code lineNumbers={null}>
                {svelteSnippet}
            </Code>
            <div class="fragment fade-up" data-fragment-index="2">
                <a
                    href="https://stackblitz.com/edit/svelte-bundle-demo?file=src%2FApp.svelte"
                >
                    <img src="svelte-qr.png" alt="" />
                </a>
                <p class="fragment fade-up" data-fragment-index="3">
                    4.88 KiB / gzip: 2.25 KiB
                </p>
            </div>
        </article>
        <article style:visibility={vueVisibility}>
            <header>
                <img src="vue.svg" alt="" />
                <span>Vue.js</span>
            </header>
            <Code lineNumbers={null}>
                {vueSnippet}
            </Code>
            <div class="fragment fade-up" data-fragment-index="2">
                <a
                    href="https://stackblitz.com/edit/vue-bundle-demo?file=src%2FApp.vue"
                    ><img src="vue-qr.png" alt="" /></a
                >
                <p class="fragment fade-up" data-fragment-index="3">
                    54.38 KiB / gzip: 21.89 KiB
                </p>
            </div>
        </article>
    </div>
    <Notes>
        ウェブの第一の言語はjavascriptではなく、htmlです。
        スベルトのテンプレートはhtmlのスーパーセットです。
        そのおかげで非常に宣言的なコードで、コンポーネントを書くことができます。
        ボイラープレートが少ないスベルトのコンポーネントは、
        リアクトの同等のコンポーネントより大体やく40%小さいです。
        vue.jsのクリエイターのevan_youさんもそれに感動し、スベルトのテンプレートを元に、
        vue 3のコンポジションAPIを導入したそうです。
        vue3とスベルトをサイドバイサイドで見ると、その影響がすぐわかると思います。
        <br />--NEXT--<br />
        vueと違ってsvelteではわざわざrefというヘルパーをを使わなくても、ただ関数をテンプレートで使うことだけで、
        その関数はリアクティブな関数になります。<br />
        一番目立つのは、スベルトの独特なシンタックスですかね。 例えば、このドルのリアクティブステートメントはvueのcomputedやwatchに近いものです。
        <br />
        あとはとこのhandlebar.jsに近いeach block。Vueだとv-forですね。 しかし、vueとスベルトがそこまでにていたら、どうして僕はそれでも、
        svelteの方がウェブに近いと言い続けますか。 では、この二つアプリをビルドしてみましょう。
        <br />--stackblitz--<br /> まずは、vueです。これは、vite.jsで先のアプリを作ったものです。
        ご覧の通り、予想通りに動いています。 ここでvueをインプットすると、テキストのいろが変わります。
        では、ビルドします。javascriptバンドルを見ると、54キロバイトですね。 gzipするとさらに22キロバイトに下がります。
        悪くないですね。では、スベルトの方のアプリはどうでしょう。 これもご覧の通り、予想通り動いています。
        しかし、これをビルドすると、javascriptバンドルがvueのバンドルより全然小さいということがわかります。
    </Notes>
</Slide>

<style>
    div {
        display: flex;
        justify-content: space-between;
    }

    header img {
        margin: 0;
        padding: 0;
        box-shadow: none;
    }

    article :global(pre) {
        grid-column: 1/2;
        grid-row: 2/3;
    }

    div.fragment {
        grid-column: 1/2;
        grid-row: 2/3;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        z-index: 1;
        width: 90%;
        margin: 0 auto;
        backdrop-filter: blur(5px);
    }

    a > img {
        width: auto;
        height: 50%;
    }

    a {
        padding: 10%;
        width: 50%;
        background: #d9e3eeaa;
        border-radius: 8px;
        box-shadow: 0px 5px 15px rgb(0 0 0 / 15%);
    }

    article {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: auto;
        width: 100%;
    }
</style>
