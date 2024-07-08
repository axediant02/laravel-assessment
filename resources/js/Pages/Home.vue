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
                        <a :href="item.href" class="hover:text-gray-400" :data-scroll="item.scroll">{{ item.text }}</a>
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
                                <h1>SOFTWARE DESIGN & DEVELOPMENT</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- About Section -->
                <section
                    id="about"
                    class="min-h-screen bg-gray-200 py-20 flex items-center text-black">
                    <div class="container mx-auto flex justify-start items-start space-x-8">
                        <div class="about-content w-2/4 text-justify p-4 h-full">
                            <h2 class="text-7xl font-bold mb-4">About Us</h2>
                            <h3 class="text-2xl">{{ aboutContent }}</h3>
                        </div>
                        <div class="about-img w-2/4 p-9">
                            <img src="/resources/assets/codingimg2.png" alt="" srcset=""></div>
                        </div>
                    </section>

                    <!-- Services Section -->
                    <section
                        id="services"
                        class="min-h-screen bg-gray-300 py-20 flex justify-center">
                        <div class="container mx-auto text-center p-6">
                            <h2 class="text-4xl font-bold mb-4">Our Services</h2>
                            <p class="text-xl">{{ servicesContent }}</p>
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

                <script>
                    export default {
                        data() {
                            return {
                                navItems: [
                                    {
                                        href: '#home',
                                        scroll: 'home',
                                        text: 'Home'
                                    }, {
                                        href: '#about',
                                        scroll: 'about',
                                        text: 'About'
                                    }, {
                                        href: '#services',
                                        scroll: 'services',
                                        text: 'Services'
                                    }, {
                                        href: '#contact',
                                        scroll: 'contact',
                                        text: 'Contact'
                                    }
                                ],
                                aboutContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque enim v' +
                                        'oluptatem quas accusantium dolores ab tenetur, doloremque numquam dicta libero' +
                                        ' repellendus? Perferendis voluptate hic soluta! Libero facere earum repudianda' +
                                        'e!',
                                servicesContent: 'This is the services section. Here you can learn more about what we offer.',
                                form: {
                                    name: '',
                                    email: '',
                                    message: ''
                                }
                            }
                        },
                        methods: {
                            submitForm() {
                                // Handle form submission
                                console.log('Form submitted:', this.form)
                                // Reset form after submission
                                this.form = {
                                    name: '',
                                    email: '',
                                    message: ''
                                }
                            }
                        },
                        mounted() {
                            // Smooth scroll functionality
                            document
                                .querySelectorAll('a[href^="#"]')
                                .forEach(anchor => {
                                    anchor.addEventListener('click', function (e) {
                                        e.preventDefault();
                                        const targetId = this
                                            .getAttribute('href')
                                            .substring(1);
                                        const targetElement = document.getElementById(targetId);
                                        if (targetElement) {
                                            targetElement.scrollIntoView({behavior: 'smooth'});
                                        }
                                    });
                                });
                        }
                    }
                </script>

                <style scoped="scoped">
                    html {
                        scroll-behavior: smooth;
                    }
                </style>