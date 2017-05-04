/* Screen sizes */
const widths = {
  desktop: {
    max: null,
    min: 992,
  },
  phone: {
    max: 479,
    min: null,
  },
  phoneLandscape: {
    max: 767,
    min: 480,
  },
  tablet: {
    max: 991,
    min: 768,
  }
}

const px = width => `${width}px`

const MAX_PHONE_WIDTH = px(widths.phone.max)
const MAX_PHONE_LANDSCAPE_WIDTH = px(widths.phoneLandscape.max)
const MAX_TABLET_WIDTH = px(widths.tablet.max)

const MIN_DESKTOP_WIDTH = px(widths.desktop.min)
const MIN_PHONE_LANDSCAPE_WIDTH = px(widths.phoneLandscape.min)
const MIN_TABLET_WIDTH = px(widths.tablet.min)

const desktopQuery = `@media only screen and (min-width: ${MIN_DESKTOP_WIDTH})`
const phoneQuery = `@media only screen and (max-width: ${MAX_PHONE_WIDTH})`

// Include all devices smaller than the specified query
const maxMediaQueries = {
  desktop: desktopQuery,
  phone: phoneQuery,
  phoneLandscape: `@media only screen and (max-width: ${MAX_PHONE_LANDSCAPE_WIDTH})`,
  tablet: `@media only screen and (max-width: ${MAX_TABLET_WIDTH})`,
}

// Include all devices larger than the specified query
const minMediaQueries = {
  desktop: desktopQuery,
  phone: phoneQuery,
  phoneLandscape: `@media only screen and (min-width: ${MIN_PHONE_LANDSCAPE_WIDTH})`,
  tablet: `@media only screen and (min-width: ${MIN_TABLET_WIDTH})`,
}

// Restrict to the specified device
const strictMediaQueries = {
  desktop: maxMediaQueries.desktop,
  phone: maxMediaQueries.phone,
  phoneLandscape: `${maxMediaQueries.phoneLandscape} and (min-width: ${MIN_PHONE_LANDSCAPE_WIDTH})`,
  tablet: `${maxMediaQueries.tablet} and (min-width: ${MIN_TABLET_WIDTH})`,
}

export default {
  ...strictMediaQueries,
  max: maxMediaQueries,
  min: minMediaQueries,
  widths,
}
