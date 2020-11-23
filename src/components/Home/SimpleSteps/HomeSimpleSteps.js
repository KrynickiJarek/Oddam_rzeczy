import React from 'react';
import "../../../scss/_homesimplesteps.scss";
import {Link} from "react-router-dom";
import decoration from "../../../assets/Decoration.svg"
import itemIcon from "../../../assets/Icon-1.svg"
import basketIcon from "../../../assets/Icon-2.svg"
import searchIcon from "../../../assets/Icon-3.svg"
import reloadIcon from "../../../assets/Icon-4.svg"


const HomeSimpleSteps = () => {

    return (
        <div id="simpleSteps" className="simpleSteps_container">
            <div className="simpleSteps_container-head">
                <h2 className="simpleSteps-head">Wystarczą 4 proste kroki</h2>
                <img src={decoration} alt="decoration" className="simpleSteps-decoration"/>
            </div>
            <div className="simpleSteps_container-icons">

                <div className="icon_container">
                    <img src={itemIcon} alt="item icon" className="icon_container-icon"/>
                    <h3 className="icon_container-head">Wybierz rzeczy</h3>
                    <div className="icon_container-decoration"/>
                    <p className="icon_container-text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="icon_container">
                    <img src={basketIcon} alt="item icon" className="icon_container-icon"/>
                    <h3 className="icon_container-head">Spakuj je</h3>
                    <div className="icon_container-decoration"/>
                    <p className="icon_container-text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="icon_container">
                    <img src={searchIcon} alt="item icon" className="icon_container-icon"/>
                    <h3 className="icon_container-head">Zdecyduj komu chcesz pomóc</h3>
                    <div className="icon_container-decoration"/>
                    <p className="icon_container-text">wybierz zaufane miejsce</p>
                </div>
                <div className="icon_container">
                    <img src={reloadIcon} alt="item icon" className="icon_container-icon"/>
                    <h3 className="icon_container-head">Zamów kuriera</h3>
                    <div className="icon_container-decoration"/>
                    <p className="icon_container-text">kurier przyjedzie w dogodnym terminie</p>
                </div>


            </div>
            <div className="simpleSteps_container-button">
                <Link to={"/logowanie"} className="button_link">
                    <p className="button_text">ODDAJ <br/>RZECZY</p>
                </Link>
            </div>
        </div>

    );
};

export default HomeSimpleSteps;