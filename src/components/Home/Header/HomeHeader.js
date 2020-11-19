
import React from 'react';
import {Link} from "react-router-dom";
import "../../../scss/_homeheader.scss";
import decoration from "../../../assets/Decoration.svg"
// import Nav from "../Nav/Nav";

const HomeHeader = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "#3c3c3c",
    }
    return (
        <div className="container">
            <div className="img1"/>
            <div className="content_container">
                <div className="container_links-1">
                    <Link to={"/logIn"} style={linkStyle}><p className="link_text">Zaloguj</p></Link>
                    <Link to={"/register"}  style={linkStyle}><p className="link_text">Załóż konto</p></Link>
                </div>
                {/*<Nav/>*/}
                <div className="main_container" id="maincontainer">
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={decoration} alt="decoration"/>
                    <div className="main_container-links">
                        <Link to={"/giveAway"} style={linkStyle}><p className="link_text3">ODDAJ RZECZY</p></Link>
                        <Link to={"/organize"} style={linkStyle}><p className="link_text3">ZORGANIZUJ ZBIÓRKĘ</p></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeHeader;