/* Screen sizes */
const MAX_PHONE_WIDTH = '479px';
const MAX_PHONE_LANDSCAPE_WIDTH = '767px';
const MAX_TABLET_WIDTH = '991px';

const MIN_DESKTOP_WIDTH = '992px';
const MIN_PHONE_LANDSCAPE_WIDTH = '480px';
const MIN_TABLET_WIDTH = '768px';

const desktopQuery = `@media only screen and (min-width: ${MIN_DESKTOP_WIDTH})`;
const phoneQuery = `@media only screen and (max-width: ${MAX_PHONE_WIDTH})`;

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
}
