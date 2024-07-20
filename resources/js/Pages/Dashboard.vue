<template>
  <v-container>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">Username</th>
          <th class="text-left">Email</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.id">
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>
            <v-btn @click="editUser(item)" color="primary">Edit</v-btn>
            <v-btn @click="deleteUser(item.id)" color="red">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import axios from '@/axios'; // Assuming you save axios configuration in 'axios.js'

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async deleteUser(id) {
      try {
        await axios.delete(`/users/${id}`);
        this.fetchUsers(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    editUser(user) {
      this.$router.push({ name: 'edit', params: { id: user.id } });
    },
  },
};
</script>
