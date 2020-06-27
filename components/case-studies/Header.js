import style from '../../styles/project.module.scss';

const Header = props => {
    return (
        <header className={style.projectHeader}>
            <h1 className={style.projectHeading}>{props.title}</h1>
            <p className={style.pre}>
                {props.pre}
            </p>
            <a className={style.link} href={`https://www.${props.url}`}>Go to site</a>
        </header>
    )
}

export default Header;