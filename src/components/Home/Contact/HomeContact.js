import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import "../../../scss/_homecontact.scss";
import decoration from "../../../assets/Decoration.svg";
import iconFacebook from "../../../assets/Facebook.svg";
import iconInstagram from "../../../assets/Instagram.svg";

const HomeContact = () => {

    const {register, handleSubmit, errors} = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";
        fetch(`${API}`, {
            method: "POST"
            ,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
        setSuccess(true);
    }


    return (
        <div id="contact" className="contact_container">
            <div className="contact_background">
                <div className="contact_content">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <h2 className="content_header">Skontaktuj się z nami</h2>
                        <img src={decoration} alt="decoration" className=" content_decoration"/>
                        {success === true ?
                            <h2 className="success_message">Wiadomość została wysłana.<br/> Wkrótce się
                                skontaktujemy!
                            </h2> : null}
                        <div className="input_container">
                            <label className="input_label">
                                <p className="form_text">Wpisz swoje imię</p>
                                <input name="name" ref={register({required: true, minLength: 3})}
                                       className="form_input"
                                       style={errors.name && {borderBottom: "1px solid red"}}
                                       placeholder="Janusz"/>
                                {errors.name &&
                                <span style={{fontWeight: "bold", color: "red"}}>Imię jest za krótkie</span>}
                            </label>
                            <label className="input_label">
                                <p className="form_text">Wpisz swój email</p>
                                <input name="email"
                                       ref={register({
                                           required: true,
                                           minLength: 3,
                                           pattern: /^(([^<>()[\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i})}
                                       className="form_input"
                                       style={errors.email && {borderBottom: "1px solid red"}}
                                       placeholder="abc@xyz.pl"/>
                                {errors.email &&
                                <span style={{fontWeight: "bold", color: "red"}}>Wpisz prawidłowy email</span>}
                            </label>
                        </div>
                        <div className="textarea_container">
                            <label>
                                <p className="form_text">Wpisz treść wiadomości</p>
                                <textarea name="message" ref={register({required: true, minLength: 120})}
                                          className="form_textarea" rows="4"
                                          style={errors.message && {borderBottom: "1px solid red"}}
                                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                                {errors.message &&
                                <span style={{fontWeight: "bold", color: "red"}}>Wiadomość musi mieć co najmniej 120 znaków</span>}
                            </label>
                        </div>
                        <button type="submit" className="form_button">Wyślij</button>
                    </form>

                    <footer className="footer_container">
                        <p className="footer_text">Copyright by Coders Lab</p>
                        <div className="icon_container">
                            <img src={iconFacebook} alt="decoration" className="footer_icon"/>
                            <img src={iconInstagram} alt="decoration" className="footer_icon"/>,
                        </div>
                    </footer>
                </div>
            </div>
        </div>


    );
};

export default HomeContact;