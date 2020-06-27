import style from '../styles/intro.module.scss';

const About = () => {
    return (
        <div className={`${style.introWrapper} component`}>
            <div className={style.introContent}>
                <div className={style.fuck}>
                    <div className={style.intro}>
                        <h2>I'm Rob Game.</h2>
                        <div className={style.col2}>
                            <p className="mobile">I like design.</p>
                            <p className="desktop">I like to take design in a different direction.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className={style.downArrow} src="/images/close-icon.svg" />
        </div>
    )
}

export default About;