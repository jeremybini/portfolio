import { StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';

import npmLogo from '../../assets/images/npm_logo.png';
import zipdrugScreens from '../../assets/images/zd_screens_large.png';

import Link from '../ui/Link';
import Row from '../ui/Row';
import screenSize from '../utils/screenSize';

import ProjectCard, { projectPropType } from './ProjectCard';

const sx = StyleSheet.create({
  container: {
    width: '100%',
    [screenSize.min.tablet]: {
      width: '50%',
    },
  },
  link: {
    margin: '20px',
    width: '100%',
    [screenSize.min.tablet]: {
      margin: '30px',
    },
  },
  root: {
    padding: '0 20px',
    [screenSize.tablet]: {
      padding: '0 10px',
    },
    [screenSize.min.desktop]: {
      padding: '0 40px',
    }
  }
});

const projects = [ // Replace with redux?
  {
    coverImage: zipdrugScreens,
    description: 'At Zipdrug I was able to ',
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
    roles: [
      'Platform Lead', 'Fullstack Software Engineer',
    ],
    title: 'Zipdrug',
    technologies: [
      'NodeJS', 'MongoDB', 'Express', 'Angular', 'GraphQL', 'Apollo', 'FeathersJS'
    ],
    when: 'May 2016 - March 2017',
  },
  {
    coverImage: npmLogo,
    description: '',
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
    roles: [
      'Sole Developer'
    ],
    title: 'MongoBulk',
    technologies: ['NodeJS', 'MongoDB'],
    when: 'March 2017',
  },
  {
    description: '',
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

const ProjectList = ({ match }) => (
  <Row wrap styles={ sx.root }>
    {
      projects.map(project =>
        <Row key={ project.title } styles={ sx.container }>
          <Link
            to={ `${ match.url }/${ project.title.toLowerCase() }` }
            styles={ sx.link }>
            <ProjectCard project={ project } />
          </Link>
        </Row>
      )
    }
  </Row>
);

ProjectList.propTypes = {
  match: PropTypes.object.isRequired,
  // projects: PropTypes.arrayOf(projectPropType).isRequired,
}

export default withRouter(ProjectList);
