<template>
  <div>
      <div class="relative" v-on-clickaway="hide">
        <div class="fixed rounded-full h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center right-4 bottom-4 bg-fakhti text-white cursor-pointer" @click="Toggle">  
            <div>
                <i class="far fa-comment text-white"></i>
            </div>
        </div>
        <div class="fixed flex flex-col right-20 bottom-14 w-80 shadow-xl" v-show="visible">
            <div class="flex items-center px-4 rounded-t-lg py-5 bg-gray-500 dark:bg-gray-700">
                <div>
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover" src="../assets/myRobot.jpg" alt="ME">
                </div>
                <div class="flex-shrink ml-4 font-semibold text-white text-xl">
                    {{$t('myName')}}
                </div>
            </div>

            <!-- Begin Chat -->
            <div style="max-height:400px" class="bg-gray-200 dark:bg-gray-800 border-r border-l border-gray-300 dark:border-opacity-0 text-sm border-b flex flex-col rounded-b-lg space-y-4 overflow-y-auto p-4">
                <div class="flex flex-col items-start space-y-4">
                    <div class="bg-white rounded-lg p-2" v-for="(message, index) in messages" :key="index">
                        {{$t(message)}}
                    </div>
                </div>

                <div v-show="hasAsked" class="flex flex-col space-y-4" id="chat" >
                    <!-- The conversation goes here -->
                </div>

                <div class="flex flex-col items-center space-y-4">
                    <div @click="repondre(index)" class="bg-gray-700 text-white cursor-pointer hover:bg-gray-800 rounded-lg  p-2" v-for="(question, index) in questions" :key="index">
                        {{$t(question)}}
                    </div>
                    <router-link to="Contact" :class="[{'animate-bounce': isToContact}]" class="bg-gray-700 text-white cursor-pointer hover:bg-gray-800 rounded-lg p-2">
                         {{$t('Contact')}}
                    </router-link>
                </div>

            </div>
            <!-- End chat -->
        </div>
      </div>
    </div>
</template>


<script>
import { directive as onClickaway } from 'vue-clickaway'

export default {
    name: 'ChatWithMe',
    directives: {
        onClickaway: onClickaway,
    },
    data(){
        return{
            hasAsked: false,
            visible:false,
            isToContact: false,
            messages:["RobotHello", 'helpU'],
            questions:['sayHi', 'TellJoke','Based','hireU'],
            askedQuestions:[],
            responses:["ReponseHi", 'Joke', "ResponseBased", "ResponsehireU"],
        }
    },
    computed:{
        chat() {
            return document.getElementById('chat')
        }
    },
    methods: { 
        show(){
            this.visible = true
        },
        hide() {
            this.visible = false
        },
        Toggle(){
            this.visible = !this.visible
        },
        writeQuestion(question){
            this.chat.innerHTML += '<div class="flex flex-col items-end"><div class="bg-black text-right rounded-lg text-white p-2">'+this.$i18n.t(question)+'</div></div>'
        },
        writeToResponse(response){
            setTimeout(() => {
                this.chat.innerHTML += '<div class="flex flex-col items-start"><div class="bg-gray-300 rounded-lg p-2">'+this.$i18n.t(response)+'</div></div>'
            }, 800);
        },
        repondre(question){
            this.hasAsked = true
            this.writeQuestion(this.questions[question])
            this.writeToResponse(this.responses[question])

            if(this.questions[question] == 'Based'){
                setTimeout(() => {
                    this.chat.innerHTML += '<div class="flex flex-col items-start">'+
                        '<img v-img class="h-52 w-52" src="https://images.unsplash.com/photo-1579462270065-da1542def539?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Tangier"></div>'
                }, 2000);

            }

            if(this.questions[question] == 'hireU'){
                this.isToContact = true
            }
        }
    }
}
</script>