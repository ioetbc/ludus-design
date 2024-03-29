import style from '../../styles/columns.module.scss';

const Column = props => {
    return (
        <section>
            {props.order === 'image-left' ?
                <div className={style[props.class]} style={{ gridTemplateColumns: '5fr 3fr 2fr' }}>
                    <img src={props.img} />
                        <h5
                            className={style.title}
                            style={{ textAlign: "center" }}
                        >
                            {props.title}
                        </h5>
                    <div>
                        {props.content.map(p => <p>{p}</p>)}
                    </div>
                </div>
                :
                <div className={style[props.class]} style={{ gridTemplateColumns: '2fr 3fr 5fr' }}>
                    <h5 className={style.title}>{props.title}</h5>
                    <div>
                        {props.content.map(p => <p>{p}</p>)}
                    </div>
                    <img src={props.img} />
                </div>
            }   
        </section>
    );
}

export default Column;