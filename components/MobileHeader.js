import style from '../styles/mobileHeader.module.scss';

const MobileHeader = () => {
    return (
       <div className={style.mobileHeaderWrapper}>
        <div className={style.logo}>
            <img src="/images/Ludus_horizontal_black.svg" />
        </div>
       </div>
    )
}

export default MobileHeader;