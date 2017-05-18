import React from 'react'
import GoogleAnalytics from 'react-ga'

const { GOOGLE_TRACKING_ID, NODE_ENV } = process.env

const trackingId = NODE_ENV === 'production' && GOOGLE_TRACKING_ID

GoogleAnalytics.initialize(trackingId)

const trackPage = page => {
  GoogleAnalytics.set({ page })
  GoogleAnalytics.pageview(page)
}

const withTracker = WrappedComponent => {
  return props => {
    const page = props.location.pathname
    trackPage(page)

    return (
      <WrappedComponent {...props} />
    )
  }
}

export default withTracker
