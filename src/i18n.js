import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    'spanish': 'Spanish',
    'english': 'English',
    'lang': 'Lang',
    'tecnologies': 'Tecnologies',
    'tecnology': 'Tecnology',
    'projects': 'Projects',
    'project': 'Project',
    'certificates': 'Certificates',
    'certific': 'Certific',
    'contact': 'Contact',
    'thanks': 'Thanks',
    'message': 'Message',
    'subject': 'Subject',
    'sent a email to': 'Sent a email to',
    'send': 'Send',
    'email': 'Email',
    'you_email.com': 'you_email.com',
    'hi_cracy': 'Hi! Let\'s build something crazy',
    'see you on': 'See you on',
    'or': 'Or',
    'the web is beautiful': 'The web is beautiful',
    'let\'s build something': 'Let\'s build something',
    'crazy': 'Crazy',
    'interesting': 'Interesting',
    'interactive': 'Interactive',
    'powerful': 'Powerful',
    'amazing': 'Amazing',
    'beautiful': 'Beautiful',
    'light': 'Light',
    'abstract': 'Abstract',
    'optimum': 'Optimum',
    'quick': 'Quick',
    'strange': 'Strange',
    'elegant': 'Elegant',
    'geek': 'Geek',
    'efficient': 'Efficient',
    'nerd': 'Nerd'
  },
  es: {
    'spanish': 'Español',
    'english': 'Ingles',
    'lang': 'Idioma',
    'tecnologies': 'Tecnologias',
    'tecnology': 'Tecnologia',
    'projects': 'Proyectos',
    'project': 'Proyecto',
    'certificates': 'Certificados',
    'certific': 'Certificado',
    'contact': 'Contacto',
    'thanks': 'Gracias',
    'message': 'Mensaje',
    'subject': 'Asunto',
    'sent a email to': 'Envia un correo a',
    'send': 'Enviar',
    'email': 'Correo',
    'you_email.com': 'tu_correo.com',
    'hi_cracy': '¡Hola !, construyamos algo loco',
    'see you on': 'Nos vemos en',
    'or': 'O',
    'the web is beautiful': 'La web es hermosa',
    'let\'s build something': 'Construyamos algo',
    'crazy': 'Loco',
    'interesting': 'Interesante',
    'interactive': 'Interactivo',
    'powerful': 'Poderoso',
    'amazing': 'Increíble',
    'beautiful': 'Hermoso',
    'light': 'Ligero',
    'abstract': 'Resumen',
    'optimum': 'Óptimo',
    'quick': 'Rápido',
    'strange': 'Extraño',
    'elegant': 'Elegante',
    'geek': 'Friki',
    'efficient': 'Eficiente',
    'nerd': 'Nerd'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
