import React from 'react';
// import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
import "../../../scss/_homeheader.scss";
import decoration from "../../../assets/Decoration.svg"

const HomeHeader = () => {



    return (
        <header className="header_container">
            <div className="header_image"/>
            <div className="top_menu">
                <div className="user_menu">
                    <Link to={"/logowanie"} className="user_link"><p className="user_menu-logIn">Zaloguj</p></Link>
                    <Link to={"/rejestracja"} className="user_link"><p className="user_menu-register">Załóż konto</p>
                    </Link>
                </div>
                <div className="navigation_menu">
                    <LinkScroll
                        activeClass="active"
                        to="threeColumns"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="navigation_link navigation_startLink">
                        Start
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="simpleSteps"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="navigation_link">
                        O co chodzi?
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="navigation_link">
                        O nas
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="whoWeHelp"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="navigation_link">
                        Fundacja i organizacja
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="navigation_link">
                        Kontakt
                    </LinkScroll>
                </div>
                <div className="header_content">
                    <h2 className="content_tittle">
                        Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce
                    </h2>
                    <img src={decoration} alt="decoration" className=" content_decoration"/>
                    <div className=" content_links">
                        <Link to={"/logowanie"} className="content_link">
                        <p className="content_link-give">ODDAJ <br/>RZECZY</p>
                        </Link>
                        <Link to={"/logowanie"} className="content_link">
                            <p className="content_link-organize">ZORGANIZUJ <br/>ZBIÓRKĘ</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;