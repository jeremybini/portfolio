import { StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';

import Card from '../../components/ui/Card';
import ColumnCentered from '../../components/ui/ColumnCentered';
import Div from '../../components/ui/Div';
import Row from '../../components/ui/Row';
import withCurrentProject from '../../hocs/withCurrentProject';
import { gray } from '../../utils/colors';
import screenSize from '../../utils/screenSize';

import ProjectCarousel from './ProjectCarousel';
import ProjectDescription from './ProjectDescription';
import ProjectHeading from './ProjectHeading';
import ProjectTechList from './ProjectTechList';

const sx = StyleSheet.create({
  projectCard: {
    [screenSize.max.phoneLandscape]: {
      padding: '0 20px',
    },
    [screenSize.min.tablet]: {
      padding: '0 30px',
    },
    [screenSize.desktop]: {
      padding: '0 50px',
    }
  },
  projectCardContent: {
    borderBottom: `1px solid ${gray}`,
    marginBottom: '30px',
    paddingBottom: '30px',
    [screenSize.desktop]: {
      flexWrap: 'nowrap',
    },
  },
  projectCardTop: {
    maxWidth: '1280px',
  },
  project: {
    position: 'relative',
    [screenSize.phoneLandscape]: {
      padding: '0 10px',
    },
    [screenSize.min.tablet]: {
      padding: '0 30px',
    },
    [screenSize.desktop]: {
      padding: '0 50px',
    }
  },
});

const Project = ({ project }) => (
  <Div styles={ sx.project }>
    <Card styles={ sx.projectCard }>
      <ColumnCentered>
        <ColumnCentered styles={ sx.projectCardTop }>
          <ProjectHeading project={ project } />
          <Row wrap styles={ sx.projectCardContent }>
            <ProjectTechList technologies={ project.technologies } />
            <ProjectDescription
              description={ project.description }
              links={ project.links } />
          </Row>
        </ColumnCentered>
      </ColumnCentered>
      {
        project.images && project.images.length ?
          <ProjectCarousel
            height='70vh'
            images={ project.images } />
        : null
      }
    </Card>
  </Div>
);

// todo: import proj prop type
Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default withRouter(withCurrentProject(Project));
