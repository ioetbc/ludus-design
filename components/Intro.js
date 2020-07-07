import style from '../styles/intro.module.scss';

function scrollTo() {
    const yOffset = -90; 
    const element = document.getElementById("introHeading");
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

const About = () => {
    return (
        <div className="layoutWrapper">
        <div className="probjectContent component">
            <h2>I'm Rob Game.</h2>
            <p className="pre">I like to take design in a different direction.</p>
        </div>
        <img onClick={() => scrollTo()} className={style.downArrow} src="/images/down-arrow.svg" />
    </div>
    )
}

export default About;