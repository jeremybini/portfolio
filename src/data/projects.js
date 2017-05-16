/* eslint-disable max-len */
import fireframeScreens from '../assets/images/projects/fireframe/fireframe_screens.png'
import fireframeWorkspace from '../assets/images/projects/fireframe/fireframe_workspace_1280x671.jpg'
import fireframeProjectView from '../assets/images/projects/fireframe/fireframe_project_view_767x1006.jpg'
import fireframeCollaborationGif from '../assets/images/projects/fireframe/fireframe_collaboration.gif'

import npmLogo from '../assets/images/projects/mongoBulk/npm_logo.png'

import portfolioScreens from '../assets/images/projects/portfolio/portfolio_screens.png'

import routeTrackerWall from '../assets/images/projects/routeTracker/route_tracker_view_wall_1619x1151.jpg'
import routeTrackerAdd from '../assets/images/projects/routeTracker/route_tracker_add_route_1800x1252.jpg'
import routeTrackerEdit from '../assets/images/projects/routeTracker/route_tracker_edit_route_800x1407.jpg'
import routeTrackerProfile from '../assets/images/projects/routeTracker/route_tracker_profile_799x1412.jpg'
import routeTrackerScreens from '../assets/images/projects/routeTracker/route_tracker_screens.png'

import zipdrugScreens from '../assets/images/projects/zipdrug/zd_screens_large.png'
import zipdrugSiteHome from '../assets/images/projects/zipdrug/zd_site_home_1095x756.jpg'
import zipdrugProvider1 from '../assets/images/projects/zipdrug/zd_provider_onboarding_1_761x1354.jpg'
import zipdrugProvider2 from '../assets/images/projects/zipdrug/zd_provider_onboarding_2_762x1353.jpg'
import zipdrugProvider3 from '../assets/images/projects/zipdrug/zd_provider_onboarding_3_761x1353.jpg'
import zipdrugProviderGif from '../assets/images/projects/zipdrug/zd_provider_onboarding.gif'
/* eslint-enable max-len */

export default [
  {
    description: 'I was hired at Zipdrug as a fullstack Software Engineer, ' +
                 'and by the end of 2016 I was also given the role of ' +
                 'Platform Lead. I participated in a complete rebuild of ' +
                 'our API, as well as assisting with two ground-up builds ' +
                 'of external web portals.',
    images: [
      {
        alt: 'zipdrug home',
        src: zipdrugSiteHome,
      },
      {
        alt: 'zipdrug onboarding 1',
        src: zipdrugProvider1,
      },
      {
        alt: 'zipdrug onboarding 2',
        src: zipdrugProvider2,
      },
      {
        alt: 'zipdrug onboarding 3',
        src: zipdrugProvider3,
      },
      {
        alt: 'zipdrug provider onboarding gif',
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
    description: 'Have you ever felt like your team uses email ' +
                 'for everything, and designs end up getting lost ' +
                 'in your inbox? Fireframe solves this problem with ' +
                 'its web based design collaboration platform.\n' +
                 'Without any previous knowledge, non-designers can ' +
                 'quickly create wireframes that designers can easily ' +
                 'understand and further develop. This facilitates the ' +
                 'creative process for both designers and non-designers ' +
                 'alike; therefore, reducing the number of iterations needed ' +
                 'to come up with a design.',
    images: [
      {
        alt: 'fireframe workspace',
        src: fireframeWorkspace,
      },
      {
        alt: 'fireframe project view',
        src: fireframeProjectView,
      },
      {
        alt: 'fireframe editor collaboration gif',
        src: fireframeCollaborationGif,
      },
    ],
    information: [
      {
        heading: 'Fullstack Developer',
        list: [
          'Designed a real time, collaborative wireframing application ' +
          'with a custom editing suite for quick and easy mockups',

          'Implemented a version control system, complete with project ' +
          'forking and branch history. Snapshots are taken for each version ' +
          'so team members can visualize the full history of a project.',

          'Responsible for the architecture of the wireframe components ' +
          'using AngularJS, Firebase integration to allow real-time ' +
          'collaboration, and backend modeling for the version control system',
        ]
      }
    ],
    links: [
      {
        text: 'Github',
        url: 'https://github.com/gerickson808/fireframe',
      },
      {
        text: 'Video Presentation',
        url: 'https://www.fullstackacademy.com/final-projects/fireframe',
      },

    ],
    mainImage: fireframeScreens,
    roles: [
      'Fullstack Developer'
    ],
    title: 'Fireframe',
    technologies: [
      'NodeJS', 'AngularJS', 'Express', 'MongoDB', 'Mongoose', 'Firebase',
      'HTML5/SCSS', 'PhantomJS', 'S3', 'Bootstrap', 'InteractJS',
      'Mocha/Chai/Jasmine'
    ],
    when: 'April 2016',
  },
  {
    description: 'RouteTracker is an application I developed while working ' +
                 'as a routesetter and manager in climbing gyms throughout ' +
                 'New York City',
    images: [
      {
        alt: 'route tracker wall view',
        src: routeTrackerWall,
      },
      {
        alt: 'router tracker add new climb',
        src: routeTrackerAdd,
      },
      {
        alt: 'route tracker profile',
        src: routeTrackerProfile,
      },
      {
        alt: 'route tracker edit climb',
        src: routeTrackerEdit,
      },
    ],
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
        text: 'RouteTracker Sample App',
        url: 'https://climbing-route-database.herokuapp.com/',
      },
    ],
    mainImage: routeTrackerScreens,
    roles: [
      'Sole Developer'
    ],
    title: 'RouteTracker',
    technologies: [
      'Ruby on Rails', 'Postgres', 'JavaScript', 'jQuery', 'Git', 'SCSS'
    ],
    when: 'July 2015',
  },

  {
    description: 'I designed and built this site with React/Redux ' +
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
    mainImage: portfolioScreens,
    roles: [
      'Sole Developer'
    ],
    title: 'Portfolio',
    technologies: [
      'React', 'Redux', 'React-Router', 'Aphrodite', 'Git', 'AWS', 'Photoshop',
    ],
    when: 'April 2017',
  },
]
