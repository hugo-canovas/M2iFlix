<template>
  <h1>Films</h1>
  <MoovieComponent v-for="moovie in moovies" :moovie />
</template>
<script setup>
import axios from "axios";

import MoovieComponent from "../components/MoovieComponent.vue";
import { onMounted, ref } from "vue";

const moovies = ref([]);

const BASE_URL = `http://localhost:5555`;

onMounted(() => {
  axios.get(`${BASE_URL}/films`).then((res) => (moovies.value = res.data));
});
</script>
<style></style>
