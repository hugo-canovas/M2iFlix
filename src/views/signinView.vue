<template lang="">
  <Form class="container" @submit="connectedUser">
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
    <button class="btn btn-primary">Submit</button>
  </Form>
</template>
<script>
import axios from "axios";
import { ErrorMessage, Field, Form } from "vee-validate";
export default {
  data() {
    return {
      user: {},
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    connectedUser(values) {
      axios
        .get(`${this.BASE_URL}/user`)
        .then((res) =>
          res.data.find((elt) => {
            if (elt.name === values.name && elt.password === values.password) {
              this.user = elt;
              localStorage.setItem("user", JSON.stringify(this.user));
              this.$router.push("/");
            }
          })
        )
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang=""></style>
