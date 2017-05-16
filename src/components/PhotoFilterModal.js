import { StyleSheet } from 'aphrodite'
import React from 'react'
import { connect } from 'react-redux'

import { getPhotoCategories, getPhotoFilter } from '../reducers'
import { setPhotoFilterFromModal } from '../reducers/photos'
import { hexToRGB, grayExtraDark, greenLight, red } from '../utils/colors'
import screenSize from '../utils/screenSize'

import ColumnCentered from './ui/ColumnCentered'
import Div from './ui/Div'
import Modal from './ui/Modal'
import Span from './ui/Span'

const sx = StyleSheet.create({
  filterContent: {
    height: '100%',
    transition: '0.5s ease',
    transform: 'translateX(300px)',
  },
  filterContentOpen: {
    transform: 'translateX(0)',
  },
  filterContainer: {
    color: 'white',
    fontSize: '20px',
    margin: '25px',
    padding: '25px',
    ':hover': {
      color: red,
      cursor: 'pointer',
    }
  },
  filterActive: {
    color: greenLight,
  },
  filterModal: {
    boxShadow: `-8px 0 15px ${hexToRGB(grayExtraDark, 0.5)}`,
    left: 'auto',
    opacity: 0,
    right: 0,
    transition: '0.5s ease',
    width: '100%',
    [screenSize.min.tablet]: {
      width: '300px',
    },
  },
  filterModalOpen: {
    opacity: 0.95,
  },
  hidden: {
    visibility: 'hidden',
  },
  visibile: {
    visibility: 'visible',
  }
})

/*/
 * Styling note:
 *   Since aphrodite generates style sheets on the fly,
 *   on initial render, the stylesheet is not yet injected.
 *   To prevent this, we give it an initial style to the modal
 *   that can be overwritten as aphrodite classes are generated
/*/
const initialStyle = {
  opacity: 0,
  visibility: 'hidden',
}

const PhotoFilterModal = ({
  categories,
  isOpen,
  photoFilter,
  setPhotoFilterFromModal,
}) => (
  <Modal
    style={ initialStyle }
    styles={ [
      sx.hidden,
      sx.filterModal,
      isOpen && sx.visibile,
      isOpen && sx.filterModalOpen,
    ] }>
    <ColumnCentered styles={ [
      sx.hidden,
      sx.filterContent,
      isOpen && sx.visibile,
      isOpen && sx.filterContentOpen,
    ] }>
      <Div
        onClick={ () => setPhotoFilterFromModal() }
        styles={ [sx.filterContainer, sx.filterContainerOpen] }>
        <Span
          styles={ !photoFilter && sx.filterActive }>
          All
        </Span>
      </Div>
      {
        categories.map(category =>
          <Div
            key={ category }
            onClick={ () => setPhotoFilterFromModal(category) }
            styles={ [sx.filterContainer, sx.filterContainerOpen] }>
            <Span
              styles={ photoFilter === category && sx.filterActive }>
              { category }
            </Span>
          </Div>
        )
      }
    </ColumnCentered>
  </Modal>
)

function mapStateToProps(state) {
  return {
    categories: getPhotoCategories(state),
    photoFilter: getPhotoFilter(state),
  }
}

export default connect(
  mapStateToProps,
  { setPhotoFilterFromModal }
)(PhotoFilterModal)
