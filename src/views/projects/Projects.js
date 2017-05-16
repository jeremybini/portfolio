import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'
import { withRouter } from 'react-router-dom'

import Link from '../../components/ui/Link'
import Row from '../../components/ui/Row'
import withProjects from '../../hocs/withProjects'
import screenSize from '../../utils/screenSize'

import ProjectCard, { projectPropType } from './ProjectCard'

const sx = StyleSheet.create({
  container: {
    width: '100%',
    [screenSize.min.tablet]: {
      width: '50%',
    },
    [screenSize.desktop]: {
      maxWidth: '600px',
      width: '33%',
    },
  },
  link: {
    display: 'flex',
    margin: '20px 0',
    width: '100%',
    [screenSize.min.tablet]: {
      margin: '20px',
    },
  },
  projectList: {
    padding: '0 20px',
    [screenSize.tablet]: {
      padding: '0 10px',
    },
    [screenSize.min.desktop]: {
      padding: '0 30px',
    }
  }
})

const Projects = ({ match, projects }) => (
  <Row
    wrap
    justify='space-around'
    styles={ sx.projectList }>
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
)

Projects.propTypes = {
  match: PropTypes.object.isRequired,
  projects: PropTypes.arrayOf(projectPropType).isRequired,
}

export default withRouter(withProjects(Projects))
