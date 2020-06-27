
import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import style from '../styles/project.module.scss';

import Header from '../components/case-studies/Header.js';
import Video from '../components/case-studies/Video.js';
import Colunmn from '../components/case-studies/Column.js'
import Grid from '../components/case-studies/Grid.js'
import Quote from '../components/case-studies/Quote.js'

class WorkLock extends Component {
    render() {
        return (
            <Fragment>
                <div className={style.projectWrapper}>
                    <Header
                        title="WorkLock"
                        pre="Brand identity, Print design, Logo Design, Motion Graphics. Website design and Icon design"
                        url="worklock.co.uk"
                    />
                    <main className={style.main}>

                        <Link href="/">
                            <div className={style.homeWrapper}>
                                <img className={style.homeButton} src="/images/close-icon.svg" />            
                            </div>
                        </Link>

                        <Video
                            url="/images/probjects/worklock/website.mp4"
                            id="main-video"
                        />

                        <Colunmn
                            class="col3"
                            title="Core Principles"
                            content={
                                [
                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                                    "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infa"
                                ]
                            }
                            img="/images/probjects/worklock/worklock-scribbles.gif"
                            order="image-left"
                        />

                        <Video
                            url="/images/probjects/worklock/ipad.mp4"
                            id="ipad-video"
                        />

                        <Colunmn
                            class="col3"
                            title="Iconography"
                            content={
                                [
                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                ]
                            }
                            img="/images/probjects/worklock/icons.gif"
                            order="image-right"
                        />

                        <Video
                            url="/images/probjects/worklock/phone.mp4"
                            id="phone-video"
                        />

                        <Quote
                            quote="It is a long established fact that a reader will be distracted. It is a long established fact that a reader will be distracted."
                            author="Will Cole"
                            authorTitle="Worklock founder"
                        />

                        <Grid
                            twoUp={[
                                "/images/probjects/worklock/letter-head.jpg",
                                "/images/probjects/worklock/icons.gif",
                            ]}
                            fullWidth="/images/probjects/worklock/stickers.jpg"
                        />

                    </main>
                </div>
            </Fragment>
        )
    }
}

export default WorkLock;