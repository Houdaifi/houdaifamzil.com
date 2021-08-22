<template>
    <div class="py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 max-w-xl mx-auto">
            <div class="absolute inset-0 bg-turquoise dark:bg-gray-700 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl"></div>
            <div class="relative bg-white shadow-lg dark:shadow-none rounded-3xl p-12 lg:p-20 dark:bg-gray-800 border border-opacity-0 border-gray-300 dark:border-opacity-100">
                <div class="max-w-md mx-auto">
                    <div>
                    <h1 class="text-3xl font-extrabold dark:text-gray-300">Contact</h1>
                    <p class="mt-3 text-gray-500 lg:text-lg xl:leading-relaxed xl:tracking-tight dark:text-gray-300">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you just want to say hi or have a question, don’t hesitate to contact me.</p>
                    <hr class="mt-3 border-gray-300">
                    </div>
                    <div class="divide-y divide-gray-200">
                        <form @submit.prevent="sendEmail" class="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300">
                                Name <span class="text-red-500">*</span>
                            </label>
                            <input required v-model="from_name" class="appearance-none text-base block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name">
                            
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300">
                                Email <span class="text-red-500">*</span>
                            </label>
                            <input v-model="email" required class="appearance-none text-base block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email">
                            
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-gray-300">
                                Message <span class="text-red-500">*</span>
                            </label>
                            <textarea v-model="message" required class="resize-y text-base py-3 px-4 border focus:outline-none focus:bg-white rounded-md w-full bg-gray-200 dark:bg-gray-700 dark:text-gray-300" placeholder="Your message..."></textarea>
                            
                            <div class="flex items-end justify-end">
                            <button type="submit" class="bg-fakhti hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
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
import Swal from 'sweetalert2';

const SwalEmail = Swal.mixin({
    customClass: {
        popup: 'dark:bg-gray-700',
        title: 'dark:text-gray-300',
        content: 'dark:text-gray-300',
        confirmButton: 'bg-fakhti hover:bg-turquoise text-white font-semibold py-2 px-4 rounded',
    },
    buttonsStyling: false,
})

export default {
    data(){
        return{
            from_name : '',
            email: '',
            message: ''
        }
    },
    methods: {
    
        sendEmail(){
            if(this.from_name !== "" || this.email !== "" || this.message !== ""){
                try {
                    emailjs.send("service_nmcckkj","template_r99klsv",{
                        to_name: "Amzil Houdaifa",
                        from_name: this.from_name,
                        message: this.message,
                        reply_to: this.email,
                    },'user_JQCvIs0n0XC3SuQBqhlT6').then(() => {
                        SwalEmail.fire({
                            icon: 'success',
                            title: 'Email sent!',
                            text: "Thank you for your message, i'll respond to you soon 🙏"
                        })
                    })
                } catch (error) {
                    SwalEmail.fire({
                        icon: 'error',
                        title: 'Email not sent!',
                        text: error
                    })
                }
            }

        }
    }
}
</script>
