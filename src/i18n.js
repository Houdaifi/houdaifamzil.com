import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        Hello: "Hi 👋🏼! I'am",
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
        TellJoke: 'Tell me a joke',
        Based: 'Where are you based ?',

        Decathlon: 'Decathlon',

        ReponseHi: 'Well thanks for passing by 😀,<br>I hope you\'ve enjoyed browsing my work. <br>Have a good day 🙏',
        ResponseBased: "I'm based in Tangier, <br> A beautiful city in the north of Morocco, <br> Here is a picture of it",
        Joke: "Q: What's the object-oriented way to become wealthy ?<br> A: Inheritance 😂😂😂",
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
        Aboutme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.',
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

        Decathlon: 'Decathlon',
        Salesman: 'Vendeur',

        Profile:'Profil',
        Experience:'Expérience',

        LicenceInfo: 'Licence en Technologie de Conception et de Développement Web & Mobile',
        LicenceEco: "Licence d'études fondamentales en sciences economiques et gestion",
        Universtiy: 'Université Abdelmalek Saadi',
        OMAC: 'Un million de codeurs arabes'
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
        Aboutme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.',
        iwork: 'Yo trabajo con...',
        SeeMore: 'Ver más',

        Email: 'Correo',
        Phone: 'Teléfono',
        PhoneNumber: '+212 634 89 69 98',
        FullAdresse: 'Av Idrissia, Tanger Marruecos',
        Born:"Nacido el 20 de junio de 1998",
        Single: 'Soltero',

        Arabic: 'Arabe',
        English: 'Inglés',
        French: 'Francés',
        Spanish: 'Española',

        Decathlon: 'Decathlon',
        Salesman: 'Vendedor',

        Profile:'Perfil',
        Experience:'Experiencia',
        Formation:'Formación',

        LicenceInfo: 'Licenciatura en Diseño y Desarrollo de Páginas Web y Móviles',
        LicenceEco: "Licencia de estudios básicos en ciencias económicas y de gestión",
        Universtiy: 'Universidad Abdelmalek Saadi',
        OMAC: 'Un millón de codificadores árabes'
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
        TellJoke: 'أخبرني نكتة',
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

    },
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n