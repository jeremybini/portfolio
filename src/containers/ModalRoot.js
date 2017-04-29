import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ImageFilterModal from '../components/ImageFilterModal';
import NavModal from '../components/NavModal';
import ModalControls from '../components/ModalControls';
import { modalTypes, toggleModal } from '../reducers/modal';

const { IMAGE_FILTER, NAV } = modalTypes;

const ModalRoot = ({ modalType, toggleModal }) => {
  const filterIsActive = modalType === IMAGE_FILTER;
  const navIsActive = modalType === NAV;

  return (
    <ModalControls
      filterIsActive={ filterIsActive }
      hamburgerIsActive={ navIsActive }
      onFilterClick={ () => toggleModal(IMAGE_FILTER) }
      onHamburgerClick={ () => toggleModal(NAV) }>
      <NavModal isOpen={ navIsActive } />
      <ImageFilterModal isOpen={ filterIsActive } />
    </ModalControls>
  )
};

export default withRouter(connect(
  state => state.modal,
  { toggleModal }
)(ModalRoot));
