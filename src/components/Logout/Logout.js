import React from 'react';
import "../../scss/_login.scss";
import "../../scss/_logout.scss";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useForm} from "react-hook-form";
import decoration from "../../assets/Decoration.svg"

const Logout = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className="login_container">
            <div className="top_menu">
                <div className="user_menu">
                    <Link to={"/logowanie"} className="user_link"><p className="user_menu-logIn">Zaloguj</p></Link>
                    <Link to={"/rejestracja"} className="user_link"><p className="user_menu-register">Załóż konto</p>
                    </Link>
                </div>
                <div className="navigation_menu">
                    <HashLink to={"/"} className="navigation_link">Start</HashLink>
                    <HashLink to={"/#simpleSteps"} className="navigation_link">O co chodzi?</HashLink>
                    <HashLink to={"/#aboutUs"} className="navigation_link">O nas</HashLink>
                    <HashLink to={"/#whoWeHelp"} className="navigation_link">Fundacja i organizacja</HashLink>
                    <HashLink to={"/#contact"} className="navigation_link">Kontakt</HashLink>
                </div>
            </div>

            <div className="logout_container">
                <h2 className="content_tittle">Wylogowanie nastąpiło<br/>pomyślnie!</h2>
                <img src={decoration} alt="decoration" className=" content_decoration"/>
                    <Link to={"/"} className="home_button">
                        <p className="content_link-register">Strona główna</p>
                    </Link>
            </div>
        </div>
    );
};

export default Logout;