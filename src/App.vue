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
  data() {
    return {};
  },
};
</script>

<style scoped></style>
