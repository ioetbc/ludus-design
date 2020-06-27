import style from '../../styles/grid.module.scss';

const Grid = props => {
    return (
        <section>
            <div className={style.twoUp}>
                {props.twoUp.map(url => <img src={url} />)}
            </div>
            <img className={style.fullWidth} src={props.fullWidth} />
        </section>
    );
}

export default Grid;
