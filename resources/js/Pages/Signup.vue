<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-card-title class="primary">
        <span class="headline">Register</span>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="submitForm">
          <v-text-field
            v-model="form.name"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.email"
            label="Email"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            required
          ></v-text-field>

          <v-btn type="submit" color="primary">Register</v-btn>
          <text-body-2 class="w-100">Already Have an Account? <a href="" class="text-blue">Log-in</a></text-body-2>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Here you would handle form submission, e.g., send data to server
      console.log('Form submitted:', this.form);
      // Reset form fields after submission (if needed)
      this.form.name = '';
      this.form.email = '';
      this.form.password = '';
    }
  }
}
</script>

<style scoped>
.primary {
  background-color: #1976d2; /* Vuetify primary color */
  color: white;
}
</style>
