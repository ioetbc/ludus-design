import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import { includes } from 'lodash';

import style from '../styles/scroll.module.scss';
import Probjects from '../components/probjects';
import About from '../components/About';
import Contact from '../components/Contact';
import Intro from '../components/Intro';

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const sections = document.querySelectorAll('.component');
        const options = { threshold: .6 };
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(element => {
                const body = document.getElementsByTagName('body')[0];
				if (element.isIntersecting && includes(element.target.className, 'aboutWrapper')) {
                    //     console.log('element', element)
                    //     body.classList = 'bg-black'
                    // } else {
                    //     body.classList = 'bg-white'

                    }
				});
		}, options);

		sections.forEach(section => observer.observe(section));
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

                        <Intro />

                        <Probjects />

                        <About />

                        <Contact />

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;