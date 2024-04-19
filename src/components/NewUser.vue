<template lang="">
  <Form class="container" @submit="newUserAdd">
    <div class="mb-3">
      <label for="name" class="form-label">Nom</label>
      <Field
        type="text"
        class="form-control"
        id="name"
        name="name"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="firstname" class="form-label">Prenom</label>
      <Field
        type="text"
        class="form-control"
        id="firstname"
        name="firstname"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Mot de passe</label>
      <Field
        type="password"
        class="form-control"
        id="password"
        name="password"
      />
    </div>
    <!-- <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> -->
    <button type="submit" class="btn btn-primary">Submit</button>
  </Form>
</template>
<script>
import axios from "axios";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as yup from "yup";

export default {
  emits: ["sendData"],
  components: {
    Field,
    Form,
    ErrorMessage,
  },

  methods: {
    newUserAdd(values) {
      axios
        .post(`${this.BASE_URL}/user`, values)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          this.$router.push("/home");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang=""></style>
