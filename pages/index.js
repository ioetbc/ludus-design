import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import style from '../styles/scroll.module.scss';
import Probjects from '../components/probjects';
import About from '../components/About';
import Contact from '../components/Contact';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <title>My page titles</title>
                    <script async src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" />
                    <script async src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js" />
                    <script async  src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/plugins/debug.addIndicators.min.js" />
                    <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js" />
                    <script async src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js" />
                    <link rel="stylesheet" href="https://use.typekit.net/nvy3bvq.css"></link>
                    <link
                        rel="preload"
                        href="/fonts/acumin-pro.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <script src="//f.vimeocdn.com/js/froogaloop2.min.js"></script>
                </Head>

                        <div id="example-wrapper" className={style.horizontal}>
                            <div class={style.scrollContent}>
                           
                            <div class="hello">
                            <div class="vimeo-wrapper">
                            <iframe id="vimeo_player" src="//player.vimeo.com/video/108960330?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1&amp;background=1" width="100%" height="100%" class="video hide-on-mobile" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                            </div>
                              </div>

                                <Probjects />

                                <About />

                                <Contact />

                            </div>
                        </div>






















                {/*<motion.div
                    class="test"
                    initial={{ y: "100%" }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.4
                    }}
                />
                <motion.div
                    class="test white"
                    initial={{ y: "100%" }}
                    exit={{ y: "-200%" }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8
                    }}
                />*/}
                    </Fragment>

        )
    }
}

export default App;