<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/films"> Films</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/liste"> Liste</router-link>
          </li>
          <div v-if="!user" class="d-flex">
            <li class="nav-item">
              <router-link class="nav-link" to="/inscription"
                >Inscription</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sign-in"
                >Connexion</router-link
              >
            </li>
          </div>
          <li v-else>
            <button class="nav-link" @click="disconnected">Déconnexion</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = computed(() => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
});

const disconnected = () => {
  localStorage.clear();
  return router.push("/");
};
</script>

<style lang=""></style>
