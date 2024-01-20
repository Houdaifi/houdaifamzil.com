import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        Hello: "Hi 👋🏼! I am",
        myName: 'Houdaifa Amzil',
        job: 'Software Developer',
        Aboutme:`Hello 👋! I'm a passionate software developer based in Tangier, Morocco 🇲🇦, specializing in full-stack web development. With a solid foundation in .NET technologies, I bring a wealth of experience to every project.
                My current focus is on continuous improvement, striving to write clean and efficient code that not only meets but exceeds industry standards. Beyond coding, I find joy in the virtual realms of League of Legends and the exhilarating world of football.
                Feel free to explore my portfolio and reach out if you have any questions or exciting opportunities!`,
        Aboutme_Resume: `I have always been passionate about computers and I am interested in all new technologies.
                My training in school allowed me to acquire the necessary bases to master any programming language, and thanks to my professional experience I was able to work on several projects in different environments.
                Rigorous and autonomous. I like to learn new technologies and take up challenges.`,
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

        Decathlon: 'Decathlon Maroc',

        DecathlonProject: "An Android application made for Decathlon Tangier to facilitate and organize the calls diffusion in the store.  \n  The design is based on Decathlon colors.  \n  Calls types: Ordinary calls, Emergency calls, Covid-19 construction guidance.  \n  Technologies used: JAVA, XML",

        GoogleMapsProject: 'Calculate the distance and time between two locations in the map based on travel mode and get the data in an excel file. \n  Built by Vue JS, Google Maps API',

        TriviProject: "Trivi templates is an Android application made for people who love to share Instagram templates like q&a questions, This or That games, My favorites..., Gifs challenges on their stories. \n Feautres Included:  \n -Dividing app by categories. \n -Navigate smoothly between templates. \n -Download or direct share the template. \n -Receive notifications when new templates are added. \n -App rating. \n Technlogies used: Flutter",

        RestaurationProject: "A restoration application, where the administrator add the menu from the web interface and the customer will be able to consult the list of available products, "+
                            "add them to a shopping cart and validate the order by entering his details for delivery. ",

        TrageferProject: "A website made with VueJS and Tailwind CSS for a national metalic construction company.",
        AdspoolProject: "Adspool LTD comapny's officiel website",

        ReponseHi: 'Well thanks for passing by 😀,<br>I hope you\'ve enjoyed browsing my work. <br>Have a good day 🙏',
        ResponseBased: "I'm based in Tangier, <br> A beautiful city in the north of Morocco, <br> Here is a picture of it",
        ResponsehireU: "Great, Contact me and let get that work done 💪",

        Salesman: 'Salesman',
        ContactMe: 'Contact me',
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
        Basic: 'A2',

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

        job: 'Software Developer',

        Hello: 'Salut 👋🏼! Je suis',
        myName: 'Houdaifa Amzil',
        Aboutme: `Bonjour 👋 ! Je suis un développeur de logiciels passionné basé à Tanger, au Maroc 🇲🇦, spécialisé dans le développement web full-stack. Avec une base solide dans les technologies .NET, j'apporte une richesse d'expérience à chaque projet.
            Je me concentre actuellement sur l'amélioration continue, en m'efforçant d'écrire un code propre et efficace qui non seulement répond aux normes de l'industrie, mais les dépasse. Au-delà du codage, je trouve ma joie dans les royaumes virtuels de League of Legends et dans le monde exaltant du football.
            N'hésitez pas à consulter mon portfolio et à me contacter si vous avez des questions ou des opportunités intéressantes !`,
        Aboutme_Resume: `Passionné depuis toujours par l'informatique, je m'intéresse de près ou de loin à toutes les nouvelles technologies.
                Mes formations en école m'ont permis d'acquérir les bases nécessaires pour maîtriser n'importe quel langage de programmation, et grâce à mon expérience professionnelle j’ai pu travailler sur plusieurs projets dans différents environnements.
                Rigoureux et autonome. J’aime apprendre de nouvelles technologies et relever les défis.`,
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

        ContactMe: 'Contactez-moi',
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

        Salesman: 'Vendeur',

        Profile:'Profil',
        Experience:'Expérience',

        LicenceInfo: 'Licence en Technologie de Conception et de Développement Web & Mobile',
        LicenceEco: "Licence d'études fondamentales en sciences economiques et gestion",
        Universtiy: 'Université Abdelmalek Saadi',
        OMAC: 'Un million de codeurs arabes',

        Back: "Retour à l'accueil",
        NotFound: "Désolé, la page que vous recherchez n'existe pas.",

        DecathlonProject: "Une application Android réalisée pour Decathlon Tanger pour faciliter et organiser la diffusion des appels dans le magasin. \n Le design est basé sur les couleurs de Decathlon.\n"  +
                        "Types d'appels : Appels ordinaires, Appels d'urgence, Conseils de construction Covid-19.  \n Technologies utilisées : JAVA, XML",
        
        GoogleMapsProject: 'Calculez la distance et le temps entre deux endroits de la carte en fonction du mode de déplacement et récupérez les données dans un fichier excel. \n Développé par Vue JS, Google Maps API',

        TriviProject: "Trivi templates est une application Android faite pour les personnes qui aiment partager des templates Instagram comme des questions Q&A, des jeux This or That, My favorites..., des défis Gifs sur leurs stories. \n"+
                    "Caractéristiques incluses :  -Division de l'application par catégories. -Navigation fluide entre les modèles. -Télécharger ou partager directement le modèle. -Recevoir des notifications lorsque de nouveaux modèles sont ajoutés. \n"+
                    "-Classement de l'application. Technlogies utilisées : Flutter",

        RestaurationProject: "Il s’agit d’une application de restauration, où l’administrateur alimente la base de données depuis l’interface web et le client sera en mesure de consulter la liste des produits disponibles, \n" +
                            "de les ajouter dans un panier et de valider la commande en entrant ses coordonnées pour livraison.",

        TrageferProject: "Un site web réalisé avec VueJS et Tailwind CSS pour une entreprise nationale de construction métallique.",
        AdspoolProject: "Site officiel de la société Adspool LTD",

        contactslogan: "Je suis intéressé par les opportunités de travail en freelance, en particulier les projets ambitieux. Mais si vous voulez juste dire bonjour ou si vous avez une question, n'hésitez pas à me contacter."
    },
    'es': {
        Skills: 'Habilidades',
        Projects: 'Proyectos ',
        Resume: 'CV',
        Contact: 'Contacto',
        job: 'Software Developer',
        Myprojects: 'Algunos de mis proyectos...',
        seeResume: 'Ver CV',

        Hello: 'Hola 👋🏼! Soy',
        myName: 'Houdaifa Amzil',
        Aboutme: `¡Hola 👋! Soy un apasionado desarrollador de software con sede en Tánger, Marruecos 🇲🇦, especializado en desarrollo web full-stack. Con una base sólida en tecnologías .NET, aporto una gran experiencia a cada proyecto.
            Mi enfoque actual es la mejora continua, esforzándome por escribir código limpio y eficiente que no sólo cumpla sino que supere los estándares de la industria. Más allá de la programación, me divierto en los reinos virtuales de League of Legends y en el apasionante mundo del fútbol.
            ¡Siéntase libre de explorar mi cartera y ponerse en contacto si usted tiene alguna pregunta u oportunidades interesantes!`,
        iwork: 'Yo trabajo con...',
        SeeMore: 'Ver más',

        ContactMe: 'Contactame',
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

        Salesman: 'Vendedor',

        Profile:'Perfil',
        Experience:'Experiencia',
        Formation:'Formación',

        LicenceInfo: 'Licenciatura en Diseño y Desarrollo de Páginas Web y Móviles',
        LicenceEco: "Licencia de estudios básicos en ciencias económicas y de gestión",
        Universtiy: 'Universidad Abdelmalek Saadi',
        OMAC: 'Un millón de codificadores árabes',

        Back: "Volver a la página principal",
        NotFound: "Lo sentimos, la página que busca no existe",
        
        DecathlonProject: "Une application Android réalisée pour Decathlon Tanger pour faciliter et organiser la diffusion des appels dans le magasin. \n Le design est basé sur les couleurs de Decathlon.\n"  +
                        "Types d'appels : Appels ordinaires, Appels d'urgence, Conseils de construction Covid-19.  \n Technologies utilisées : JAVA, XML",
        
        GoogleMapsProject: 'Calcular la distancia y el tiempo entre dos lugares en el mapa en función del modo de desplazamiento y obtener los datos en un archivo Excel. \n Desarrollado por Vue JS, Google Maps API',

        TriviProject: "Trivi templates est une application Android faite pour les personnes qui aiment partager des templates Instagram comme des questions Q&A, des jeux This or That, My favorites..., des défis Gifs sur leurs stories. \n"+
                    "Caractéristiques incluses :  -Division de l'application par catégories. -Navigation fluide entre les modèles. -Télécharger ou partager directement le modèle. -Recevoir des notifications lorsque de nouveaux modèles sont ajoutés. \n"+
                    "-Classement de l'application. Technlogies utilisées : Flutter",

        RestaurationProject: "Una aplicación de restauración, donde el administrador añade el menú desde la interfaz web y el cliente podrá consultar la lista de productos disponibles, \n"+
                            "añadirlos a un carrito de la compra y validar el pedido introduciendo sus datos para la entrega.",

        TrageferProject: "Una web hecha con Vuejs y Tailwind CSS para una empresa nacional de construcción metálica.",
        AdspoolProject: "Sitio web oficial de la empresa Adspool LTD"
    },
    'ar': {
        Home: 'الرئيسية',
        Skills: 'مهارات',
        Projects: 'مشاريع ',
        Resume: 'سيرة ذاتية',
        Contact: 'راسل',
        seeResume: 'سيرتي الذاتية',
        job: 'مطور برامج',

        Hello: 'أهلاً 👋🏼!, أنا',
        myName: 'حديفة أمزيل',
        Aboutme: "أقطن في مدينة طنجة، أشتغل حاليا مطور مواقع الويب بدوام كامل مع تجربة سابقة في تطوير تطبيقات الهواتف، حاليا مهتم بصقل مهاراتي و كتابة كود نظيف\n.بعيدا عن البرمجة، أستمتع بلعب الألعاب ألإلكترونية و كرة القدم",
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

        ContactMe: 'Contactame',
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
        NotFound: "عذرا ، الصفحة التي تبحث عنها غير موجودة ",

        //Projects
        AdspoolProject: "الموقع الرسمي لشركة Adspool LTD"

    },
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n