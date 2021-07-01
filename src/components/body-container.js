import React from 'react'
import postdata from '../data/info.json';
import './body-container.css';

function body_container() {
    return (
        postdata.map((data, index) => {
            return (
                <div className="body-container">
                    <div className={`body-content body-content${data.id} `}>
                        <div className="our-story-card-animation-image">
                            <img className={`img-content img${data.id}`} alt={data.alt} src={data.image} />
                            <video className={`video-content video${data.id}`} src={data.video} type="video/mp4" autoPlay muted loop>
                            </video>

                        </div>
                        <div className="our-story-card-animation-text">
                            <div id="" className="text-0" data-uia="">
                                <h1>{data.title}</h1>
                            </div>
                            <div id="" className="text-1" data-uia="">
                                <h3>{data.subTitle}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    )
}

export default body_container
