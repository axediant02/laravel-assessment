<template>
    <nav class="flex bg-gray-800 text-white ">
      <ul class="list-none p-0">
        <li class="inline mr-2" v-for="item in items" :key="item.name">
          <router-link class="text-white no-underline hover:underline" :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
       <!-- <div class="flex flex-col items-center justify-center w-1/2 h-16> -->
        <img class="flex h-20 self_start" src="/resources/assets/logo.png" alt="" srcset="">
    </nav>
    <div class="contaner flex justify-center">
    <div class="coding-image">

        <img src="/resources/assets/Website-Coding.png" alt="" srcset="">

    </div>


    <div class="card content-center">
        <div class="card-content text-black font-bold text-5xl">
            <h1>SOFTWARE DESIGN & <br> DEVELOPMENT COMPANY</h1>
        </div>

    </div>
</div>
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
  

  