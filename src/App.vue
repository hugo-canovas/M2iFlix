<template>
  <MenuComponent />
  <router-view />
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";

export default {
  components: {
    MenuComponent,
  },
};
</script>

<style scoped></style>
