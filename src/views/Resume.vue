<template>
  <div class="flex justify-center items-start pt-20 min-h-screen">
      <div class="bg-white shadow-xl rounded grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
        <!-- Left section -->
        <div class="row-span-1 col-span-1 space-y-4 pt-20 bg-gradient-to-b from-green-100 to-blue-100 dark:from-gray-200 dark:to-gray-400">

          <!-- Image and name -->
          <div class="flex flex-col justify-start items-center pb-8">
            <div>
              <img class="inline-block w-52 h-52 xl:h-64 xl:w-64 rounded-full ring-2 ring-white object-cover mb-4" src="../assets/me.jpg" alt="ME">
            </div>
            <div>
              <h1 class="text-gray-800 text-xl font-semibold mb-2">{{$t('myName')}}</h1>
            </div>
            <div>
              <h2 class="text-gray-700">{{ $t('job') }}</h2>
            </div>
          </div>
          
          
          <!-- Contact -->
          <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 space-y-4">
            <div><h1 class="text-lg font-semibold">Contact</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-envelope text-lg"></i></div>
              <div><h4 class="text-sm lg:text-base text-gray-700 lg:leading-loose leading-relaxed tracking-relaxed">houdaifaamzil@gmail.com</h4></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-phone-alt text-lg"></i></div>
              <div><h4 class="text-sm lg:text-base text-gray-700 lg:leading-loose leading-relaxed tracking-relaxed">{{$t('PhoneNumber')}}</h4></div>
            </div>
            <!-- <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-home text-lg"></i></div>
              <div><h4 class="text-sm lg:text-base text-gray-700 lg:leading-loose leading-relaxed tracking-relaxed">{{ $t('FullAdresse') }}</h4></div>
            </div> -->
          </div>


          <!-- Personal -->
          <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
            <div><h1 class="text-lg font-semibold">Personal</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-baby text-lg"></i></div>
              <div><h4 class="text-sm lg:text-base text-gray-700 lg:leading-loose leading-relaxed tracking-relaxed">{{$t('Born')}}</h4></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-male text-lg"></i></div>
              <div><h4 class="text-sm lg:text-base text-gray-700 lg:leading-loose leading-relaxed tracking-relaxed">{{$t('Single')}}</h4></div>
            </div>
          </div>

          <!-- Web -->
          <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
            <div><h1 class="text-lg font-semibold">Web</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-twitter text-lg"></i></div>
              <div><a href="https://twitter.com/H_amzil14" target="_blank" class="text-sm lg:text-base hover:text-turquoise text-gray-700 lg:leading-loose leading-relaxed tracking-relaxed">Twitter</a></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-linkedin text-lg"></i></div>
              <div><a href="https://www.linkedin.com/in/houdaifa-amzil-a4b275158/" target="_blank" class="text-sm lg:text-base hover:text-turquoise text-gray-700 lg:leading-loose leading-relaxed tracking-relaxed">LinkedIn</a></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-github text-lg"></i></div>
              <div><a href="https://github.com/Houdaifi" target="_blank" class="text-sm lg:text-base hover:text-turquoise text-gray-700 lg:leading-loose leading-relaxed tracking-relaxed">Github</a></div>
            </div>
          </div>

          <!-- Languages -->
          <div class="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 py-4">
            <div><h1 class="text-lg font-semibold mb-4">Languages</h1></div>
            <div class="flex mb-3" v-for="(language, index) in languages" :key="index">
              <div><h2 class="text-sm lg:text-base font-semibold lg:leading-loose leading-relaxed tracking-relaxed">{{$t(language.name)}} :</h2></div>
              <div class="text-sm lg:text-base text-gray-700 ml-2 mt-1">{{$t(language.level)}}</div>
            </div>
          </div>

        </div>
        
        <!-- Right section -->
        <div class="row-span-1 lg:col-span-2 bg-white dark:bg-gray-700 dark:text-gray-300 flex flex-col p-4 xl:p-12 border-r">

          <!-- Profile -->
          <div class="space-y-4">
            <h1 class="text-xl border-l-8 mb-8 border-green-200">{{$t('Profile')}}</h1>
            <p class="text-sm lg:text-base text-gray-500 dark:text-gray-300 leading-loose tracking-relaxed lg:leading-loose lg:tracking-relaxed">{{$t('Aboutme_Resume')}}</p>
            <hr class="border-gray-200">
          </div>

          <!-- Experience -->
          <div class="space-y-4 mt-8">
            <h1 class="text-xl border-l-8 border-green-200">{{$t('Experience')}}</h1>
            
            <div class="flex space-x-8 md:space-x-14 pt-8 pl-2 lg:pl-8 text-gray-500 dark:text-gray-300 text-sm lg:text-base" v-for="(experience,index) in experiences" :key="index">
              <div>
                <h2 style="max-width:50px;" class="text-xs lg:text-base md:text-lg">{{$t(experience.date)}} <span class="invisible">2020</span></h2>
              </div>
              <div class="border border-gray-400"></div>
              <div>
                <h2 class="text-gray-800 dark:text-gray-300">{{$t(experience.name)}}</h2>
                <h2 class="text-gray-600 dark:text-gray-400">{{$t(experience.company)}}</h2>
              </div>
            </div>
            <hr class="border-gray-200">
          </div>

          <!-- Formation -->
          <div class="space-y-4 mt-8">
            <h1 class="text-xl border-l-8 border-green-200">{{$t('Formation')}}</h1>
            
            <div class="flex space-x-8 md:space-x-14 pt-8 pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-sm lg:text-base" v-for="(formation,index) in formations" :key="index">
              <div class="flex space-x-4">
                <h2 style="max-width:50px;" class="text-xs lg:text-base md:text-lg dark:text-gray-300">{{$t(formation.date)}}</h2>
              </div>
              <div class="border border-gray-400"></div>
              <div>
                <h2 class="text-gray-800 dark:text-gray-300">{{$t(formation.name)}}</h2>
                <h2 class="text-gray-600 dark:text-gray-400">{{$t(formation.school)}}</h2>
              </div>
            </div>
            <hr class="border-gray-200">
          </div>

          <!-- Projects -->
          <div class="space-y-4 mt-8">
            <h1 class="text-xl border-l-8 border-green-200">{{$t('Skills')}}</h1>

            <div class="relative pt-8">
              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">Javascript</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:90%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">Vue JS</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">Tailwind CSS</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:90%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">Bootstrap</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">Laravel</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">MySQL</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:85%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">NodeJS</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">MongoDB</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">React JS</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:85%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm lg:text-base mb-2 dark:text-gray-300">Redux</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-turquoise"></div>
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
        {name: 'job', date: '2020', company: 'Sysbase'},
      ],
      formations:[
        {name: 'LicenceInfo', date: '2020', school: 'ENSA Tangier'},
        {name: 'LicenceEco', date: '2018', school: 'Universtiy'},
        {name: 'ArabCoders', date: '2017', school: 'OMAC'}
      ],
      languages:[
        {name: 'Arabic', level: 'Native'},
        {name: 'English', level: 'Advanced'},
        {name: 'French', level: 'Advanced'},
        {name: 'Spanish', level: 'Intermediate'}
      ]
    }
  }
}
</script>
