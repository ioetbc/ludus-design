import style from '../../styles/quote.module.scss';

const Quote = props => {
    return (
        <section>
                <div className={style.quoteWrapper}>
                    <p className={style.quote}>"{props.quote}"</p>
                    <div>
                        <p
                            className={style.quoteName}
                            style={{ marginBottom: 0 }}
                        >
                            {props.author}
                        </p>
                        <p className={style.quoteCompany}>{props.authorTitle}</p>
                    </div>
                </div>
        </section>
    );
}

export default Quote;
