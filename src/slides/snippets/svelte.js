export default `
<script>
  let fw = "svelte";
  $: color = fw == "svelte"
      ? "#ff3e01"
      : "";
</script>

<label style:color>
  {fw} is my favorite!
	<input bind:value={fw} />
</label>

{#each fw as c}
  <p>{c}</p>
{/each}

<style>
  label {
    padding: 20px 0;
  }
</style>`
