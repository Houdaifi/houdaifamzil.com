import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        Hello: "Hi 👋🏼! I'am",
        myName: 'Houdaifa Amzil',
        Aboutme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.',
        iwork: 'I love to work with...',

        Based: "I'm based in",
        city: 'Tangier, Morocco'
    },
    'fr': {
        Skills: 'Compétences',
        Projects: 'Projets ',
        Resume: 'CV',
        Contact: 'Contact',

        Hello: 'Salut 👋🏼! Je suis',
        myName: 'Houdaifa Amzil',
        Aboutme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.',
        iwork: "J'adore travailler avec..."
    },
    'es': {
        Skills: 'Habilidades',
        Projects: 'Proyectos ',
        Resume: 'CV',
        Contact: 'Contacto',

        Hello: 'Hola 👋🏼! Soy',
        myName: 'Houdaifa Amzil',
        Aboutme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.',
        iwork: 'Me encanta trabajar con...'
    },
    'ar': {
        Home: 'الرئيسية',
        Skills: 'مهارات',
        Projects: 'مشاريع ',
        Resume: 'سيرة ذاتية',
        Contact: 'راسلني',

        Hello: 'أهلاً 👋🏼!, أنا',
        myName: 'حديفة أمزيل',
        Aboutme: 'إلى تشكيل وفيما وفيما أولا والأقليات، مصالح شعور بة هو النظام صعود هذة التقرير للحقوق غير ومنافذها الدفاعية وهي الجانب تقدم ألف يقطعون بخصوص وشعور مفاوضات يقول تتعود مصالح العسكري تغيير أكد وخمسة الأميركيين من الجديدة قضايا الأمنية العربي اعتمدت حلفاء المنطقة،',
        iwork: '...أحب أن أعمل ب'
    },
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n