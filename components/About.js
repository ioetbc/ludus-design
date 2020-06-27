import style from '../styles/about.module.scss';

const About = () => {
    return (
        <div className={`${style.aboutWrapper} component`}>
            <div className={style.aboutContent}>
                <div className={style.fuck}>
                    <div className={style.intro}>
                        <h2>About Me</h2>
                        <div className={style.col2}>
                            <h6>Rob Game</h6>
                            <p>A Hampshire based designer with give years of experience working at digital agencies, marketing agencies and freelancing</p>
                        </div>
                    </div>
                </div>

                <div className={style.fuck}>
                    <div className={style.skillSet}>
                        <h6>Skill Set</h6>
                        <ul>
                            <li>Design</li>
                            <li>Branding</li>
                            <li>Illustration</li>
                            <li>Motion Graphics</li>
                            <li>Direction</li>
                        </ul>
                    </div>
                </div>

                <div className={style.experience}>
                    <div className={style.work}>
                        <h2>Experience</h2>
                        <div className={style.col2}>
                            <h6>Current Postitions</h6>
                            <p>Think Creative - Designer World Food Programme, Consultant Freelance</p>
                        </div>
                        <div className={style.col2}>
                            <h6>Previous Postitions</h6>
                            <ul>
                                <li>Big Mallet - lead designer</li>
                                <li>Clockwork Pie - designer</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.interests}>
                        <div className={style.col2}>
                            <h6>Interests and preferences</h6>
                            <ul>
                                <li>Playing Guitar</li>
                                <li>Strenth and conditioning</li>
                                <li>Eating Lasagne</li>
                                <li>Black coffee</li>
                                <li>Video games</li>
                                <li>Jaffa cakes</li>
                            </ul>
                        </div>
                        <div className={style.col2}>
                            <h6>Achievments</h6>
                            <div>
                                <p>Distinction in Creative multimedia and Design FDA</p>
                                <p>A levels in Media Studies, Music Technolog and English Lit/Lang</p>
                                <p>250kg Deadlift</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;