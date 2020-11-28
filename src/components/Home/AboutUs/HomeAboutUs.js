import React from 'react';
import "../../../scss/_homeaboutus.scss";
import decoration from "../../../assets/Decoration.svg"
import signature from "../../../assets/Signature.svg"

const HomeAboutUs = () => {

    return (
        <div id="aboutUs" className="aboutUs_container">
            <div className="aboutUs_content">
                <h2 className="content_tittle">O nas</h2>
                <img src={decoration} alt="decoration" className=" content_decoration"/>
                <p className="content_text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="signature" className=" content_signature"/>
            </div>
            <div className="aboutUs_image"/>
        </div>
    );
};

export default HomeAboutUs;