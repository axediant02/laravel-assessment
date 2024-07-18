<template>
<div
class="flex contact min-h-screen bg-gray-400 py-20 flex items-center justify-center">
<main class="container mx-auto px-4 py-8">
    <section id="contact" class="text-center">
        <h2 class="text-3xl mb-8">Contact Us</h2>
        <form @submit.prevent="submitForm" class="flex flex-col space-y-4 items-center text-black">
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
    </template>