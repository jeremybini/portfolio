import { PropTypes } from 'react'

/* Aphrodite prop */
const { array, arrayOf, bool, object, oneOfType } = PropTypes

export default oneOfType([
  arrayOf(
    oneOfType([
      array,
      bool,
      object
    ]),
  ),
  bool,
  object,
])
