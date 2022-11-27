<script>
    import Notes from "../lib/Notes.svelte";
    import Slide from "../lib/Slide.svelte";
</script>

<Slide bgImage="">
    <div class="r-stack">
        <div class="fragment">
            <h3>Quiz - この謎の図は何を表すのか?</h3>
            <div>
                <img
                    src="mystery-graph.png"
                    alt="What's this mysterious graph about?"
                />
                <ol>
                    <li class="fragment fade-left">
                        Elon
                        Musk氏のツイートによる意味わからない暗号資産の価値の増え方。💸
                    </li>
                    <li class="fragment fade-left">
                        最近のインフレ率。ファミチキ一個で、一億円突破。😰
                    </li>
                    <li class="fragment fade-left">
                        svelte.jsのnpmインストール数が爆発的に増加💣
                    </li>
                </ol>
            </div>
        </div>
        <img
            class="fragment fade-up"
            src="svelte-react-vue.png"
            alt="svelte overpassing react and vue."
        />
        <img class="fragment fade-down" src="rich-tweet.png" alt="" />
    </div>
    <Notes>
        始める前にみんなさんにちょっとだけクイズをしてみたいと思います。この図は何を表すと思いますか？
        ずっとゆっくりなペースでしか増えなかったのに、急にたった一週間で３００パーセント以上で上がる。
        この激しい増え方に値するものはなんでしょうか。
        選択肢A：イーロン・マスクがまた何か意味わからない暗号資産についてツイートしたおかげで、
        その価値がものすごい勢いでふえています。
        選択肢B：今週のインフレ率。先週１９８円だったファミチキがなんと千円を突破しました。
        選択肢C：スベルトのnpmダウンロード数が爆発的に増えました。
        正解はCです！なんと、先週vueとreactよりスベルトの方がダウンロードされたみたいです。
        残念ながら、急に何千万人のデベロッパーがスベルトで開発をし始めた訳ではありません。
        おそらく、可哀想なエンジニアがとんでもないミスを犯し、
        無限ループでsvelteのパッケージをダウンロードするCIを作ってしまいました。
    </Notes>
</Slide>

<style>
    .fragment > div {
        margin-top: 5vh;
        height: 35vh;
        display: flex;
        align-items: center;
    }

    li {
        margin-bottom: 15px;
    }

    img.fragment {
        max-height: 65vh;
    }
</style>
