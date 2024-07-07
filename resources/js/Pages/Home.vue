<template>
    <nav class="flex bg-gray-800 text-white justify-end h-20 text-2xl sticky top-0 z-50">
      <ul class="list-none pr- m-10 content-center">
        <li class="inline mr-2" v-for="item in items" :key="item.name">
          <router-link class="text-white no-underline hover:underline" :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
       <!-- <div class="flex flex-col items-center justify-center w-1/2 h-16> -->
        <!-- <img class="flex h-20 self_start" src="/resources/assets/logo.png" alt="" srcset=""> -->
    </nav>
    <div class="contaner flex justify-center">
    <div class="coding-image">

        <img src="/resources/assets/Website-Coding.png" alt="" srcset="">

    </div>


    <div class="card content-center">
        <div class="card-content text-black font-bold text-7xl">
            <h1>SOFTWARE DESIGN & <br>DEVELOPMENT <br>COMPANY</h1>
        </div>

    </div>
</div>

    <div class="flex contact bg-gray-800">
        <main class="container mx-auto px-4 py-8">
    <section id="contact" class="text-center">
      <h2 class="text-3xl mb-8">Contact Us</h2>
      <form id="contact-form" class="flex flex-col space-y-4 items-center">
        <input type="text" name="name" placeholder="Your Name" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" required>
        <input type="email" name="email" placeholder="Your Email" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" required>
        <textarea name="message" placeholder="Your Message" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 w-full" required></textarea>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  </main>
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
  

  