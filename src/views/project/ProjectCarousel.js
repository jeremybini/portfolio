import { css, StyleSheet } from 'aphrodite';
import Carousel from 'react-slick';
import ImageZoom from 'react-medium-image-zoom';

import React, { Component, PropTypes } from 'react';

import Div from '../../components/ui/Div';
import Row from '../../components/ui/Row';
import aphroditePropType from '../../utils/aphroditePropType';
import screenSize from '../../utils/screenSize';

import './ProjectCarousel.css'

const { arrayOf, shape, string } = PropTypes;

const defaultOptions = {
  accessibility: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  pauseOnHover: true,
  swipeToSlide: true,
}

const sx = StyleSheet.create({
  image: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), ' +
                '0 6px 6px rgba(0,0,0,0.23)',
    display: 'inline',
    margin: 'auto',
    maxHeight: '40vh',
    maxWidth: '100%',
    verticalAlign: 'middle',
    [screenSize.min.tablet]: {
      maxHeight: '50vh',
    },
    [screenSize.desktop]: {
      maxHeight: '70vh',
    },
  },
  imageContainer: {
    height: '40vh',
    lineHeight: '40vh',
    textAlign: 'center',
    [screenSize.min.tablet]: {
      height: '50vh',
      lineHeight: '50vh',
    },
    [screenSize.desktop]: {
      height: '70vh',
      lineHeight: '70vh',
    }
  },
});

class ProjectCarousel extends Component {
  static defaultProps = {
    options: {},
  }

  static propTypes = {
    images: arrayOf(shape({
      alt: string.isRequired,
      src: string.isRequired,
    })).isRequired,
    styles: aphroditePropType,
  }

  // TODO: Find workaround for this hack
  // Slick carousel loads with offset on first image, triggering resize
  // puts the images where they should be
  // however, triggering resize also pauses the autoplay
  // calling slickNext resumes the autoplay
  componentWillMount() {
    const { options } = this.props;
    const speed = options.autoplaySpeed || defaultOptions.autoplaySpeed;

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => this.refs.slider.slickNext(), speed);
    }, 0);
  }

  render() {
    const { images, options, styles } = this.props;
    const carouselOptions = {
      ...defaultOptions,
      ...options,
    };

    return (
      <Row grow>
        <Carousel ref='slider' { ...carouselOptions }>
          {
            images.map(({ alt, src }, index) =>
              <Div styles={ [sx.imageContainer, styles] } key={ src }>
                <ImageZoom
                  image={ {
                    alt: alt,
                    className: css(sx.image),
                    src: src,
                  } }
                  zoomImage={ {
                    alt: alt,
                    src: src,
                  } } />
              </Div>
            )
          }
        </Carousel>
      </Row>
    );
  }
};

export default ProjectCarousel;
