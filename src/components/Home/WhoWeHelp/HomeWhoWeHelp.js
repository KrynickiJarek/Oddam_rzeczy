import React, {useState} from 'react';
import "../../../scss/_homewhowehelp.scss";
import decoration from "../../../assets/Decoration.svg";

const HomeWhoWeHelp = () => {

    const [showFoundation, setShowFoundation] = useState("block");
    const [showOrganization, setShowOrganization] = useState("none");
    const [showLocal, setShowLocal] = useState("none");


    const handleClickFoundation = () => {
        setShowFoundation("block")
        setShowOrganization("none")
        setShowLocal("none")
    }

    const handleClickOrganization = () => {
        setShowFoundation("none")
        setShowOrganization("block")
        setShowLocal("none")
    }

    const handleClickLocal = () => {
        setShowFoundation("none")
        setShowOrganization("none")
        setShowLocal("block")
    }


    return (
        <div id="whoWeHelp" className="whoWeHelp_container">
            <div className="nav_container">
                <h2 className="nav_tittle">O nas</h2>
                <img src={decoration} alt="decoration" className=" nav_decoration"/>

                <div className="nav_buttons">
                    <p onClick={handleClickFoundation} className="nav_button">Fundacjom</p>
                    <p onClick={handleClickOrganization} className="nav_button">Organizacjom <br/>samorządowym</p>
                    <p onClick={handleClickLocal} className="nav_button">Lokalnym <br/> zbiórkom</p>
                </div>
            </div>
            <div className="content_container">
                <div style={{display: showFoundation, height: "100%"}}>
                    <p className="content_text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                        którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                </div>
                <div style={{display: showOrganization, height: "100%"}}>
                    <p className="content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation..</p>
                </div>
                <div style={{display: showLocal, height: "100%"}}>
                    <p className="content_text">Another Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation..</p>
                </div>


            </div>

        </div>

    );
};

export default HomeWhoWeHelp;