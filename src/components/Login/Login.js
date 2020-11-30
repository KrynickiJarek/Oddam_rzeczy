import React from 'react';
import "../../scss/_login.scss";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {useForm} from "react-hook-form";
import decoration from "../../assets/Decoration.svg"

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
                    <HashLink to={"/"} className="navigation_link">Start</HashLink>
                    <HashLink to={"/#simpleSteps"} className="navigation_link">O co chodzi?</HashLink>
                    <HashLink to={"/#aboutUs"} className="navigation_link">O nas</HashLink>
                    <HashLink to={"/#whoWeHelp"} className="navigation_link">Fundacja i organizacja</HashLink>
                    <HashLink to={"/#contact"} className="navigation_link">Kontakt</HashLink>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form_container">
                <h2 className="content_tittle">Zaloguj się</h2>
                <img src={decoration} alt="decoration" className=" content_decoration"/>
                <div className="input_container">
                    <label className="form_text">Email
                        <input name="email"
                               ref={register({
                                   required: true,
                                   minLength: 3
                               }, {pattern: /^(([^<>()[\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i})}
                               className="form_input"
                               style={errors.email && {borderBottom: "1px solid red"}}/>
                        {errors.email &&
                        <span style={{fontWeight: "bold", color: "red"}}>Podany email jest nieprawidłowy!</span>}
                    </label>
                    <label className="form_text">Hasło
                        <input name="password"
                               type="password"s
                               ref={register({required: true, minLength: 6})}
                               className="form_input"
                               style={errors.password && {borderBottom: "1px solid red"}}/>
                        {errors.password &&
                        <span style={{fontWeight: "bold", color: "red"}}>Podane hasło jest za krótkie!</span>}
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