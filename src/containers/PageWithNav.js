import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PageContent from '../components/ui/PageContent';
import ModalRoot from '../containers/ModalRoot';
import { closeModal } from '../reducers/modal';

import NavBar from './NavBar';

class PageWithNav extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    modalType: PropTypes.string,
  }

  componentWillMount() {
    if (this.props.modalType) {
      this.props.closeModal()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div>
        <ModalRoot />
        <NavBar />
        <PageContent>
          { this.props.children }
        </PageContent>
      </div>
    )
  }
}

export default connect(
  state => state.modal,
  { closeModal },
)(withRouter(PageWithNav));
