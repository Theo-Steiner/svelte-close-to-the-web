export default `
<script setup>
import {ref, computed} from "vue"
const fw = ref("vue");
const color = computed(() =>
  fw.value == "vue"
    ? "#42b883"
    : ""
);
</script>

<template>
  <label>
		{{fw}} is my favorite!
    <input v-model="fw" />
  </label>
	<p v-for="c in fw">{{ c }}</p>
</template>

<style scoped>
label {
  padding: 20px 0;
  color: v-bind(color);
}
</style>
`
