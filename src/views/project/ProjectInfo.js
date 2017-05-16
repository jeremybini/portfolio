import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import Column from '../../components/ui/Column'
import Heading from '../../components/ui/Heading'
import List from '../../components/ui/List'
import ListItem from '../../components/ui/ListItem'
import { grayLight } from '../../utils/colors'

const { arrayOf, shape, string } = PropTypes

const sx = StyleSheet.create({
  projectInfo: {
    marginBottom: '20px',
  },
  projectInfoTitle: {
    backgroundColor: grayLight,
    margin: 0,
    padding: '7px',
  },
  projectInfoList: {
    listStyleType: 'initial',
  },
  projectInfoItem: {
    marginBottom: '10px',
  },
})

export const ProjectInfo = ({ info }) => (
  <Column styles={sx.projectInfo}>
    {
      info.heading &&
      <Heading
        styles={sx.projectInfoTitle}
        weight={4}>
        {info.heading}
      </Heading>
    }
    {
      info.list && info.list.length
        ?
          <List styles={sx.projectInfoList}>
            {
              info.list.map(item =>
                <ListItem
                  key={item}
                  styles={sx.projectInfoItem}>
                  <p>{item}</p>
                </ListItem>
              )
            }
          </List>
        : null
    }
  </Column>
)

export const infoPropType = shape({
  heading: string,
  list: arrayOf(string),
})

ProjectInfo.propTypes = {
  info: infoPropType.isRequired,
}

export default ProjectInfo
