import { css, StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';

import Column from '../ui/Column';
import Cover from '../ui/Cover';
import Row from '../ui/Row';
import RowCentered from '../ui/RowCentered';
import screenSize from '../utils/screenSize';

const { shape, string } = PropTypes;

const sx = StyleSheet.create({
  card: {
    background: 'white',
    border: '1px solid #dde2e5',
    borderRadius: '6px',
    borderTop: '2px solid #dde2e5',
    boxShadow: '0 1px 6px 0 rgba(80,80,80,0.08)',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    ':hover': {
      border: '1px solid #2196F3',
      borderTop: '2px solid #2196F3',
    },
  },
  cardContent: {
    height: '100%',
  },
  cardLine: {
    padding: '5px 0 0 30px',
  },
  cardLineContent: {
    fontWeight: '300',
    paddingLeft: '15px',
  },
  cover: {
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '30px 30px',
    opacity: 0,
    transform: 'scale(1.1, 1.1)',
    ':hover': {
      opacity: 1,
      transform: 'scale(1, 1)',
    },
  },
  coverImage: {
    width: '75%',
  },
  coverImageContainer: {
    height: '100%',
    padding: '20px',
    [screenSize.phoneLandscape]: {
      padding: '40px',
    },
    [screenSize.min.tablet]: {
      padding: '30px',
    }
  },
  coverText: {
    // color: '#44BBA4',
  },
  roundedBorder: {
    borderRadius: '5px',
  },
  technologyTag: {
    background: 'white',
    border: '1px solid #dde2e5',
    padding: '5px 10px',
    margin: '10px 10px',
  },
  title: {
    borderBottom: '1px solid #dde2e5',
    paddingBottom: '10px',
  },
  transition: {
    transition: '0.5s ease',
  },
});

const CardLine = ({ children, label, content }) => {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <div className={ css(sx.cardLine) }>
      { label && <h4><span style={{ textDecoration: 'underline' }}>{ label }</span>:</h4> }
      {
        content && contentArray.map(text =>
          <h3 className={ css(sx.cardLineContent) }>{ text }</h3>
        )
      }
      { children }
    </div>
  )
}

const ProjectCard = ({ project, ...rest }) => (
  <Column styles={ [sx.card, sx.transition] }>
    <div className={ css(sx.title, sx.inline) }>
      <h2 style={ { textAlign: 'center' } }>{ project.title }</h2>
    </div>
    <Column styles={ sx.cardContent }>
      <CardLine
        label={`Role${ project.roles.length && 's' }`}
        content={ project.roles } />
      <CardLine
        label='When'
        content={ project.when } />
      {
        project.coverImage &&
        <RowCentered styles={ sx.coverImageContainer }>
          <img
            alt='project cover image'
            src={ project.coverImage }
            className={ css(sx.coverImage) } />
        </RowCentered>
      }
    </Column>
    {/*<Cover styles={ [sx.cover, sx.roundedBorder, sx.transition] }>
      <Column>
        Technologies
        <RowCentered wrap>
        {
          project.technologies.map(tech =>
            <Column
              key={ tech }
              styles={ [sx.technologyTag, sx.roundedBorder] }>
              <p>{ tech }</p>
            </Column>
          )
        }
        </RowCentered>
        <RowCentered styles={ sx.coverText }>
          <h2>-- Click to see more --</h2>
        </RowCentered>
      </Column>
    </Cover>*/}
  </Column>
);

export const projectPropType = shape({
  title: string,
});

ProjectCard.propTypes = {
  project: projectPropType,
}

export default ProjectCard;
