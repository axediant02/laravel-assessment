<template>
    <div id="dashboard">
      <h1>User Management Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <form @submit.prevent="updateUser">
        <input v-model="selectedUser.name" placeholder="Name" />
        <input v-model="selectedUser.email" placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        selectedUser: null,
      };
    },
    methods: {
      fetchUsers() {
        // Fetch users from the backend
        fetch('/api/users')
          .then(response => response.json())
          .then(data => {
            this.users = data;
          });
      },
      editUser(user) {
        this.selectedUser = { ...user };
      },
      updateUser() {
        // Update user on the backend
        fetch(`/api/users/${this.selectedUser.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.selectedUser),
        })
          .then(response => response.json())
          .then(() => {
            this.fetchUsers();
            this.selectedUser = null;
          });
      },
      deleteUser(userId) {
        // Delete user on the backend
        fetch(`/api/users/${userId}`, {
          method: 'DELETE',
        }).then(() => {
          this.fetchUsers();
        });
      },
    },
    mounted() {
      this.fetchUsers();
    },
  };
  </script>
  
  <style scoped>

  </style>
  