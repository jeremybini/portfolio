import React, { Component } from 'react';

import Nav from '../components/nav/Nav';

export const links = [
  {
    text: 'Code',
    to: '/code',
  },
  {
    text: 'Photos',
    to: '/photos',
  },
  {
    text: 'Video',
    to: '/video',
  },
  {
    href: 'mailto:jeremybini@gmail.com',
    target: '_blank',
    text: 'Contact',
  },
];

class NavContainer extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Nav
        links={ links }
        isOpen={ this.state.isOpen }
        onToggleModal={ this.handleToggle }
      />
    )
  }
};

export default NavContainer;
