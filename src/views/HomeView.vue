<template lang="">
  <h1 v-if="user">Bienvenue {{ user.name }}</h1>
  <h1 v-else>Bienvenue</h1>
</template>

<script setup>
import { computed } from "vue";

const user = computed(() => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
});
</script>
<style lang=""></style>
