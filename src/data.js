import { TbBarbell } from "react-icons/tb";
import { TbTreadmill } from "react-icons/tb";
import { TbCarrot } from "react-icons/tb";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Tienda",
        path: '/tienda'
    },
    {
        name: "Casos de Exito",
        path: '/galeria'
    },
    {
        name: "Planes",
        path: '/planes'
    },
    {
        name: "Contacto",
        path: '/contacto'
    }
]

export const programs = [
    {
        id: 1,
        icon: <TbTreadmill/>,
        type: 'regular',
        title: "Cero Excusas",
        info: "Entrena con nosotros desde casa, clases todos los días online",
        path: "/planes"
    },
    {
        id: 2,
        icon: <TbBarbell/>,
        type: 'regular',
        title: "VidaFit",
        info: "Entrenamiento personalizado accesible offline en todo momento",
        path: "/planes"
    },
    {
        id: 3,
        icon: <TbBarbell/>,
        type: 'premium',
        title: "VidaFit Prime",
        info: "Por una hora al dia sere tu personal trainer Virtual para gimnasio",
        path: "/planes"
    },
    {
        id: 4,
        icon: <GiForkKnifeSpoon/>,
        type: 'regular',
        title: "Nutrición Total",
        info: "Diseñemos juntos un plan de alimentación a tu medida",
        // info: "Diseñemos juntos un plan de 100% personalizado para que logremos el balance perfecto en rutina de alimentación, todo a tu medida!",

        path: "/planes"
    }
]

export const values = [
    {
        id: 1,
        icon: <BsPersonArmsUp/>,
        title: "Charlas Motivacionales",
        desc: "Tenemos charlas donde conversaremos sobre nuestros procesos, nos conoceremos muchisimo mas y compartiremos experiencias"
    },
    {
        id: 2,
        icon: <TbCarrot/>,
        title: "Plan Alimenticio",
        desc: "Todos mis programas incluyen un plan de alientacion basico, tambien incluyendo suplementación, con productos sugeridos"
    },
    {
        id: 3,
        icon: <FaHandsHelping/>,
        title: "Acompañamiento en el Proceso",
        desc: "Estaré en todos nuestros encuentros para acompañarte y guiarte en todos tus ejercicios"
    },
    {
        id: 4,
        icon: <MdSchedule />,
        title: "Facilidad de Horarios",
        desc: "Todos nuestros programas son online, y accesibles desde la comodidad del espacio que tú elijas"
    }
]

export const faqs = [
     {
        id:1,
        question:"¿Qué pasará si tengo preguntas durante el proceso?",
        answer: "Tendrás contacto directo conmigo a través de un chat que te enviaré una vez adquieras mi plan, también tenemos una video llamada semanal."
    },
    {
        id:2,
        question:"¿Este plan es presencial?",
        answer: "Mis planes son 100% en línea. Nos vemos a través de videollamadas mes a mes en el plan Vidafit Prime o haces el entrenamiento con la plataforma de videos en el plan VidaFit."
    },
    {
        id:3,
        question:"¿Puedo hacerlo si nunca he entrenado?",
        answer: "Sí, mis planes son muy específicos, además, te envío todo de manera muy detallada."
    },
    {
        id:4,
        question:"¿Cuánto tiempo tardaré en ver resultados?",
        answer: "Es imposible asegurarte un tiempo específico, lo que si puedo afirmar es que verás resultados siempre y cuando cumplas a cabalidad con el plan."
    },
    {
        id:5,
        question:"¿Las rutinas son para gym o para casa?",
        answer: "Tú eliges, al momento de llenar el cuestionario general y tu cuadro de reporte debes especificarlo."
    },
    {
        id:6,
        question:"¿El coaching es igual al reto CERO EXCUSAS?",
        answer: "No, son dos planes distintos, el reto se hace en vivo a las 7 am hora Colombia y se renueva cada 4 semanas."
    },
    {
        id:7,
        question:"¿Puedo solicitar devolución de mi dinero?",
        answer: "No, una vez cancelado no podrás solicitar devolución."
    },
    {
        id:8,
        question:"¿Puedo pausar mi plan una vez iniciado?",
        answer: "Si, únicamente con excusa médica o calamidad familiar la cual debe ser notificada."
    }    
]

export const testimonials = [
    {
        id: 1,
        name: "Silvia Roxana",
        quote: "Que lindo leerlas, yo empecé por adelgazamiento pero la verdad las ganas de adelgazar no me habrían dado para quedarme tanto tiempo, en cambio el dormir mejor, el despertar sin dolores, el poder subir la escalera y amarrarme los zapatos sin ahogarme es lo que me motiva a seguir❤ y por supuesto Natha qué es una entrenadora maravillosa💘gracias gracias gracias",
        job: "cero excusas"
    },
    {
        id: 2,
        name: "Aura Cristina",
        quote: "ya que todas andamos en el momento especial, yo también quiero agradarles a todas verlas a ustedes enviando sus fotos y comidas dan ese toque de empujón  a @Fit By Nathaly  gracias por el amor que le pones a esto, yo inicie esto por que necesitaba la disciplina y la energía que da el ejercicio  y asi ha sido levantarme temprano a entrenar ya se ha vuelvo una rutina que me permite aguantar todo el día sin querer renunciar como era antes, soy mama, estudiante y empleada y no saber organizarme me estaba costando estabilidad emocional la cual he ido recuperando gracias a esto, esto no solo se hace por físico pero si que ayuda verme las piernas que llevo 🤭🤭. no siendo mas muchas gracias a todas y ati naty en especial  💫",
        job: "cero excusas"
    },
    {
        id: 3,
        name: "Arianna Rebeca",
        quote: "@Fit By Nathaly estoy super emocionada y no es a mí a la que van dirigida tan hermosas palabras de cada una, y es que, estamos claras que tú eres nuestro conciencia de fortaleza, tú nos has inspirado a seguir y a decir que sí podemos, se que no me conecto en las mañanas a las clases con ustedes, pero ya en este segundo mes estoy orgullosa de no haber fallado ni un solo día y cumplirme, ya los ejercicios son mi constate. De verdad a parte quiero agradecer a cada una de ustedes chicas, sus historias inspiran también, somos un grupo hermoso de apoyo, de amigas en la distancia. Son todas un sol🫶🏼 estoy feliz de poder continuar, y de poder tener la inspiración de todas sobre toda de nuestra bellísima natha. Un fuerte abrazos 🤗 somos una mejor versión",
        job: "cero excusas"
    },
    // {
    //     id: 4,
    //     name: "Jessy Naffah",
    //     quote: "@Fit By Nathaly  como te he venido diciendo mil gracias por todo el amor que le colocas a este tu trabajo y vida, realmente estoy muy feliz super mis expectativas tenia mucho miedo ya que una vez intente estar en gimnasio y me lesione y quede curada pero contigo todo es diferente (suena a frase de cajon pa un man) pero es mas que real jajajajja, gracias por ayudarme a dormir en las noches gracias por que me siento muchisimo mejor gracias por ser apoyo y motivación por tu constancia y tu excelente asesoria, empece este mes 3 dias  espero poder ir mejorando cada dia mas, GRACIAS A TODAS LAS CHICAS DEL GRUPO por que me hacen reir y por sus excelentes recomendaciones.",
    //     job: "cero excusas"
    // },
    // {
    //     id: 5,
    //     name: "Rossana Martínez",
    //     quote: "Estoy feliz de haber completado todos los entrenamientos del mes 🥹 no me pude conectar en tres ocasiones por la mañana pero aproveché las grabaciones al máximo. Gracias Nathaly por ser tan buena profe y sobre todo por escribir y estar pendiente esos días que no me pude conectar, conquistaste mi Kokoro ❤ Estoy feliz también porque este próximo mes logré convencer a una amiga a unirse y porque de a poquito se van sintiendo los cambios. Comencé en marzo con 85 kilos y hoy me pese y estoy en 80 🌝 no es mucha la diferencia pero no me he castigado con dietas locas como hacía antes y me siento poderosa por poder ejercitarme a diario. Te quiero mucho gracias por presentarme a @Fit By Nathaly 🫶🏼",
    //     job: "cero excusas"
    // },
    // {
    //     id: 6,
    //     name: "",
    //     quote: "Buenos días chicas!!! Estoy súper agradecida con Dios por haber visto ese anuncio y haberle escrito a Nathy ha Sido una de las mejores decisiones que he podido tomar, por mi y por mi salud,estuve desde agosto hasta este mes encerrada en mi misma, hasta el punto de llegar a pesar 78 kilos midiendo 1.50, me sentia horrible, estaba súper amargada a veces hasta sentía que era mala mamá, este mes han cambiado muchísimas cosas en mi vida, después de tanto tiempo volví a trabajar, volví a comer bien a sentirme bien conmigo misma, agradezco mucho a Nathy y a ustedes porque está semana ha Sido difícil, pero las leo y me doy cuenta que si puedo, que todavía me falta mucho, pero vamos poco a poco, voy a lograr lo que tanto quiero que es sentirme mejor y tener mejor calidad de vida. Gracias chicas y gracias Nathy ❤❤",
    //     job: "cero excusas"
    // },
    // {
    //     id: 7,
    //     name: "",
    //     quote: "Yo tengo que decir que: Gracias por este mes 🫶🏻🫶🏻  por que me levantaba y corría a entrenar, espero que este mes salga el sol y  entrenare afuera, para que me vean jeje. Gracias por que tengo la mejor entrenadora eso era lo que buscaba y este año se me hizo realidad. Gracias a cada una por sus recetas que publican acá, y me encanta que vengan cosas nuevas ya que  es tan creativo y unicó, me gusta que inspiras @Fit By Nathaly a hacer de todo sin quejarse y me llenas de buena energía cada mañana",
    //     job: "cero excusas"
    // },
    // {
    //     id: 8,
    //     name: "Violeta Martínez",
    //     quote: "Yo cada día me siento más feliz de haber encontrado a Cero Excusas. Nunca he sido de hacer ejercicios, jamás! Y cuando lo intentaba, era más bien una tortura😒. Ahora me encanta, lo hago con entusiasmo, no me pierdo una rutina y si me salto un día, no me siento cómoda...tengo que reponerlo. Lo que más me gusta es que no hay forma de aburrirse, Nathaly siempre sale con algo nuevo (como los dichosos cangrejitos 😂😂😂) y cada día nos invita a retarnos. No hay espacio para el aburrimiento. Aparte, he aprendido a quererme, a pensar en mi...esa hora diaria es un regalo que me doy, que me alegra el día, la disfruto y lo mejor es que me da energía, me da salud, agilidad y un bonito reflejo en el espejo.😍😍😍 Gracias Nathaly por ser tan dedicada, por estar pendiente de cada detalle, por hacer de Cero Excusas un rinconcito agradable y de disfrute. Gracias por buscar siempre darnos más. 💕",
    //     job: "cero excusas"
    // },
    // {
    //     id: 9,
    //     name: "María Chacín",
    //     quote: "El hecho de que la chuckytrainer me ha hecho despertarme todos los días a las 4:50 am para entrenar es algo sin precedentes… a mi me gusta dormir, y dormir con DDDD MAYÚSCULA. Me levanto temprano a trabajar porque no soy millonaria 🤣, pero que yo me levante a hacer ejercicio a esa hora???? Noooo eso era algo que yo nunca hubiese imaginado que sería capaz de hacer! Una vez pensé en parar hasta terminar el postgrado, pero cuando comencé a ver los cambios en mi cuerpo, preferí madrugar para tener tiempo para estudiar de noche. Ahora me quedó el gustico 😊",
    //     job: "cero excusas"
    // },
    // {
    //     id: 10,
    //     name: "Angie Paadilla",
    //     quote: "Holis. Este mes empeze con toda la energía. Pero esta última semana no pude hacer ningún día porque mi cuerpo le dió una virosis que estaba dando y aunque tenía todas las ganas no me respondía bien el cuerpo , así que también decidí escucharlo y dejarlo descansar. Pero no solo este mes si no desde que entré a este programa para mí a Sido mi mejor elección nathy y agradezco a la vida que te volví a encontrar después de mucho tiempo. Para diciembre Dios mediante vamos a darle y vamos a Darle sabroso ❤🔥",
    //     job: "cero excusas"
    // },
    // {
    //     id: 11,
    //     name: "",
    //     quote: "Buenas tardes 👋 Un poquito perdida , porque me gusta entrar en vivo , son embargo las clases grabadas quedan muy bien y me e sentido con más fuerza. mi cuerpo en salud mental, emocional y física está ganando mucho cada día y se empieza a notar en una forma natural, tranquila , sana .Agradezco mucho tu guía , tu cariño , tu dedicación y trabajo . La ayuda que brindas es incomparable , es muy personal ❤",
    //     job: "cero excusas"
    // },
    // {
    //     id: 12,
    //     name: "Jess T",
    //     quote: "Bueno mi Nat uff nunca pensé que no hacer ejercicio me diera tan duro. Me siento todo el día como que me falta algo",
    //     job: "cero excusas"
    // }
]

export const plans = [
    {
        id: 1,
        name: 'Cero Excusas',
        desc: 'Entrena conmigo desde casa 70mil pesos',
        price_col: 80000.00,
        price_usd: 20.00,
        variable_price: false,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'VidaFit',
        desc: 'Entrenamiento personalizado accesible offline en todo momento',
        price_col: 160000.00,
        price_usd: 40.00,
        variable_price: true,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    },
    {
        id: 3,
        name: 'VidaFit Prime',
        desc: 'Por una hora al dia sere tu personal trainer Virtual para gimnasio - agregar: planes desde',
        price_col: 280000.00,
        price_usd: 70.00,
        variable_price: true,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 4,
        name: 'Nutrición Total',
        desc: 'Por una hora al dia sere tu personal trainer Virtual para gimnasio - agregar: planes desde',
        price_col: 280000.00,
        price_usd: 70.00,
        variable_price: false,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    }

]

const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')
const Taza = require('./images/taza_blanca.jpg')

export const productos = [
    // {
    //     id: 1,
    //     image: Trainer1,
    //     name: 'John Doe',
    //     job: 'Aerobic Trainer',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    // {
    //     id: 2,
    //     image: Trainer2,
    //     name: 'Daniel vinyo',
    //     job: 'Speed Trainer',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    // {
    //     id: 3,
    //     image: Trainer3,
    //     name: 'Edem Quist',
    //     job: 'Flexibility Trainer',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    // {
    //     id: 4,
    //     image: Trainer4,
    //     name: 'Shatta Wale',
    //     job: 'Body Composition Trainer',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    // {
    //     id: 5,
    //     image: Trainer5,
    //     name: 'Diana Ayi',
    //     job: 'Circuit Trainer',
    //     socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    // },
    {
        id: 1,
        image: Taza,
        name: 'Taza Fit by Naty',
        job: 'Physical Intelligence Trainer',
        price_col:'4000',
        price_usd:'1',
        socials: []
    },
    {
        id: 2,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        price_col:'4000',
        price_usd:'1',
        socials: []
    },
    {
        id: 3,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        price_col:'4000',
        price_usd:'1',
        socials: []
    },
]