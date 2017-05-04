import { StyleSheet } from 'aphrodite'
import React from 'react'

import Column from './Column'
import Footer from './Footer'

const sx = StyleSheet.create({
  content: {
    padding: '100px 20px 40px',
  },
  page: {
    minHeight: '100vh',
  }
})

const PageContent = (props) => (
  <Column styles={ sx.page }>
    <Column grow styles={ sx.content } { ...props } />
    <Footer />
  </Column>
)

export default PageContent
