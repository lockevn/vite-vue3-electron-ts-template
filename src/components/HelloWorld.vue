<script setup lang="ts">
import { ref } from "vue";
import { GeneFxDataService } from "../services/GeneFxDataService";

defineProps<{ msg: string }>();

const count = ref(0);
let text = ref("");
const increase = () => GeneFxDataService.test();
const testFetch = async () => {
  text.value = await GeneFxDataService.testFetch();
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count = increase()">
    count is: {{ count }}
  </button>
  <button type="button" @click="count = testFetch()">Fetch</button>
  <p>
    {{ text }}
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
