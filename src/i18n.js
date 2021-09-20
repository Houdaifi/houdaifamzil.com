import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        Hello: "Hi 👋🏼! I am",
        myName: 'Houdaifa Amzil',
        job: 'Junior Full Stack Developer',
        Aboutme: 'I started to write my first lines of code 5 years ago, starting by learning native Android app developement to Flutter, where i made several apps for local companies and for Play Store.'+
                ' Recently i had the opportunity to join a great team of developers on my first full time job, where i become more concentrated on Web Developement.',
        iwork: 'I work with...',
        Myprojects: 'Some of my projects...',
        seeResume: 'View Resume',

        city: 'Tangier, Morocco',
        SeeMore: 'View More',

        RobotHello: "Hi! I’m Houdaifa's Robot 🤖",
        helpU: 'How can i help you ?',

        sayHi:'Just wanted to say Hi 👋🏼',
        hireU: "i'd like to hire you 💼 ",
        Based: 'Where are you based ?',

        Decathlon: 'Decathlon',

        DecathlonProject: 'An Android application made for Decathlon Tangier to facilitate and organize the calls diffusion in the store.The design is based on Decathlon colors.\r\nCalls types: Ordinary calls, Emergency calls, Covid-19 construction guidance.Technologies used:JAVA, XML',

        BekoProject: 'A clone of beko famous company website, made it to develop my skills on Bootstrap and javascript\n Technologies used: HTML, CSS, Bootstrap, Javascript',

        TriviProject: "Trivi templates is an Android application made for people who love to share Instagram templates like q&a questions, This or That games, My favorites..., Gifs challenges on their stories.\
        Feautres Included: \
          -Dividing app by categories.\
          -Navigate smoothly between templates.\
          -Download or direct share the template.\
          -Receive notifications when new templates are added.\
          -App rating.\
        Technlogies used:\
        Flutter",

        ReponseHi: 'Well thanks for passing by 😀,<br>I hope you\'ve enjoyed browsing my work. <br>Have a good day 🙏',
        ResponseBased: "I'm based in Tangier, <br> A beautiful city in the north of Morocco, <br> Here is a picture of it",
        ResponsehireU: "Great, Contact me and let get that work done 💪",

        Salesman: 'Salesman',

        Email: 'E-mail',
        Phone: 'Phone',
        PhoneNumber: '+212 634 89 69 98',
        FullAdresse: 'Av Idrissia, Tangier Morocco',
        Born:"Born on 20th of June 1998",
        Single: 'Single',

        Profile:'Profile',
        Experience:'Experience',

        LicenceInfo: 'Bachelor of Web & Mobile Design and Development',
        LicenceEco: 'Bachelor of Basic Studies in Economics and Management',
        Universtiy: 'Abdelmalik Saadi University',
        OMAC: 'One Million Arab Coders',

        // Languages
        Arabic: 'Arabic',
        English: 'English',
        French: 'French',
        Spanish: 'Spanish',

        Native: 'Native',
        Advanced: 'C1',
        Intermediate: 'B2',

        Back: 'Back to Homepage',
        NotFound: 'Sorry, The page you are looking for does not exist',

        contactslogan: "I’m interested in freelance opportunities, especially ambitious projects. But if you just want to say hi or have a question, please don’t hesitate to contact me."
    },
    'fr': {
        Skills: 'Compétences',
        Projects: 'Projets ',
        Education: 'Education',
        Resume: 'CV',
        Contact: 'Contact',
        seeResume: 'Voir Mon CV',
        Myprojects: 'Certains de mes projets...',

        job: 'Développeur Junior Full Stack',

        Hello: 'Salut 👋🏼! Je suis',
        myName: 'Houdaifa Amzil',
        Aboutme: "J'ai commencé à écrire mes premières lignes de code il y a 5 ans, en commençant par apprendre le développement d'applications Android natives à Flutter, \
        où j'ai réalisé plusieurs applications pour des entreprises locales et pour le Play Store. \
        Récemment, j'ai eu l'occasion de rejoindre une grande équipe de développeurs pour mon premier emploi à temps plein, où je suis devenu plus intéressé par le développement web.",
        iwork: "Je travaille avec...",
        SeeMore: 'Voir Plus',

        RobotHello: "Bonjour! Je suis le robot de Houdaifa 🤖",
        helpU: 'Comment puis-je vous aider ?',

        sayHi: 'Je veux juste dire bonjour 👋🏼',
        Based:'Où êtes-vous basé ?',
        hireU: "je veux t'embaucher 💼",

        ReponseHi: 'Merci pour votre visite 😀, J\'espère que vous avez apprécié mon travail, <br> Bonne journée 🙏',
        ResponseBased: "Je suis basé à Tanger,<br> Une belle ville au nord du Maroc, <br> Voici une photo",
        ResponsehireU: "Génial, Contactez moi et Allons faire ce travail 💪",

        Email: 'E-mail',
        Phone: 'Télephone',
        PhoneNumber: '+212 634 89 69 98',
        FullAdresse: 'Rue Idrissia, Tanger Maroc',
        Born:"Né le 20 juin 1998",
        Single: 'Célibataire',

        Arabic: 'Arabe',
        English: 'Anglais',
        French: 'Français',
        Spanish: 'Espagnol',

        Native: 'Langue maternelle',

        Decathlon: 'Decathlon',
        Salesman: 'Vendeur',

        Profile:'Profil',
        Experience:'Expérience',

        LicenceInfo: 'Licence en Technologie de Conception et de Développement Web & Mobile',
        LicenceEco: "Licence d'études fondamentales en sciences economiques et gestion",
        Universtiy: 'Université Abdelmalek Saadi',
        OMAC: 'Un million de codeurs arabes',

        Back: "Retour à l'accueil",
        NotFound: "Désolé, la page que vous recherchez n'existe pas."
    },
    'es': {
        Skills: 'Habilidades',
        Projects: 'Proyectos ',
        Resume: 'CV',
        Contact: 'Contacto',
        job: 'Junior Full Stack Developer',
        Myprojects: 'Algunos de mis proyectos...',
        seeResume: 'Ver CV',

        Hello: 'Hola 👋🏼! Soy',
        myName: 'Houdaifa Amzil',
        Aboutme: "Comencé a escribir mis primeras líneas de código hace 5 años, empezando por aprender el desarrollo de aplicaciones nativas para Android con Flutter, \
        donde hice varias aplicaciones para empresas locales y para Play Store.\
        Recientemente tuve la oportunidad de unirme a un gran equipo de desarrolladores en mi primer trabajo a tiempo completo, donde me interesé más en el desarrollo web.",
        iwork: 'Yo trabajo con...',
        SeeMore: 'Ver más',

        Email: 'Correo',
        Phone: 'Teléfono',
        PhoneNumber: '+212 634 89 69 98',
        FullAdresse: 'Av Idrissia, Tanger Marruecos',
        Born:"Nacido el 20 de junio de 1998",
        Single: 'Soltero',

        // Languages
        Arabic: 'Arabe',
        English: 'Inglés',
        French: 'Francés',
        Spanish: 'Española',

        Native: 'idioma materno',

        Decathlon: 'Decathlon',
        Salesman: 'Vendedor',

        Profile:'Perfil',
        Experience:'Experiencia',
        Formation:'Formación',

        LicenceInfo: 'Licenciatura en Diseño y Desarrollo de Páginas Web y Móviles',
        LicenceEco: "Licencia de estudios básicos en ciencias económicas y de gestión",
        Universtiy: 'Universidad Abdelmalek Saadi',
        OMAC: 'Un millón de codificadores árabes',

        Back: "Volver a la página principal",
        NotFound: "Lo sentimos, la página que busca no existe"
    },
    'ar': {
        Home: 'الرئيسية',
        Skills: 'مهارات',
        Projects: 'مشاريع ',
        Resume: 'سيرة ذاتية',
        Contact: 'راسل',
        seeResume: 'سيرتي الذاتية',
        job: 'مطور مواقع ويب',

        Hello: 'أهلاً 👋🏼!, أنا',
        myName: 'حديفة أمزيل',
        Aboutme: 'بدأت رحلتي مع البرمجة منذ 5 أعوام، عندما بدأت بتعلم برمجة تطبيقات الهواتف، حيت قمت بتطوير بعض التطبيقات لشركات محلية و نشر بعضها على متجر جوجل ستور.مؤخراً قمت بالإلتحاق بفريق برمجة رائع في أول عمل لي في البرمجة بدوام كامل، حيت صرت مركزاً أكثر على تطوير تطبيقات الويب.',
        iwork: '...أعمل ب',

        Myprojects: '...بعض من مشاريعي',
        SeeMore: 'شاهد أكثر',
        
        //Robot chat 
        RobotHello: "أهلاً و سهلاً 🤖",
        helpU: 'كيف يمكنني مساعدتك ؟',

        sayHi: '👋🏼أردت فقط أن أقول مرحبا',
        Based:'أين تقطن ؟',
        hireU: '💼 أود توظيفك',
        // End Robot chat

        Email: 'الإيميل',
        Phone: 'الهاتف',
        PhoneNumber: '+٢١٢ ٦٣٤ ٨٩ ٦٩ ٩٨',
        FullAdresse: 'حي الإدريسية، طنجة المغرب',
        Born:"مواليد 20 يونيو 1998 ",
        Single: 'عازب',

        Salesman: 'موظف المبيعات',

        ReponseHi: 'حسنا شكرا على مرورك 😀, اتمنى لك يوم جيد🙏',
        ResponseBased: "أنا مقيم في طنجة، مدينة جميلة تقع في شمال المغرب، هذه صورة لها",
        ResponsehireU: 'جميل، راسلني الأن و لنقم بإنهاء هذا العمل',

        Profile:'بروفيل',
        Experience:'خبرة ',
        Formation:'تكوين',

        LicenceInfo: 'بكالوريوس تصميم وتطوير تطبيقات الويب والموبايل',
        LicenceEco: 'بكالوريوس في الدراسات الأساسية في الاقتصاد والإدارة',
        Universtiy: 'جامعة عبد الملك السعدي',
        OMAC: 'مبادرة مليون مبرمج عربي',

        // Languages
        Arabic: 'عربى',
        English: 'إنجليزي',
        French: 'فرنسي',
        Spanish: 'الأسبانية',

        // Languages level
        Native: 'اللغة الأم',
        Advanced: 'C1',
        Intermediate: 'B2',

        Back: "العودة إلى الصفحة الرئيسية ",
        NotFound: "عذرا ، الصفحة التي تبحث عنها غير موجودة "

    },
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n