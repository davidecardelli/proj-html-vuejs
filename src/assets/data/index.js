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

// Dati statici blog \\

const articlesBlog = [
    {
        id: 1,
        title: 'The best protein shake',
        date: 'By admin | November 26th, 2019 | Gym',
        img: 'blog4-2x',
    }, {
        id: 2,
        title: 'Ultimate cardio workout',
        date: 'By admin | November 26th, 2019 | Gym',
        img: 'blog1-2x',

    }, {
        id: 3,
        title: 'New juices available now',
        date: 'By admin | November 26th, 2019 | Gym',
        img: 'blog3-2x',
    }

]

// Dati statici First Section \\
const challengeCard = [
    {
        id: 1,
        title: 'Crossfit workout',
        subtitle: 'Push your limits',
        img: 'service6-2x',
    }, {

        id: 2,
        title: 'New Gym Apparel',
        subtitle: 'Look good, feel good',
        img: 'box1-2x',
    }, {

        id: 3,
        title: 'Team training',
        subtitle: 'Find a partner',
        img: 'box3-2x',
    }
];

// Dati statici Fifth Section \\
const partnersCard = [
    {
        id: 1,
        text: 'Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.',
        link: 'Visit Yoga Studio',
        img: 'sponsor-1-2x-200x103'
    }, {

        id: 2,
        text: 'Feugia etiam dui mauris pharetra mauris sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.',
        link: 'Join Fitness Center',
        img: 'sponsor-2-2x-200x103'
    }, {

        id: 3,
        text: 'Nisl at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.',
        link: 'Learn about FC',
        img: 'sponsor-3-2x-200x103'
    }, {

        id: 4,
        text: 'Proin in viverra maecenas et mattius ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend.',
        link: 'Visit Power Gym',
        img: 'sponsor-4-2x-200x103'
    }
]

// Dati statici Footer \\

const social = ['fa-facebook', 'fa-twitter', 'fa-youtube', 'fa-instagram', 'fa-linkedin'];

const recentPost = [
    'The best protein shake',
    'Ultimate cardio workout',
    'New juices avaiable now',
    'Tips to find training partners',
    '20 best healthy recipes'
]


export { headerMenu, challengeCard, social, recentPost, partnersCard, articlesBlog }