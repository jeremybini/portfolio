import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ScrollingNavBar from '../components/ScrollingNavBar';

import ScrollWrapper from './ScrollWrapper';

const isPastBreakpoint = () => window.scrollY > 40;

class NavBar extends Component {
  state = {
    isScrolled: isPastBreakpoint(),
  }

  handleScroll() {
    if (this.state.isScrolled && !isPastBreakpoint()) {
      return this.setState({
        isScrolled: false,
      });
    }

    if (!this.state.isScrolled && isPastBreakpoint()) {
      return this.setState({
        isScrolled: true,
      });
    }
  }

  render() {
    return (
      <ScrollWrapper
        onWindowScroll={ this.handleScroll.bind(this) }>
        <ScrollingNavBar
          isPhotoPage={ this.props.location.pathname === '/photos' }
          isScrolled={ this.state.isScrolled } />
      </ScrollWrapper>
    )
  }
}

export default withRouter(NavBar);
