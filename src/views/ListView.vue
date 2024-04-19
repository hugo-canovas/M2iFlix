<template lang="">
  <ul v-for="elt in moovieStore.mooviesList">
    <li>{{ elt.moovie.name }}</li>
  </ul>
</template>
<script setup>
import { useMoovieStore } from "../stores/moovie.store";

const moovieStore = useMoovieStore();
// console.log(moovieStore.mooviesList);
</script>
<style lang=""></style>
