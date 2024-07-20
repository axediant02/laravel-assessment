<template>
    <v-container>
      <v-form @submit.prevent="updateUser">
        <v-text-field v-model="username" label="Username" required />
        <v-text-field v-model="email" label="Email" required />
        <v-text-field v-model="password" type="password" label="Password" required />
        <v-btn type="submit" color="primary">Update</v-btn>
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
    async created() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`/users/${id}`);
        const user = response.data;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    methods: {
      async updateUser() {
        const id = this.$route.params.id;
        try {
          await axios.put(`/users/${id}`, {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          this.$router.push({ name: 'dashboard' }); // Redirect after update
        } catch (error) {
          console.error('Error updating user:', error);
        }
      },
    },
  };
  </script>
  