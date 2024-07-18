<template>
    <div id="app">
      <Menu :items="menuItems"/>
      <router-view></router-view>
      <Login/>
    </div>
  </template>
  
  <script>
  import Menu from './Pages/Home.vue'
  // import Login from './Pages/Login.vue'
  export default {
    
    name: 'App',
    components: {
      Menu
    },

    // components:{
    //   Login
    // }
    
  }
  </script>
  