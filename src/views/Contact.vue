<template>
    <div class="py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 max-w-xl mx-auto">
            <div class="absolute inset-0 bg-turquoise dark:bg-gray-700 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl"></div>
            <div class="relative bg-white shadow-lg rounded-3xl p-20 dark:bg-gray-800 border border-opacity-0 border-gray-300 dark:border-opacity-100">
                <div class="max-w-md mx-auto">
                    <div>
                    <h1 class="text-3xl font-extrabold dark:text-gray-300">Contact</h1>
                    <p class="mt-3 text-gray-500 lg:text-lg xl:leading-relaxed xl:tracking-tight dark:text-gray-300">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you just want to say hi or have a question, don’t hesitate to contact me.</p>
                    <hr class="mt-3 border-gray-300">
                    </div>
                    <div class="divide-y divide-gray-200">
                        <form class="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300">
                            Name <span class="text-red-500">*</span>
                            </label>
                            <input required class="appearance-none text-base block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name">
                            
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300">
                            Email <span class="text-red-500">*</span>
                            </label>
                            <input required class="appearance-none text-base block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email">
                            
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300">
                            Message <span class="text-red-500">*</span>
                            </label>
                            <textarea required class="resize-y text-base py-3 px-4 border focus:outline-none focus:bg-white rounded-md w-full bg-gray-200 dark:bg-gray-700 dark:text-gray-300" placeholder="Your message..."></textarea>
                            
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
