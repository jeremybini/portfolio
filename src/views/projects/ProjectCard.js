import { css, StyleSheet } from 'aphrodite'
import React, { PropTypes } from 'react'

import Card from '../../components/ui/Card'
import Column from '../../components/ui/Column'
import Div from '../../components/ui/Div'
import Heading from '../../components/ui/Heading'
import RowCentered from '../../components/ui/RowCentered'
import { grayMed, greenDark, greenLight } from '../../utils/colors'
import screenSize from '../../utils/screenSize'

const { shape, string } = PropTypes

const sx = StyleSheet.create({
  card: {
    border: `1px solid ${greenDark}`,
    display: 'flex',
    flexDirection: 'column',
    ':hover': {
      border: `1px solid ${greenLight}`,
    },
  },
  cardLine: {
    padding: '5px 0 0 30px',
  },
  cardLineContent: {
    fontWeight: '300',
    paddingLeft: '15px',
  },
  cardLineLabel: {
    fontWeight: '100',
  },
  cardImage: {
    width: '75%',
  },
  cardImageContainer: {
    padding: '15px',
    [screenSize.phoneLandscape]: {
      padding: '40px 30px',
    },
    [screenSize.min.tablet]: {
      padding: '20px 30px',
    }
  },
  roundedBorder: {
    borderRadius: '5px',
  },
  title: {
    borderBottom: `1px solid ${grayMed}`,
    paddingBottom: '10px',
  },
})

const CardLine = ({ children, label, content }) => {
  const contentArray = Array.isArray(content) ? content : [content]

  return (
    <div className={css(sx.cardLine)}>
      {
        label &&
          <Heading weight={4} styles={sx.cardLineLabel}>
            <span style={{ textDecoration: 'underline' }}>{label}</span>:
          </Heading>
      }
      {
        content && contentArray.map(text =>
          <Heading
            key={text}
            weight={3}
            styles={sx.cardLineContent}>
            {text}
          </Heading>
        )
      }
      { children }
    </div>
  )
}

const ProjectCard = ({ project, ...rest }) => (
  <Card styles={sx.card}>
    <Div styles={[sx.title, sx.inline]}>
      <h2 style={{ textAlign: 'center' }}>{project.title}</h2>
    </Div>
    <Column grow>
      <CardLine
        label={`Role${ project.roles.length > 1 ? 's' : '' }`}
        content={project.roles} />
      <CardLine
        label='When'
        content={project.when} />
      {
        project.mainImage &&
        <RowCentered grow styles={sx.cardImageContainer}>
          <img
            alt='project card'
            src={project.mainImage}
            className={css(sx.cardImage)} />
        </RowCentered>
      }
    </Column>
  </Card>
)

// Todo: expand
export const projectPropType = shape({
  title: string,
})

ProjectCard.propTypes = {
  project: projectPropType,
}

export default ProjectCard
