<template>
    <div id="app">
      <Navbar />
      <route-view/>
      <router-view/>  

    </div>
  </template>
  
  <script>
  import Navbar from './Pages/Nav.vue';
  import Login from './Pages/Login.vue';
  import Signup from './Pages/Signup.vue';  


  export default {
    name: 'App',
    components: {
      Login,
      Signup,
      Navbar
      } 
  }
  </script>
  