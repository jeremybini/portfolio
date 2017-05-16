import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import Column from '../../components/ui/Column'
import Div from '../../components/ui/Div'
import P from  '../../components/ui/P'
import { grayLight } from '../../utils/colors'
import screenSize from '../../utils/screenSize'

const sx = StyleSheet.create({
  projectTechList: {
    background: grayLight,
    borderRadius: '6px',
    order: 2,
    paddingTop: '40px',
    textAlign: 'center',
    [screenSize.desktop]: {
      marginRight: '30px',
      minWidth: '300px',
      order: 1,
      width: '300px',
    }
  },
  projectTechnology: {
    display: 'inline-block',
    width: '200px',
  }
})

export const ProjectTechList = ({ technologies }) => (
  <Column styles={ sx.projectTechList }>
    <h4>Technologies Used</h4>
    <Div>
      {
        technologies.map(tech =>
          <P
            key={ tech }
            styles={ sx.projectTechnology}>
            { tech }
          </P>
        )
      }
    </Div>
  </Column>
)

ProjectTechList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string),
}

export default ProjectTechList

