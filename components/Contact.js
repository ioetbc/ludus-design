import style from '../styles/about.module.scss';

const Contact = () => {
    return (
        <div className={style.aboutWrapper} style={{background: 'white'}}>
            <div className={style.aboutContent}>
            <div className={style.fuck}>
                <div className={style.intro}>
                        <h2 style={{color: 'black'}}>Get in touch</h2>
                        <div className={style.col2}>
                            <h6 style={{ color: 'black' }}>Stalk my instagrams</h6>
                            <a style={{ color: 'black', display: 'inherit' }} href="">@ludus_design</a>
                            <a style={{ color: 'black'}} href="">@robgameillustrations</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;