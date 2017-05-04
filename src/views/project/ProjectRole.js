import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import Column from '../../components/ui/Column'
import Heading from '../../components/ui/Heading'
import List from '../../components/ui/List'
import ListItem from '../../components/ui/ListItem'

const { arrayOf, shape, string } = PropTypes

const sx = StyleSheet.create({
  projectRole: {
    marginBottom: '20px',
  },
  projectRoleTitle: {
    margin: 0,
  },
  projectRoleDuties: {
    listStyleType: 'initial',
  },
  projectRoleDuty: {
    marginBottom: '10px',
  },
})

export const ProjectRole = ({ role }) => (
  <Column styles={sx.projectRole}>
    <Heading
      styles={sx.projectRoleTitle}
      weight={4}>
      {role.title}
    </Heading>
    {
      role.duties && role.duties.length
        ?
          <List styles={sx.projectRoleDuties}>
            {
              role.duties.map(duty =>
                <ListItem
                  key={duty}
                  styles={sx.projectRoleDuty}>
                  <p>{duty}</p>
                </ListItem>
              )
            }
          </List>
        : null
    }
  </Column>
)

export const rolePropType = shape({
  duties: arrayOf(string),
  title: string.isRequired,
})

ProjectRole.propTypes = {
  role: rolePropType.isRequired,
}

export default ProjectRole
