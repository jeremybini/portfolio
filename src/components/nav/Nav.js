import React, { PropTypes } from 'react';

import NavModal from './NavModal';
import TopNav from './TopNav';

const Nav = ({ isOpen, links, onToggleModal }) => (
  <div>
    <TopNav links={ links } />
    <NavModal
      isOpen={ isOpen }
      links={ links }
      onToggleModal={ onToggleModal } />
  </div>
);

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};

export default Nav;
