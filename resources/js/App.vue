<template>
    <div id="app">
      <Menu :items="menuItems" />
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import Menu from './Pages/Home.vue'
  import Footer from './Pages/Footer.vue'
  export default {
    
    name: 'App',
    components: {
      Menu
    },
    data() {
      return {
        menuItems: [
          { name: 'Home', link: '/' },
          { name: 'About', link: '/about' },
          { name: 'Services', link: '/services' },
          { name: 'Contact', link: '/contact' }
        ]
      }
    }
  }
  </script>
  