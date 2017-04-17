import { css, StyleSheet } from 'aphrodite';
import React from 'react';

import NavContainer from '../../containers/NavContainer';

const sx = StyleSheet.create({
  content: {
    backgroundColor: '#F7F8F9',
    paddingTop: '100px',
  },
});

const PageWithNav = (props) => (
  <div>
    <NavContainer />
    <div className={ css(sx.content) }>
      { props.children }
    </div>
  </div>
);

export default PageWithNav;
