<template>
  <div class="flex justify-center items-start pt-20 min-h-screen">
      <div class="bg-white shadow-xl rounded grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
        <!-- Left section -->
        <div class="row-span-1 col-span-1 space-y-4 pt-20 bg-gradient-to-b from-green-100 to-blue-100">

          <!-- Image and name -->
          <div class="flex flex-col justify-start items-center pb-8">
            <div>
              <img class="inline-block w-52 h-52 lg:h-72 lg:w-72 rounded-full ring-2 ring-white object-cover mb-4" src="../assets/myRobot.jpg" alt="ME">
            </div>
            <div>
              <h1 class="text-gray-800 text-3xl font-semibold mb-2">{{$t('myName')}}</h1>
            </div>
            <div>
              <h2 class="text-gray-700">{{ $t('job') }}</h2>
            </div>
          </div>
          
          
          <!-- Contact -->
          <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 space-y-4">
            <div><h1 class="text-2xl font-semibold">Contact</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-envelope text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">houdaifaamzil@gmail.com</h4></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-phone-alt text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">{{$t('PhoneNumber')}}</h4></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-home text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">{{ $t('FullAdresse') }}</h4></div>
            </div>
          </div>


          <!-- Personal -->
          <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
            <div><h1 class="text-2xl font-semibold">Personal</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-baby text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">{{$t('Born')}}</h4></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-male text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">{{$t('Single')}}</h4></div>
            </div>
          </div>

          <!-- Web -->
          <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
            <div><h1 class="text-2xl font-semibold">Web</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-twitter text-lg"></i></div>
              <div><a href="https://twitter.com/H_amzil14" target="_blank" class="sm:text-base 2xl:text-xl hover:text-turquoise text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Twitter</a></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-linkedin text-lg"></i></div>
              <div><a href="https://www.linkedin.com/in/houdaifa-amzil-a4b275158/" target="_blank" class="sm:text-base 2xl:text-xl hover:text-turquoise text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">LinkedIn</a></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-github text-lg"></i></div>
              <div><a href="https://github.com/Houdaifi" target="_blank" class="sm:text-base 2xl:text-xl hover:text-turquoise text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Github</a></div>
            </div>
          </div>

          <!-- Languages -->
          <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 py-4">
            <div><h1 class="text-2xl font-semibold mb-4">Languages</h1></div>
            <div class="flex mb-3" v-for="(language, index) in languages" :key="index">
              <div><h2 class="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">{{$t(language.name)}} :</h2></div>
              <div class="text-gray-700 lg:text-lg ml-2">{{$t(language.level)}}</div>
            </div>
          </div>

        </div>
        
        <!-- Right section -->
        <div class="row-span-1 lg:col-span-2 bg-white flex flex-col p-4 sm:p-12 border-r">

          <!-- Profile -->
          <div class="space-y-4">
            <h1 class="text-3xl border-l-8 mb-8 border-green-200">{{$t('Profile')}}</h1>
            <p class="sm:text-base 2xl:text-xl text-gray-500 leading-loose sm:tracking-relaxed">{{$t('Aboutme')}}</p>
            <hr class="border-gray-200">
          </div>

          <!-- Experience -->
          <div class="space-y-4 mt-8">
            <h1 class="text-3xl border-l-8 border-green-200">{{$t('Experience')}}</h1>
            
            <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 text-base lg:text-xl" v-for="(experience,index) in experiences" :key="index">
              <div>
                <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl">{{$t(experience.date)}}</h2>
              </div>
              <div class="border border-gray-400"></div>
              <div>
                <h2 class="text-gray-800">{{$t(experience.name)}}</h2>
                <h2 class="text-gray-600">{{$t(experience.company)}}</h2>
              </div>
            </div>
            <hr class="border-gray-200">
          </div>

          <!-- Formation -->
          <div class="space-y-4 mt-8">
            <h1 class="text-3xl border-l-8 border-green-200">{{$t('Formation')}}</h1>
            
            <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 text-base lg:text-xl" v-for="(formation,index) in formations" :key="index">
              <div class="flex space-x-4">
                <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl">{{$t(formation.date)}}</h2>
              </div>
              <div class="border border-gray-400"></div>
              <div>
                <h2 class="text-gray-800">{{$t(formation.name)}}</h2>
                <h2 class="text-gray-600">{{$t(formation.school)}}</h2>
              </div>
            </div>
            <hr class="border-gray-200">
          </div>

          <!-- Projects -->
          <div class="space-y-4 mt-8">
            <h1 class="text-3xl border-l-8 border-green-200">{{$t('Skills')}}</h1>

            <div class="relative pt-8">
              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2">Javascript</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2">Vue JS</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2">Tailwind CSS</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:90%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2">Bootstrap</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2">Laravel</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:65%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2">MySQL</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:85%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2">Android Developement</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2">Flutter</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:50%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
  </div>
</template>


<script>
export default {
  name:'Resume',
  data(){
    return{
      experiences:[
        {name: 'job', date: '2020-', company: 'Sysbase'},
        {name: 'Salesman', date: '2018-2020', company: 'Decathlon'}
      ],
      formations:[
        {name: 'LicenceInfo', date: '2020-2021', school: 'ENSA'},
        {name: 'LicenceEco', date: '2016-2020', school: 'Universtiy'},
        {name: 'ArabCoders', date: '2017-2018', school: 'OMAC'}
      ],
      languages:[
        {name: 'Arabic', level: 'Native'},
        {name: 'English', level: 'Advanced'},
        {name: 'French', level: 'Intermediate'},
        {name: 'Spanish', level: 'Intermediate'}
      ]
    }
  }
}
</script>
