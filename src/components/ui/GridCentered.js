import React, { PropTypes } from 'react';
import {
  enterExitStyle,
  layout,
  measureItems,
  makeResponsive,
  SpringGrid
} from 'react-stonecutter';

const { enter, entered, exit } = enterExitStyle.simple;
const Grid = makeResponsive(measureItems(SpringGrid, { measureImages: true }), {
  maxWidth: 1920,
});

const GridCentered = (props) => (
  <div style={ { margin: 'auto' } }>
    <Grid
      component="ul"
      columns={ 5 }
      columnWidth={ 300 }
      duration={ 1000 }
      enter={ enter }
      entered={ entered }
      exit={ exit }
      gutterWidth={ 5 }
      gutterHeight={ 1 }
      layout={ layout.pinterest }
      springConfig={ { stiffness: 170, damping: 26 } }
      { ...props }
      />
  </div>
);

export default GridCentered;
