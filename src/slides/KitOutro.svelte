<script>
    import Notes from "../lib/Notes.svelte";
    import Slide from "../lib/Slide.svelte";
</script>

<Slide bgColor="#cbd6e2" bgImage="/kit-machine-light.png">
    <div class="fragment rounded fade-up">
        <h2>SvelteKit 1.0</h2>
        <a href="https://kit.svelte.dev/docs/introduction"
            >svelte kit documentation</a
        >
        <br />
        <br />
        <h2>参考文献</h2>
        <a href="https://svelte.jp"
            >日本語のドキュメンテーション・ブログ・チュートリアル</a
        >
        <br />
        <br />
        <a href="https://discord.gg/PBugyUvy">スベルト日本のDiscord</a>
    </div>
    <Notes>
        今日は、ここで発表を終了とさせていただきます。
        みんなさんが、今日の発表で少しでもsvelte.jsに興味が沸いたら、ぜひ使ってみてください。
        <br />--NEXT--<br />
        まもなく、next.jsやnuxtと同等のメタフレームワークのsvelte-kitが正式にリリースされるので、
        それも本当に楽しい開発ができると思うので、そっちもぜひ触ってみてください。
        また機会があれば、そのsvelte-kitの話も少しできたらなぁと思います。
    </Notes>
</Slide>

<style>
    div {
        padding: 5%;
        color: #151515;
        background: #d9e3eeaa;
        backdrop-filter: blur(5px);
    }
</style>
