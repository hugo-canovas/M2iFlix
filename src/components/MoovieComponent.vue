<template lang="">
  <h5>{{ moovie.name }}</h5>
  <img src="" :alt="moovie.img" />
  <button @click="addToList()">Ajouter à ma liste</button>
</template>
<script>
import { useMoovieStore } from "../stores/moovie.store";
export default {
  props: {
    moovie: {},
  },
  methods: {
    addToList() {
      console.log(this.moovie);
      const moovieStore = useMoovieStore();
      moovieStore.addMoovieInList({
        moovie: this.moovie,
      });
    },
  },
};
</script>
<style lang=""></style>
