// Creao questo index.js con i miei dati statici

// Dati statici Header \\
const headerMenu = [
    {
        id: 0,
        text: 'Home',
        url: '#',
        current: true,
        isNew: false,
    }, {
        id: 1,
        text: 'Services',
        url: '#',
        current: false,
        isNew: false,
    }, {
        id: 2,
        text: 'About',
        url: '#',
        current: false,
        isNew: false,
    }, {
        id: 3,
        text: 'Videos',
        url: '#',
        current: false,
        isNew: false,
    }, {
        id: 4,
        text: 'Blog',
        url: '#',
        current: false,
        isNew: false,
    }, {
        id: 5,
        text: 'Store',
        url: '#',
        current: false,
        isNew: true,
    },
];

// Dati statici First Section \\
const challengeCard = [
    {
        id: 1,
        title: 'Crossfit workout',
        subtitle: 'Push your limits',
        img: '../../assets/img/service6-2x.jpg',
    }, {

        id: 2,
        title: 'New Gym Apparel',
        subtitle: 'Look good, feel good',
        img: '../../assets/img/box1-2x.jpg',
    }, {

        id: 3,
        title: 'Team training',
        subtitle: 'Find a partner',
        img: '../../assets/img/box3-2x.jpg',
    }
];

// Dati statici Footer \\

const social = ['fa-facebook', 'fa-twitter', 'fa-youtube', 'fa-instagram', 'fa-linkedin'];

const recentPost = [
    'The best protein shake',
    'Ultimate cardio workout',
    'New juices avaiable now',
    'Tips to find training partners',
    '20 best healthy recipes'
]


export { headerMenu, challengeCard, social, recentPost }