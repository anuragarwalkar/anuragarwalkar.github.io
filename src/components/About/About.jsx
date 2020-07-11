import React from 'react';
import './About.scss';
import myPhoto from '../../Assets/images/anurag_arwalkar.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="about__photo">
                <img src={myPhoto} alt="Anurag Arwalkar"/>
            </div>
        </div>
    )
}

export default About;