
import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import style from '../styles/probjects.module.scss';
import invertScroll from '../utils/invertScroll';

class  Probjects extends Component {
    componentDidMount() {
        const isDesktop = window.matchMedia('(min-width: 1000px)').matches;
        console.log('isDesktop', isDesktop)
        if (isDesktop) {
            const item = document.getElementById('example-wrapper');
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';

            item.addEventListener('wheel', (e) => invertScroll(e, item));
            var controller = new ScrollMagic.Controller({ vertical: false });

            var tween = TweenMax.to("#target", 1, { width: "+=150px" });
            var tween2 = TweenMax.to("#target2", 1, { width: "+=150px" });
            var tween3 = TweenMax.to("#target3", 1, { width: "+=150px" });
            var tween4 = TweenMax.to("#target4", 1, { width: "+=150px" });

            const halfScreenWidth = window.innerWidth / 2

            new ScrollMagic.Scene({ triggerElement: "#target", duration: halfScreenWidth })
                .setTween(tween)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: "#target2", duration: halfScreenWidth })
                .setTween(tween2)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: "#target3", duration: halfScreenWidth })
                .setTween(tween3)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: "#target4", duration: halfScreenWidth })
                .setTween(tween4)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        } else {
            var controller = new ScrollMagic.Controller({ });

            var tween = TweenMax.to("#target", 1, { left: "0%" });
            var tween2 = TweenMax.to("#target2", 1, { left: "0%" });
            var tween3 = TweenMax.to("#target3", 1, { left: "0%" });
            var tween4 = TweenMax.to("#target4", 1, { left: "0%" });

            const halfScreenWidth = window.innerWidth / 2

            new ScrollMagic.Scene({ triggerElement: "#target", duration: halfScreenWidth, reverse: false })
                .setTween(tween)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: "#target2", duration: halfScreenWidth, reverse: false })
                .setTween(tween2)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: "#target3", duration: halfScreenWidth, reverse: false })
                .setTween(tween3)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: "#target4", duration: halfScreenWidth, reverse: false })
                .setTween(tween4)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        }
    }

    componentWillUnmount() {
        const isDesktop = window.matchMedia('(min-width: 1000px)').matches;
        console.log('isDesktop', isDesktop)
        if (isDesktop) {
            const item = document.getElementById('example-wrapper');
            item.removeEventListener('wheel', invertScroll);
            document.getElementsByTagName('body')[0].style.overflow = 'initial';
        }
    }

    render() {
        return (
            <Fragment>

                <div className="column marginRightLarge">
                    <div className="columnContent medium">
                        <div className="content">
                            <div className={style.thumbnailWrapper}>
                                <div className={style.imageWrapper}>
                                    <h2>Selected Work</h2>
                                    <p>Here are a few projects that I have done on a freelance basis, where I have neem the sole creative on the project. Want to see more of my work.</p>
                                    <a href="">Get in touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Link href="/case-study">
                    <div id="target" className="column marginRightSmall">
                        <div className="columnContent medium">
                            <img className={style.thumbnail} src="/images/palceholder-probject-image-2.jpeg" />
                            <div className={style.thumbnailContent}>
                                <p className={style.thumbnailNumber}>02.</p>
                                <p className={style.thumbnailTitle}>the Winchester Orangery</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/case-study">
                    <div id="target2" className="column marginRightSmall">
                        <div className="columnContent medium">
                            <img className={style.thumbnail} src="/images/palceholder-probject-image-2.jpeg" />
                            <div className={style.thumbnailContent}>
                                <p className={style.thumbnailNumber}>02.</p>
                                <p className={style.thumbnailTitle}>the Winchester Orangery</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/case-study">
                    <div id="target3" className="column marginRightLarge">
                        <div className="columnContent medium">
                            <img className={style.thumbnail} src="/images/palceholder-probject-image-2.jpeg" />
                            <div className={style.thumbnailContent}>
                                <p className={style.thumbnailNumber}>02.</p>
                                <p className={style.thumbnailTitle}>the Winchester Orangery</p>
                            </div>
                        </div>
                    </div>
                </Link>













            </Fragment>
        )
    }
}

export default Probjects;