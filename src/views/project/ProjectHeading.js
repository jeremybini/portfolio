import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'


import Div from '../../components/ui/Div'
import Heading from '../../components/ui/Heading'
import Row from '../../components/ui/Row'
import { gray } from '../../utils/colors'
import screenSize from '../../utils/screenSize'

import { rolePropType } from './ProjectRole'

const { arrayOf, shape, string } = PropTypes

const sx = StyleSheet.create({
  projectHeading: {
    borderBottom: `1px solid ${gray}`,
    marginBottom: '30px',
    width: '100%',
  },
  projectSubheading: {
    width: '100%',
  },
  projectRoleDivider: {
    display: 'none',
    [screenSize.min.tablet]: {
      margin: '0 10px',
    },
  },
  projectRoles: {
    width: '100%',
    [screenSize.min.tablet]: {
      paddingRight: '30px',
      width: 'auto',
    },
  },
  projectTitle: {
    margin: '30px 0',
    textAlign: 'center',
  },
  projectTitleEntry: {
    margin: '10px 0',
    [screenSize.min.tablet]: {
      display: 'inline-block',
    },
  },
  projectTitleRow: {
    marginBottom: '10px',
  }
})

export const ProjectHeading = ({ project }) => (
  <Div styles={ sx.projectHeading }>
    <Heading styles={ sx.projectTitle }>{ project.title }</Heading>
    <Row wrap justify='space-between' styles={ sx.projectSubheading }>
      <Div styles={ [sx.projectTitleRow, sx.projectRoles] }>
        {
          // slight hack for adding | between all roles
          project.roles.map(r => r.title)
            .join('@@|@@')
            .split('@@')
            .map((role, index) =>
              <Heading
                key={ role + index }
                styles={[
                  sx.projectTitleEntry,
                  role === '|' && sx.projectRoleDivider,
                ]}
                weight='4'>
                { role }
              </Heading>
            )
        }
      </Div>
      <Div styles={ sx.projectTitleRow }>
        <Heading
          weight='4'
          styles={ sx.projectTitleEntry }>
          { project.when }
        </Heading>
      </Div>
    </Row>
  </Div>
)

ProjectHeading.propTypes = {
  project: shape({
    when: string.isRequired,
    roles: arrayOf(rolePropType).isRequired,
    title: string.isRequired,
  }).isRequired,
}

export default ProjectHeading
