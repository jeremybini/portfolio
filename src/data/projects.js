import npmLogo from '../assets/images/npm_logo.png';
import zipdrugScreens from '../assets/images/zd_screens_large.png';
import zipdrugScreen1 from '../assets/images/screen1.png';
import zipdrugScreen2 from '../assets/images/screen2.png';
import zipdrugScreen3 from '../assets/images/screen3.png';
import zipdrugScreen4 from '../assets/images/screen4.png';

export default [
  {
    description: 'I was hired at Zipdrug as a fullstack Software Engineer, ' +
                 'and at the end of 2016 was also given the role of ' +
                 'Platform Lead.\nI was responsible for assisting in a ' +
                 'complete rebuild of the existing API. This included moving ' +
                 'to a new hosting service, overhauling the backend ' +
                 'architecture and logic, and {SOMETHING}\n' +
                 'As Platform Lead I was responsible for maintaining and ' +
                 'improving the API, assisting fellow engineers with API ' +
                 'related tasks, managing deployments, and { SOMETHING}.\n' +
                 'My front end responsibilites included assisting in a ' +
                 'complete rebuild of the web app which allowed users to ' +
                 'signup, login, and and place orders. I also helped build ' +
                 ' and maintain a web portal, allowing nurse practitioners ' +
                 'of a partner company to onboard new patients, add ' +
                 'prescriptions, and {SOMETHING}'
    ,
    images: [
      {
        alt: 'photo',
        src: zipdrugScreen1,
      },
      {
        alt: 'photo',
        src: zipdrugScreen2,
      },
      {
        alt: 'photo',
        src: zipdrugScreen3,
      },
      {
        alt: 'photo',
        src: zipdrugScreen4,
      },
    ],
    links: [],
    mainImage: zipdrugScreens,
    roles: [
      'Platform Lead', 'Fullstack Software Engineer',
    ],
    title: 'Zipdrug',
    technologies: [
      'NodeJS', 'MongoDB', 'Express', 'Angular',
      'GraphQL', 'Apollo', 'FeathersJS',
    ],
    when: 'May 2016 - March 2017',
  },
  {
    description: 'MongoBulk is a lightweight wrapper around the Node MongoDB ' +
                 'library.\nMongoDB does not support self-reference during ' +
                 'write operations, which means that multiple calls and ' +
                 'boilerplate code are needed for any operation that ' +
                 'requires a reference to the original document.\n' +
                 'I wrote MongoBulk to solve this problem. It supports ' +
                 'the full range of bulk operations, and provides low level ' +
                 'memory management by throttling the number of concurrent ' +
                 'operations.',
    images: [],
    links: [
      {
        text: 'NPM',
        url: 'https://www.npmjs.com/package/mongo-bulk',
      },
      {
        text: 'Github',
        url: 'https://github.com/jeremybini/mongo-bulk',
      },
    ],
    mainImage: npmLogo,
    roles: [
      'Sole Developer'
    ],
    title: 'MongoBulk',
    technologies: [
      'NodeJS', 'MongoDB', 'TravisCI', 'Coveralls'
    ],
    when: 'March 2017',
  },
  {
    description: '',
    images: [],
    links: [
      {
        text: 'So meta',
        url: '',
      },
    ],
    roles: [
      'Sole Developer'
    ],
    title: 'This Site',
    technologies: ['React', 'Redux', 'React-Router', 'AWS'],
    when: 'April 2017',
  },
  {
    description: '',
    images: [],
    links: [
      {
        text: 'RouteTracker Sample',
        url: 'https://climbing-route-database.herokuapp.com/',
      },
    ],
    roles: [
      'Sole Developer'
    ],
    screenShots: [],
    title: 'RouteTracker',
    technologies: ['Ruby on Rails', 'Postgres', 'jQuery'],
  },
];
