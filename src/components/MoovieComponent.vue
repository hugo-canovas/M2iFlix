<template lang="">
  <h5>{{ moovie.name }}</h5>
  <!-- <img src="" :alt="moovie.img" /> -->
  <button class="btn btn-success" @click="addToList()">
    Ajouter à ma liste
  </button>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  props: {
    moovie: {},
  },
  methods: {
    addToList() {
      if (this.user !== null) {
        axios.post(`${this.BASE_URL}/user-list`, {
          user: this.user.id,
          moovie: this.moovie.name,
        });
      } else {
        console.log(
          "Vous devez être connecté pour ajouter un filme à votre liste"
        );
      }
    },
  },
};
</script>
<style lang=""></style>
