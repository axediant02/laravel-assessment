<template>
    <div id="app">
      <Navbar />
      <router-view/> 
      
    </div>
  </template>
  
  <script>
  import Navbar from './Pages/Nav.vue';
  import Login from './Pages/Login.vue';
  import Signup from './Pages/Signup.vue';
  import Dashboard from './Pages/Dashboard.vue';


  export default {
    name: 'App',
    components: {
      Login,
      Signup,
      Navbar,
      Dashboard
      } 
  }
  </script>
  