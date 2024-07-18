<template>
    <div>
        <!-- Navigation -->
        <nav
            class="flex bg-gray-800 text-white justify-end h-20 text-2xl sticky top-0 z-50">

            <img class="pl-10" src="/resources/assets/logo1.png" alt="" srcset="">
                <div class="container mx-auto flex justify-between items-center">
                    <div class="text-lg font-semibold">
                    </div>
                    <ul class="flex space-x-4">
                        <li v-for="item in navItems" :key="item.href">
                            <a
                                :href="item.href"
                                class="hover:text-gray-400 hover:underline"
                                :data-scroll="item.scroll">{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Main Content -->
            <div class="section">
                <!-- Home Section -->
                <section id="home" class="min-h-screen py-20 flex items-center justify-center">
                    <div class="container flex justify-center">
                        <div class="coding-image">
                            <img src="/resources/assets/Website-Coding.png" alt="" srcset=""></div>
                            <div class="card content-center">
                                <div class="card-content text-black font-bold text-7xl">
                                    <h1 class="text-sky-500">BUILD, CREATE, DEVELOP</h1>
                                    <svg height="2" width="100%">
                                        <line x1="0" y1="0" x2="100%" y2="0" style="stroke:black;stroke-width:2"/>
                                    </svg>
                                    <h2 class="text-2xl italic">
                                        <br>Coding Dreams into Reality</h2>
                                    </div>
                                </div>
                            </div>
                        </section>

                        </template>

                        <script src="resources/js/scroll.js">
                    export default{
                        name: 'Home'
                    }
                    
                    </script>

                        <style scoped="scoped">
                            html {
                                scroll-behavior: smooth;
                            }

                            .fade-in {
                                opacity: 0;
                                transform: translateY(20px);
                                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                            }

                            .fade-in.appear {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        </style>