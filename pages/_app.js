import App, { Container } from 'next/app'
import '../styles/global.scss';

import React from 'react'
import { PageTransition } from 'next-page-transitions'
 
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
 
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
 
    return { pageProps }
  }
 
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Container>
        <PageTransition timeout={1000} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </Container>
    )
  }
}