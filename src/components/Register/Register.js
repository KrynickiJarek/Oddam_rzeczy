import React from 'react';
import "../../scss/_login.scss";
import "../../scss/_register.scss";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import decoration from "../../assets/Decoration.svg"

const Register = () => {
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
                    <Link to={"/"} className="navigation_link">Start</Link>
                    <Link to={"/#simpleSteps"} className="navigation_link">O co chodzi?</Link>
                    <Link to={"/#aboutUs"} className="navigation_link">O nas</Link>
                    <Link to={"/#whoWeHelp"} className="navigation_link">Fundacja i organizacja</Link>
                    {/*<Link to={"/#contact"} className="navigation_link">Kontakt</Link>*/}
                    <Link to={"/${contact}"} className="navigation_link">Kontakt</Link>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="registerForm_container">
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
                               type="password"
                               ref={register({required: true, minLength: 6})}
                               className="form_input"
                               style={errors.password && {borderBottom: "1px solid red"}}/>
                        {errors.password &&
                        <span style={{fontWeight: "bold", color: "red"}}>Podane hasło jest za krótkie!</span>}
                    </label>
                    <label className="form_text">Powtórz hasło
                        <input name="password2"
                               type="password"
                               ref={register({
                                   required: true,
                                   minLength: 6,
                                   validate: value => value === watch("password")})}
                               className="form_input"
                               style={errors.password2 && {borderBottom: "1px solid red"}}/>
                        {errors.password2 &&
                        <span style={{fontWeight: "bold", color: "red"}}>Hasła muszą być takie same!</span>}
                    </label>
                </div>

                <div className=" form_buttons">
                    <Link to={"/logowanie"} className="register_button">
                        <p className="content_link-register">Zaloguj się</p>
                    </Link>
                    <button type="submit" className="login_button">Załóż konto</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
