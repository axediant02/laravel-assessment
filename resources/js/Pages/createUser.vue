<template>
    <v-container>
      <v-form @submit.prevent="createUser">
        <v-text-field v-model="username" label="Username" required />
        <v-text-field v-model="email" label="Email" required />
        <v-text-field v-model="password" type="password" label="Password" required />
        <v-btn type="submit" color="primary">Create</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import axios from '@/axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async createUser() {
        try {
          await axios.post('/users', {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          this.$router.push({ name: 'dashboard' }); // Redirect after creation
        } catch (error) {
          console.error('Error creating user:', error);
        }
      },
    },
  };
  </script>
  