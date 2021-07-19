<template>
    <div class="flex justify-center items-start shadow rounded">
        
        <!-- <div class="grid grid-cols-3">
            <div class="bg-gradient-to-b from-green-200 to-blue-200"></div>
            <div class="bg-white col-span-2 flex flex-col p-24">
                <form @submit.prevent="sendEmail">
                    <label>Name</label>
                    <input type="text" name="user_name">
                    <label>Email</label>
                    <input type="email" name="user_email">
                    <label>Message</label>
                    <textarea name="message"></textarea>
                    <input type="submit" value="Send">
                </form>
            </div>
        </div>

        <form class="contact-form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" name="user_name">
            <label>Email</label>
            <input type="email" name="user_email">
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send">
        </form> -->
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
