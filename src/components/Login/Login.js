import React from 'react';
import "../../scss/_login.scss";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import decoration from "../../assets/Decoration.svg"
import {Link as LinkScroll} from "react-scroll";

const Login = () => {
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
                    <LinkScroll
                        activeClass="active"
                        to="threeColumns"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="navigation_link">
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
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form_container">
                <h2 className="content_tittle">Zaloguj się</h2>
                <img src={decoration} alt="decoration" className=" content_decoration"/>
                <div className="input_container">
                    <label className="form_text">Email
                        <input name="email"
                               ref={register({pattern: /^(([^<>()[\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i})}
                               className="form_input"/>
                        {errors.email &&
                        <span style={{fontWeight: "bold", color: "red"}}>Wpisz prawidłowy email</span>}
                    </label>
                    <label className="form_text">Hasło
                        <input name="password" ref={register({required: true, minLength: 6})} className="form_input"/>
                        {errors.password &&
                        <span style={{fontWeight: "bold", color: "red"}}>Hasło musi mieć przynajmniej 6 znaków</span>}
                    </label>
                </div>

                <div className=" form_buttons">
                    <Link to={"/rejestracja"} className="register_button">
                        <p className="content_link-register">Załóż konto</p>
                    </Link>
                    <button type="submit" className="login_button">Zaloguj się</button>
                </div>
            </form>
        </div>
    );
};

export default Login;