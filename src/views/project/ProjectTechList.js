import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import ColumnCentered from '../../components/ui/ColumnCentered'
import Div from '../../components/ui/Div'
import P from  '../../components/ui/P'
import { grayLight, greenDark } from '../../utils/colors'
import screenSize from '../../utils/screenSize'

const sx = StyleSheet.create({
  projectTechList: {
    background: grayLight,
    border: `1px solid ${greenDark}`,
    borderRadius: '6px',
    order: 2,
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
  <ColumnCentered styles={ sx.projectTechList }>
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
  </ColumnCentered>
)

ProjectTechList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string),
}

export default ProjectTechList

