<script>
    import "reveal.js/dist/reveal.css";

    import Reveal from "reveal.js";
    import reveal from "./lib/reveal.js";
    import { onMount, setContext } from "svelte";
    import Presentation from "./Presentation.svelte";

    export let app;
    export let revealConfig;

    onMount(async () => {
        $reveal = Reveal(revealConfig);
        $reveal.initialize();
    });
</script>

<svelte:head>
    <title>{app.name}</title>
</svelte:head>

<div class="reveal">
    <div class="slides">
        <Presentation />
    </div>
</div>
