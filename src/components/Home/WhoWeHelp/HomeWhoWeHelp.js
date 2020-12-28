import React, {useState} from 'react';
import "../../../scss/_homewhowehelp.scss";
import decoration from "../../../assets/Decoration.svg";
import {BrowserRouter} from 'react-router-dom'
import Organization from "./OrganizationList/Organization"
import Foundation from "./FoundationList/Foundation";

const HomeWhoWeHelp = () => {

    const [showFoundation, setShowFoundation] = useState("flex");
    const [showOrganization, setShowOrganization] = useState("none");
    const [showLocal, setShowLocal] = useState("none");
    const [foundationActive, setFoundationActive] = useState("active");
    const [organizationActive, setOrganizationActive] = useState(null);
    const [localActive, setLocalActive] = useState(null);


    const handleClickFoundation = () => {
        setShowFoundation("flex")
        setShowOrganization("none")
        setShowLocal("none")
        setFoundationActive("active")
        setOrganizationActive(null)
        setLocalActive(null)
    }

    const handleClickOrganization = () => {
        setShowFoundation("none")
        setShowOrganization("flex")
        setShowLocal("none")
        setFoundationActive(null)
        setOrganizationActive("active")
        setLocalActive(null)
    }

    const handleClickLocal = () => {
        setShowFoundation("none")
        setShowOrganization("none")
        setShowLocal("flex")
        setFoundationActive(null)
        setOrganizationActive(null)
        setLocalActive("active")
    }


    return (
        <div id="whoWeHelp" className="whoWeHelp_container">
            <div className="nav_container">
                <h2 className="nav_tittle">Komu pomagamy</h2>
                <img src={decoration} alt="decoration" className=" nav_decoration"/>

                <div className="nav_buttons">
                    <p onClick={handleClickFoundation}
                       className={["nav_button", foundationActive].join(' ')}>Fundacjom</p>
                    <p onClick={handleClickOrganization}
                       className={["nav_button", organizationActive].join(' ')}>Organizacjom <br/>pozarządowym</p>
                    <p onClick={handleClickLocal}
                       className={["nav_button", localActive].join(' ')}>Lokalnym <br/> zbiórkom</p>
                </div>
            </div>
            <div className="pagination_container">


                <div style={{display: showFoundation}} className="selected_container">
                    <p className="content_text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                        którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <BrowserRouter>
                        <Foundation/>
                    </BrowserRouter>
                </div>

                <div style={{display: showOrganization}} className="selected_container">
                    <p className="content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation..</p>
                    <BrowserRouter>
                        <Organization/>
                    </BrowserRouter>
                </div>

                <div style={{display: showLocal}} className="selected_container">
                    <p className="content_text">Another Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation..</p>

                    <div className="list_container">
                        <div className="element_container">
                            <div className="content_container">
                                <div className="header_container">
                                    <h2 className="header_container-head">Zbiórka “Lorem Ipsum 1”</h2>
                                    <p className="header_container-text">Quis varius quam quisque id diam vel quam
                                        elementum
                                        pulvinar.</p>
                                </div>
                                <p className="element_container-text">Egestas, sed, tempus</p>
                            </div>
                            <div className="element_container-line"/>
                        </div>
                        <div className="element_container">
                            <div className="content_container">
                                <div className="header_container">
                                    <h2 className="header_container-head">Zbiórka “Lorem Ipsum 2”</h2>
                                    <p className="header_container-text">Quis varius quam quisque id diam vel quam
                                        elementum
                                        pulvinar.</p>
                                </div>
                                <p className="element_container-text">Egestas, sed, tempus</p>
                            </div>
                            <div className="element_container-line"/>
                        </div>
                        <div className="element_container">
                            <div className="content_container">
                                <div className="header_container">
                                    <h2 className="header_container-head">Zbiórka “Lorem Ipsum 3”</h2>
                                    <p className="header_container-text">Quis varius quam quisque id diam vel quam
                                        elementum
                                        pulvinar.</p>
                                </div>
                                <p className="element_container-text">Egestas, sed, tempus</p>
                            </div>
                        </div>
                    </div>
                    <div className="pagination_buttons">
                        <div className="pagination_button"/>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default HomeWhoWeHelp;