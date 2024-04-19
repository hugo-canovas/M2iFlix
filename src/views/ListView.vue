<template lang="">
  <ul v-for="moov in test">
    <li>
      <h5>{{ moov.moovie }}</h5>
      <button class="btn btn-danger" @click="deleteFromList(moov.id)">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const test = ref([]);

const BASE_URL = `http://localhost:5555`;

onMounted(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser != null) {
    axios.get(`${BASE_URL}/user-list?user=${storedUser.id}`).then((res) => {
      if (res.data.length > 0) {
        test.value = res.data;
      } else {
        console.log("Vous n'avez pas de film dans votre liste");
      }
    });
  } else {
    console.log("Vous devez être connecté pouvoir votre liste de film");
  }
});

const deleteFromList = (id) => {
  axios.delete(`${BASE_URL}/user-list/${id}`, id).then(() => test.value);
};
</script>

<style lang=""></style>
