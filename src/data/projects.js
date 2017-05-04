import npmLogo from '../assets/images/npm_logo.png'
import zipdrugScreens from '../assets/images/zd_screens_large.png'
import zipdrugScreen1 from '../assets/images/screen1.png'
import zipdrugScreen2 from '../assets/images/screen2.png'
import zipdrugScreen3 from '../assets/images/screen3.png'
import zipdrugScreen4 from '../assets/images/screen4.png'
import zipdrugProviderGif from '../assets/images/zd_provider_onboarding.gif'

export default [
  {
    description: 'I was hired at Zipdrug as a fullstack Software Engineer, ' +
                 'and by the end of 2016 I was also given the role of ' +
                 'Platform Lead. I participated in a complete rebuild of ' +
                 'our API, as well as assisting with two ground-up builds ' +
                 'of external web portals.\nMy duties included:',
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
      {
        alt: 'provider_onboarding',
        src: zipdrugProviderGif,
      }
    ],
    links: [],
    mainImage: zipdrugScreens,
    roles: [
      {
        title: 'Platform Lead',
        duties: [
          'Point-person for API related tasks, including assisting fellow ' +
          'engineers with API assignments, prioritizing and completing ' +
          'tickets, and ensuring proper test coverage',

          'Maintained, imporoved, and iterated upon our Node API, handling ' +
          'both CRUD and GraphQL endpoints',

          'Managed API release/deployment cycle',

          'Oversaw all database migrations',

          'Designed technical specs for new features',

          'Implemented a database-agnostic entity layer that greatly ' +
          'reduced code complexity, development time, and barrier to entry',
        ]
      },
      {
        title: 'Fullstack Engineer',
        duties: [
          'Assisted in complete rebuild of our API and backend ' +
          'architecture, including migrating our entire user-base to a new ' +
          'platform',

          'Designed and implimented the transaction and order checkout ' +
          'services',

          'Built and iterated upon an Angular-based web portal which ' +
          'allowed nurse practitioners to onboard new patients and upload ' +
          'prescription photos',

          'Added tests for every new API feature, increasing test coverage ' +
          'from 0% to 91%',

          'Completed a rebuild of our Angular web app allowing users ' +
          'to log in and place orders',
        ],
      },
    ],
    title: 'Zipdrug',
    technologies: [
      'NodeJS', 'MongoDB', 'Mocha', 'Express', 'Angular',
      'FeathersJS', 'GraphQL', 'Apollo', 'Git', 'SCSS',
    ],
    when: 'May 2016 - March 2017',
  },
  {
    description: 'MongoBulk is a lightweight wrapper around the Node MongoDB ' +
                 'bulkWrite API.\nMongoDB does not support self-reference ' +
                 'during write operations, which means that multiple calls ' +
                 'and boilerplate code are needed for any operation that ' +
                 'requires a reference to the original document.\n' +
                 'I wrote MongoBulk to solve this problem. It supports ' +
                 'the full range of bulk write/update operations, and ' +
                 'provides low level memory management by throttling the ' +
                 'number of concurrent operations.',
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
      {
        title: 'Sole Developer'
      },
    ],
    title: 'MongoBulk',
    technologies: [
      'NodeJS', 'MongoDB', 'TravisCI', 'Coveralls', 'Git',
    ],
    when: 'March 2017',
  },
  {
    description: 'I designed and built this site this site with React/Redux ' +
                 'exploring different design patterns and best practices.\n' +
                 'This project follows the \'ducks\' approach of bundling ' +
                 'actionTypes, actions, and the reducer for each piece of ' +
                 'funcitonality. I used redux-promise-middleware to handle ' +
                 'generating generic async actions, and aphrodite for ' +
                 'styling components.',
    images: [

    ],
    links: [
      {
        text: 'Github',
        url: 'https://github.com/jeremybini/portfolio',
      },
    ],
    roles: [
      {
        title: 'Sole Developer'
      },
    ],
    title: 'Portfolio',
    technologies: [
      'React', 'Redux', 'React-Router', 'Aphrodite', 'Git', 'AWS', 'Photoshop',
    ],
    when: 'April 2017',
  },
  {
    description: 'RouteTracker is an application I developed while working ' +
                 'as a routesetter in climbing gyms.\nWe used it as an ' +
                 'internal tool for managing the creation, archiving, and ' +
                 'bookkeeping of the climbing routes in the gym. It also ' +
                 'includes data visualizations for accurate/informative ' +
                 'metrics.',
    images: [

    ],
    links: [
      {
        text: 'RouteTracker Sample',
        url: 'https://climbing-route-database.herokuapp.com/',
      },
    ],
    roles: [
      {
        title: 'Sole Developer'
      },
    ],
    screenShots: [

    ],
    title: 'RouteTracker',
    technologies: [
      'Ruby on Rails', 'Postgres', 'jQuery', 'Git', 'SCSS'
    ],
  },
]
