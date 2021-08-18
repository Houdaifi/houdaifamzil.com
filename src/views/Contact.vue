<template>
    <div class="py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="absolute inset-0 bg-turquoise shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <div>
                    <h1 class="text-3xl font-extrabold">Contact</h1>
                    <p class="mt-3 font-sans">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you just want to say hi or have a question, don’t hesitate to contact me.</p>
                    <hr class="mt-3 border-gray-300">
                    </div>
                    <div class="divide-y divide-gray-200">
                        <form class="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Name <span class="text-red-500">*</span>
                            </label>
                            <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name">
                            
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Email <span class="text-red-500">*</span>
                            </label>
                            <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email">
                            
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Message <span class="text-red-500">*</span>
                            </label>
                            <textarea required class="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200" placeholder="Your message..."></textarea>
                            
                            <div class="flex items-end justify-end">
                            <button class="bg-fakhti hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                            Send
                            </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_nmcckkj', 'template_r99klsv', e.target, 'user_JQCvIs0n0XC3SuQBqhlT6')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>
