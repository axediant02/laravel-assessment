<template>
  <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" v-model="email" id="email" name="email"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" v-model="password" id="password" name="password"
            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required>
        </div>
        <v-btn color="primary w-100">Log-in</v-btn>
      </form>
      <p class="pt-2 flex justify-center">Didn't have an account?<router-link to="/signup"><v-text class="text-blue"> Register</v-text></router-link></p>
    </div>
  </div>


  
</template>

<script>
export default {
  name: 'Login',
};
</script>
