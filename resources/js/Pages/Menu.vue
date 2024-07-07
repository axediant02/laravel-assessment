<template>
    <nav class="bg-gray-800 text-white">
      <ul class="list-none p-0">
        <li class="inline mr-2" v-for="item in items" :key="item.name">
          <router-link class="text-white no-underline hover:underline" :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Menu',
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  

  