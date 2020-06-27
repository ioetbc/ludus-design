import React, { useEffect } from 'react';

const Video = props => {
    useEffect(() => {
        document.getElementById(props.id).play();
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