import style from '../styles/contact.module.scss';

const Contact = () => {
    return (
        <div className={style.aboutWrapper} style={{background: 'white'}}>
            <div className={style.aboutContent}>
            <div className={style.fuck}>
                <div className={style.intro}>
                        <h2 style={{color: 'black'}}>Get in touch</h2>
                        <p className={style.email}>Rob@ludusdesign.co.uk</p>
                        <div className={style.col2}>
                            <h6 style={{ color: 'black', width: '45px' }}>Stalk my instagrams</h6>
                            <div className={style.col1}>
                                <a className={style.link} href="">@ludus_design</a>
                                <a className={style.link} href="">@robgameillustrations</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;