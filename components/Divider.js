import style from '../styles/divider.module.scss';

const Divider = fullHeight => {
    return (
        fullHeight ?
            <div className={style.dividerFullHeight}></div>
            :
            <div className={style.divider}></div>
    )
}

export default Divider;