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
    information: [
      {
        heading: 'Platform Lead',
        list: [
          'Point-person for API related tasks, including assisting fellow ' +
          'engineers with API assignments, prioritizing and completing ' +
          'tickets, and ensuring proper test coverage',

          'Maintained, improved, and iterated upon our Node API, handling ' +
          'both CRUD and GraphQL endpoints',

          'Managed API release/deployment cycle',

          'Oversaw all database migrations',

          'Designed technical specs for new features',

          'Implemented a database-agnostic entity layer that greatly ' +
          'reduced code complexity, development time, and barrier to entry',
        ]
      },
      {
        heading: 'Fullstack Engineer',
        list: [
          'Assisted in a ground-up redesign and rebuild of our API, ' +
          'including migrating our entire user-base to a new platform',

          'Designed and built API services for prescriptions, patients, ' +
          'and order checkout/transactions',

          'Established and implemented our user permission system for ' +
          'managing access between user resources',

          'Helped build and iterate upon an AngularJS web portal allowing ' +
          'nurse practitioners to onboard new patients and upload ' +
          'prescription photos, as well as a complete rebuild of our web ' +
          'app allowing users to log in and place orders',

          'Added tests for every new API feature, increasing test coverage ' +
          'from 0% to 91%',
        ],
      },
    ],
    links: [],
    mainImage: zipdrugScreens,
    roles: [
      'Platform Lead',
      'Fulstack Developer',
    ],
    title: 'Zipdrug',
    technologies: [
      'NodeJS', 'MongoDB', 'Mocha', 'Express', 'AngularJS',
      'FeathersJS', 'GraphQL', 'Apollo', 'Git', 'SCSS',
    ],
    when: 'May 2016 - March 2017',
  },
  {
    description: 'MongoBulk is a lightweight wrapper around the Node MongoDB ' +
                 'bulkWrite API.\nMongoDB does not support self-reference ' +
                 'during write operations, which means that multiple calls ' +
                 'and boilerplate code are needed for any operation that ' +
                 'requires a reference to the original document. I wrote ' +
                 'MongoBulk to solve this problem.',
    images: [],
    information: [
      {
        list: [
          'Surfaces a simple API for self-reference during bulk operations',

          'Handles request concurrency, limiting the number of documents/' +
          'requests held in memory',

          'Supports the full range of Mongo bulk write operations',

          'Removes boilerplate code by bundling database connection, ' +
          'bulk write operations, and concurrency handling into a single call'
        ]
      }
    ],
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
      'NodeJS', 'MongoDB', 'TravisCI', 'Coveralls', 'Git',
    ],
    when: 'March 2017',
  },
  {
    description: 'I designed and built this site this site with React/Redux ' +
                 'exploring different design patterns and best practices.',
    images: [],
    information: [
      {
        list: [
          'Leveraged redux for state management, following the \'ducks\' ' +
          'approach of bundling actionTypes, actions, and reducers for ' +
          'each slice of the state',

          'Used redux-promise-middleware for handling all async actions',

          'Built using Aphrodite for dynamic stylesheet generation'
        ]
      }
    ],
    links: [
      {
        text: 'Github',
        url: 'https://github.com/jeremybini/portfolio',
      },
    ],
    mainImage: null,
    roles: [
      'Sole Developer'
    ],
    title: 'Portfolio',
    technologies: [
      'React', 'Redux', 'React-Router', 'Aphrodite', 'Git', 'AWS', 'Photoshop',
    ],
    when: 'April 2017',
  },
  {
    description: 'RouteTracker is an application I developed while working ' +
                 'as a routesetter and manager in climbing gyms throughout ' +
                 'New York City',
    images: [],
    information: [
      {
        list: [
          'Created a custom climbing route tracking system for Brooklyn ' +
          'Boulders',

          'It allows for creation, archiving, and bookkeeping of indoor ' +
          'climbing routes by 3 different levels of administrators',

          'Data visualizations were generated using Highcharts for ' +
          'easy-to-read metrics',

          'Users can log ascents, and view graphs of their performance ' +
          'over time'
        ]
      }
    ],
    links: [
      {
        text: 'RouteTracker Sample',
        url: 'https://climbing-route-database.herokuapp.com/',
      },
    ],
    mainImage: null,
    roles: [
      'Sole Developer'
    ],
    screenShots: [],
    title: 'RouteTracker',
    technologies: [
      'Ruby on Rails', 'Postgres', 'JavaScript', 'jQuery', 'Git', 'SCSS'
    ],
    when: 'July 2015',
  },
]
