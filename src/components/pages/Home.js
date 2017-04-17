import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Column from '../ui/Column';
import ColumnCentered from '../ui/ColumnCentered';
import HomeLink from '../ui/HomeLink';
import LazyBackgroundImage from '../ui/LazyBackgroundImage';
import Row from '../ui/Row';
import screenSize from '../utils/screenSize';

const sx = StyleSheet.create({
  content: {
    color: 'white',
    height: '100%',
    marginBottom: '100px',
    transition: '4500s ease-in',
    width: '100%',
    zIndex: 200,
    h1: {
      fontSize: '60px',
      letterSpacing: '1px',
    }
  },
  contentContainer: {
    height: '100%',
    width: '100%',
  },
  contentAppear: {
    opacity: 0.01,
    transform: 'translate(0, -10px) scale(1.4)',
  },
  contentAppearActive: {
    opacity: 1,
    transform: 'translate(0px, 0px) scale(1)',
    transition: 'transform 2s, opacity 1.5s',
  },
  contentLeave: {
    opacity: 1,
  },
  contentLeaveActive: {
    opacity: 0.01,
    transition: 'opacity 1500ms ease-in',
  },
  footer: {
    fontSize: '14px',
    padding: '20px',
    zIndex: 200,
  },
  footerAppear: {
    opacity: 0.01,
    transform: 'translate(0, 20px)',
  },
  footerAppearActive: {
    opacity: 1,
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
    transition: 'transform 1s, opacity 0.5s',
    transitionDelay: '2s',
  },
  root: {
    color: 'white',
    height: '100%',
  },
  linksContainer: {
    [screenSize.max.phoneLandscape]: {
      flexDirection: 'column',
    },
  },
  linksAppear: {
    opacity: 0.01,
    transform: 'translate(0, 20px)',
  },
  linksAppearActive: {
    opacity: 1,
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
    transition: 'transform 1s, opacity 0.5s',
    transitionDelay: '1.5s',
  },
  title: {
    fontSize: '36px',
  }
});

const contentAppear = css(sx.contentAppear);
const contentAppearActive = css(sx.contentAppearActive);

const linksAppear = css(sx.linksAppear);
const linksAppearActive = css(sx.linksAppearActive);

const footerAppear = css(sx.footerAppear);
const footerAppearActive = css(sx.footerAppearActive);

const Home = () => (
  <Column styles={ sx.root }>
    <Column justify='space-between' styles={ sx.contentContainer }>
      <ColumnCentered styles={ sx.content }>
        <CSSTransitionGroup
          transitionName={ {
            appear: contentAppear,
            appearActive: contentAppearActive,
          } }
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
          <h1 className={ css(sx.title) }>Jeremy Bini</h1>
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName={ {
            appear: linksAppear,
            appearActive: linksAppearActive,
          } }
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnter={false}
          transitionLeave={false}>
          <Row styles={ sx.linksContainer }>
            <HomeLink to='code'>Code</HomeLink>
            <HomeLink to='photos'>Photos</HomeLink>
            <HomeLink to='video'>Video</HomeLink>
          </Row>
        </CSSTransitionGroup>
      </ColumnCentered>
      <CSSTransitionGroup
          transitionName={ {
            appear: footerAppear,
            appearActive: footerAppearActive,
          } }
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnter={false}
          transitionLeave={false}>
        <ColumnCentered styles={ sx.footer }>
          <a href='mailto:jeremybini@gmail.com'>jeremybini@gmail.com</a>
        </ColumnCentered>
      </CSSTransitionGroup>
    </Column>
    <LazyBackgroundImage source='/home_background_optimized.jpg' />
  </Column>
)

export default Home;

