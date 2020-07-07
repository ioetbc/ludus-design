import React, { useEffect } from 'react';

const Video = props => {
    useEffect(() => {
        const section = document.getElementById(props.id);
        const options = { threshold: .2 };
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(element => {
				if (element.isIntersecting) {
                        document.getElementById(props.id).play();
                    } else {
                        document.getElementById(props.id).pause();
                    }
				});
        }, options);

        observer.observe(section);

    }, []); 

    return (
        <section>
            <video loop id={props.id}>
                <source src={props.url} type="video/mp4" />
            </video>
        </section>
    );
}

export default Video;