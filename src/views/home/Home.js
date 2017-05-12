import { css, StyleSheet } from 'aphrodite'
import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import Column from '../../components/ui/Column'
import ColumnCentered from '../../components/ui/ColumnCentered'
import Heading from '../../components/ui/Heading'
import Link from '../../components/ui/Link'
import Row from '../../components/ui/Row'
import withWindow from '../../hocs/withWindow'
import { grayExtraDark } from '../../utils/colors'
import screenSize from '../../utils/screenSize'
import HomeLink from './HomeLink'

const sx = StyleSheet.create({
  footer: {
    fontSize: '18px',
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
    transitionDelay: '1s',
  },
  footerEmail: {
    color: 'white',
  },
  home: {
    backgroundColor: grayExtraDark,
    color: 'white',
    height: '100%',
    overflow: 'hidden',
  },
  homeContent: {
    marginBottom: '100px',
    transition: '4500s ease-in',
    zIndex: 200,
  },
  homeLinksContainer: {
    [screenSize.max.phoneLandscape]: {
      flexDirection: 'column',
    },
  },
  homeTitle: {
    fontSize: '40px',
    fontWeight: '300',
    transition: 'opacity 2s',
  },
  homeTitleAppear: {
    opacity: 0.01,
  },
  homeTitleAppearActive: {
    opacity: 1,
  },
  linksAppear: {
    opacity: 0.01,
    transform: 'translate(0, 20px)',
  },
  linksAppearActive: {
    opacity: 1,
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
    transition: 'transform 1s, opacity 0.5s',
    transitionDelay: '.7s',
  },
})

const homeTitleAppear = css(sx.homeTitleAppear)
const homeTitleAppearActive = css(sx.homeTitleAppearActive)

const linksAppear = css(sx.linksAppear)
const linksAppearActive = css(sx.linksAppearActive)

const footerAppear = css(sx.footerAppear)
const footerAppearActive = css(sx.footerAppearActive)

const Home = ({ windowData }) => (
  <Column styles={ sx.home }>
    <Column grow justify='space-between'>
      <ColumnCentered grow styles={ sx.homeContent }>
        <CSSTransitionGroup
          transitionName={ {
            appear: homeTitleAppear,
            appearActive: homeTitleAppearActive,
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
          <Link href='mailto:jeremybini@gmail.com' styles={ sx.footerEmail }>
            jeremybini@gmail.com
          </Link>
        </ColumnCentered>
      </CSSTransitionGroup>
    </Column>
  </Column>
)

export default withWindow(Home)

