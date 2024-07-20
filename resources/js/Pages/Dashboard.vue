// UsersTable.vue
<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-icon left>mdi-account</v-icon>
        <span class="headline">User List</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="5"
          class="elevation-1"
          dense
          hide-default-footer
          :loading="loading"
          loading-text="Loading... Please wait"
          item-value="username"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Users</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:item.username="{ item }">
            <v-chip class="ma-2" color="blue" dark>{{ item.username }}</v-chip>
          </template>
          <template v-slot:item.email="{ item }">
            <v-icon left color="red">mdi-email</v-icon>
            {{ item.email }}
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Dashboard',
  data() {
    return {
      headers: [
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' }
      ],
      users: [],
      loading: true,
      search: ''
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('/api/users')
        .then(response => {
          this.users = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error("There was an error fetching the users!", error);
          this.loading = false;
        });
    }
  },
  computed: {
    filteredUsers() {
      if (!this.search) {
        return this.users;
      }
      return this.users.filter(user => {
        return user.username.toLowerCase().includes(this.search.toLowerCase()) ||
               user.email.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-top: 20px;
}
.v-toolbar-title {
  font-weight: bold;
}
.v-data-table {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
</style>
