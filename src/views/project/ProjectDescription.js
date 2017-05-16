import { StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import Column from '../../components/ui/Column'
import Link from '../../components/ui/Link'
import P from '../../components/ui/P'
import Row from '../../components/ui/Row'
import { green, greenDark } from '../../utils/colors'
import screenSize from '../../utils/screenSize'

import ProjectInfo, { infoPropType } from './ProjectInfo'

const { arrayOf, shape, string } = PropTypes

const sx = StyleSheet.create({
  projectDescription: {
    order: 1,
    [screenSize.desktop]: {
      order: 2,
      paddingTop: '20px',
    }
  },
  projectDescriptionBlock: {
    lineHeight: '22px',
    margin: 0,
  },
  projectDescriptionBlockContainer: {
    marginBottom: '30px',
    textAlign: 'left',
    width: '100%'
  },
  projectLink: {
    color: green,
    fontSize: '18px',
    fontWeight: '400',
    padding: '5px',
    ':hover': {
      color: greenDark,
    }
  },
  projectLinks: {
    paddingBottom: '30px',
  },
})

export const ProjectDescription = ({ description, information, links }) => (
  <Column styles={ sx.projectDescription }>
    {
      description.split('\n').map(section =>
        <Row key={ section } styles={ sx.projectDescriptionBlockContainer }>
          <P styles={ sx.projectDescriptionBlock }>{ section }</P>
        </Row>
      )
    }
    {
      information && information.length && information.some(i => i.list)
        ? information.map(info =>
          <ProjectInfo key={ info.list } info={ info } />
        )
        : null
    }
    {
      links && links.length
        ? <Row justify='space-around' styles={ sx.projectLinks }>
            {
              links.map(link =>
                <Link
                  key={ link.url }
                  href={ link.url }
                  styles={ sx.projectLink }>
                  { link.text }
                </Link>
              )
            }
          </Row>
        : null
    }
  </Column>
)

ProjectDescription.propTypes = {
  description: string.isRequired,
  links: arrayOf(shape({
    text: string.isRequired,
    url: string.isRequired,
  })),
  information: arrayOf(infoPropType),
}

export default ProjectDescription
