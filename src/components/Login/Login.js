import React from 'react';
import "../../scss/_login.scss";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import decoration from "../../assets/Decoration.svg"

const Login = () => {

    return (
        <div className="login_container">
            <div className="top_menu">
                <div className="user_menu">
                    <Link to={"/logowanie"} className="user_link"><p className="user_menu-logIn">Zaloguj</p></Link>
                    <Link to={"/rejestracja"} className="user_link"><p className="user_menu-register">Załóż konto</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;