import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Column from '../../components/ui/Column';
import ColumnCentered from '../../components/ui/ColumnCentered';
import Heading from '../../components/ui/Heading';
import HomeLink from '../../components/ui/HomeLink';
import Link from '../../components/ui/Link';
import LazyBackgroundImage from '../../components/ui/LazyBackgroundImage';
import Row from '../../components/ui/Row';
import screenSize from '../../utils/screenSize';

const sx = StyleSheet.create({
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
  home: {
    color: 'white',
    height: '100%',
    overflow: 'hidden',
  },
  homeContent: {
    marginBottom: '100px',
    transition: '4500s ease-in',
    zIndex: 200,
    h1: {
      fontSize: '60px',
      letterSpacing: '1px',
    }
  },
  homeLinksContainer: {
    [screenSize.max.phoneLandscape]: {
      flexDirection: 'column',
    },
  },
  homeTitle: {
    fontSize: '36px',
    fontWeight: '300',
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
  white: {
    color: 'white',
  }
});

const contentAppear = css(sx.contentAppear);
const contentAppearActive = css(sx.contentAppearActive);

const linksAppear = css(sx.linksAppear);
const linksAppearActive = css(sx.linksAppearActive);

const footerAppear = css(sx.footerAppear);
const footerAppearActive = css(sx.footerAppearActive);

const Home = () => (
  <Column styles={ sx.home }>
    <Column grow justify='space-between'>
      <ColumnCentered grow styles={ [sx.homeContent, sx.white] }>
        <CSSTransitionGroup
          transitionName={ {
            appear: contentAppear,
            appearActive: contentAppearActive,
          } }
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
          <Heading styles={ sx.homeTitle }>Jeremy Bini</Heading>
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
          <Row styles={ sx.homeLinksContainer }>
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
          <Link
            href='mailto:jeremybini@gmail.com'
            styles={ sx.white }>
            jeremybini@gmail.com
          </Link>
        </ColumnCentered>
      </CSSTransitionGroup>
    </Column>
    <LazyBackgroundImage source='/home_background_optimized.jpg' />
  </Column>
)

export default Home;

