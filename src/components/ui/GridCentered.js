import React, { PropTypes } from 'react'
import sizeMe from 'react-sizeme'
import {
  layout,
  CSSGrid,
} from 'react-stonecutter'

const Grid = CSSGrid

const GridCentered = ({
  columnWidth,
  duration,
  isMobile = false,
  minPadding,
  size,
  ...rest
}) => {
  const { columns: numColumns, gutterWidth } = rest
  const { width } = size

  const maxColumnWidth = columnWidth + 2 * gutterWidth >= width
                           ? width - minPadding - 2 * gutterWidth
                           : columnWidth

  const columns = numColumns ||
                  Math.floor(
                    (width - minPadding) /
                    (maxColumnWidth + gutterWidth)
                  )

  duration = !isMobile && duration

  return (
    <div style={ { margin: 'auto' } }>
      <Grid
        columns={ columns }
        columnWidth={ maxColumnWidth }
        duration={ duration }
        { ...rest } />
    </div>
  )
}

GridCentered.defaultProps = {
  component: 'ul',
  duration: 500,
  gutterHeight: 10,
  gutterWidth: 10,
  layout: layout.pinterest,
  minPadding: 0,
}

GridCentered.propTypes = {
  columnWidth: PropTypes.number.isRequired,
}

export default sizeMe()(GridCentered)
