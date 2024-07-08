<template>
    <div>
        <!-- Navigation -->
        <nav
            class="flex bg-gray-800 text-white justify-end h-20 text-2xl sticky top-0 z-50">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-lg font-semibold">
                    <a href="#" class="hover:text-gray-400">BCD</a>
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

                    <!-- About Section -->
                    <section
                        id="about"
                        class="min-h-screen bg-gray-200 py-20 flex items-center text-black">
                        <div class="container mx-auto flex justify-between">
                            <div class="about-content w-1/2 text-justify p-4 border-2 border-sky-500 rounded-md bg-gray-300 w-2/5">
                                <h2 class="text-5xl font-bold mb-4 text-sky-500">About Us</h2>
                                <p class="text-xl">
                                    At BCD, we're not just software developers - we're digital alchemists. Founded
                                    in 2024 by three caffeine-fueled college friends, we've grown from a dorm room
                                    startup to a team of passionate tech wizards.
                                </p>
                            </div>
                            <div class="about-img w-1/2 p-9 flex justify-center">
                                <img
                                    src="/resources/assets/codingimg2.png"
                                    alt="Coding illustration"
                                    class="max-w-full h-auto"></div>
                            </div>
                        </section>

                        <!-- Services Section -->
                        <section
                            id="services"
                            class="min-h-screen bg-gray-300 py-20 flex justify-center">
                            <div class="container mx-auto text-center p-6">
                                <h2 class="text-4xl font-bold mb-4">Our Services</h2>

                                <p class="text-xl">{{ servicesContent }}</p>
                                <div class="card p-6">

                                    <div
                                        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700 ">
                                        <a href="#">
                                            <h5
                                                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the
                                            biggest enterprise technology acquisitions of 2021 so far, in reverse
                                            chronological order.</p>
                                        <a
                                            href="#"
                                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg
                                                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10">
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </section>

                        <!-- Contact Section -->
                        <div
                            class="flex contact min-h-screen bg-gray-400 py-20 flex items-center justify-center">
                            <main class="container mx-auto px-4 py-8">
                                <section id="contact" class="text-center">
                                    <h2 class="text-3xl mb-8">Contact Us</h2>
                                    <form @submit.prevent="submitForm" class="flex flex-col space-y-4 items-center">
                                        <input
                                            v-model="form.name"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                            required="required">
                                            <input
                                                v-model="form.email"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                                required="required">
                                                <textarea
                                                    v-model="form.message"
                                                    name="message"
                                                    placeholder="Message"
                                                    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 w-full"
                                                    required="required"></textarea>
                                                <button
                                                    type="submit"
                                                    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
                                            </form>
                                        </section>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </template>

                    <script src="resources/js/scroll.js"></script>

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