<template>
  <div>
      <div class="relative" v-on-clickaway="hide" @keydown.esc="hide">
        <div class="fixed rounded-full h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center right-4 bottom-4 bg-fakhti text-white cursor-pointer" @click="show">  
            <div>
                <i class="far fa-comment text-white"></i>
            </div>
        </div>
        <div class="fixed flex flex-col right-20 bottom-14 w-80 shadow-xl" v-show="visible">
            <div class="flex items-start px-4 rounded-t-lg py-5 bg-gray-500">
                <div>
                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </div>
                <div class="flex-shrink ml-4 font-semibold text-white text-lg">
                    {{$t('myName')}}
                </div>
            </div>

            <!-- Begin Chat -->
            <div style="max-height:500px" class="bg-gray-200 border-r border-l border-gray-300 text-sm border-b flex flex-col rounded-b-lg space-y-4 overflow-y-auto p-4">
                <div class="flex flex-col items-start space-y-4">
                    <div class="bg-white  rounded-lg border border-gray-400 p-2" v-for="(message, index) in messages" :key="index">
                        {{$t(message)}}
                    </div>
                </div>

                <div class="flex flex-col items-end space-y-4">
                    <div @click="repondre(index)" class="bg-gray-400 cursor-pointer hover:bg-gray-500 rounded-lg border border-gray-400 p-2" v-for="(question, index) in questions" :key="index">
                        {{$t(question)}}
                    </div>
                </div>

                <div class="flex flex-col items-start space-y-4">
                    <div class="bg-gray-700 text-white hover:bg-gray-600 rounded-lg border border-gray-400 p-2" v-for="(response, index) in responses" :key="index">
                        {{$t(response)}}
                    </div>
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
            visible:false,
            messages:{RobotHello: "RobotHello", helpU: 'helpU'},
            questions:{sayHi:'sayHi', hireU: 'hireU'},
            responses:{}
        }
    },
    methods: { 
        show(){
            this.visible = !this.visible
        },
        hide() {
            this.visible = false
        },
        repondre(question){
            this.questions = {question : question}
            switch (question) {
                case 'sayHi':
                    this.responses = {ReponseHi: 'ReponseHi', haveGoodDay: 'haveGoodDay'}
                    break;
            
                default:
                    break;
            }
        }
    }
}
</script>