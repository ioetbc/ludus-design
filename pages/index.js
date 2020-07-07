import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import { includes } from 'lodash';

import style from '../styles/scroll.module.scss';
import Probjects from '../components/probjects';
import About from '../components/About';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import MobileHeader from '../components/MobileHeader';
import DesktopSideBar from '../components/DesktopSideBar';
import Divider from '../components/Divider';

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const section = document.querySelectorAll('.background')[0];
        const options = { threshold: .6 };
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(element => {
                const body = document.getElementsByTagName('body')[0];
                console.log('element.isIntersecting', element)
				if (element.isIntersecting) {
                        console.log('intersection the about wraooer')
                        body.classList = 'bg-black'
                    } else {
                        body.classList = 'bg-white'

                    }
				});
        }, options);
        console.log('section', section)

        observer.observe(section);
        
        const fadeInSections = document.querySelectorAll('.component');
        const fadeInOptions = { threshold: .4 };
		const fadeInObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(element => {
				if (element.isIntersecting) {
                        element.target.classList += ' fade-in'
                    }
				});
		}, fadeInOptions);

		fadeInSections.forEach(section => fadeInObserver.observe(section));
    }


    render() {
        return (
            <Fragment>
                <Head>
                    <title>My page titles</title>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/plugins/debug.addIndicators.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js" />
                    <script src="//f.vimeocdn.com/js/froogaloop2.min.js"></script>
                </Head>

                <div id="example-wrapper" className={style.horizontal}>
                    <div class={style.scrollContent}>

                        <MobileHeader />

                        <DesktopSideBar />
                    
                        <div class="hello">
                            <div class="vimeo-wrapper">
                                <iframe id="vimeo_player" src="//player.vimeo.com/video/108960330?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1&amp;background=1" width="100%" height="100%" class="video hide-on-mobile" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                            </div>
                        </div>

                        <Intro />

                        <Divider
                            fullHeight={true}
                        />

                        <Probjects />

                        <Divider
                            fullHeight={true}
                        />

                        <About />

                        <Contact />

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;