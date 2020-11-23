import React from 'react';
import "../../../scss/_homeaboutus.scss";
import decoration from "../../../assets/Decoration.svg"

const HomeAboutUs = () => {

    return (
        <div id="aboutUs" className="aboutUs_container">
            <div className="aboutUs_content">
                <h2 className="content_tittle">O nas</h2>
                <img src={decoration} alt="decoration" className=" content_decoration"/>
            </div>
            <div className="aboutUs_image"/>
        </div>

    );
};

export default HomeAboutUs;