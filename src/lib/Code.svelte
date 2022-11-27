<script>
	export let trim = true;
	export let noescape = true;
	export let lineNumbers = true;
	export let lineStartFrom = "1";
</script>

<pre>
		<code
		data-trim={trim}
		data-noescape={noescape}
		data-line-numbers={lineNumbers}
		data-ln-start-from={lineStartFrom}>
				<slot />
		</code>
</pre>
