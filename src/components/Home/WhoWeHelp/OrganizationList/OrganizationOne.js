import React from 'react';
import "../../../../scss/_homewhowehelp.scss";

const OrganizationOne = () => {

    return (
        <div className="list_container">
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Organizacja “Lorem Ipsum 1"</h2>
                    <p className="header_container-text">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                </div>
                <p className="element_container-text">Egestas, sed, tempus</p>
            </div>
            <div className="element_container-line"/>
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Organizacja “Lorem Ipsum 2”</h2>
                    <p className="header_container-text">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                </div>
                <p className="element_container-text">Ut, aliquam, purus, sit, amet</p>
            </div>
            <div className="element_container-line"/>
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Organizacja “Lorem Ipsum 3"</h2>
                    <p className="header_container-text">Scelerisque in dictum non consectetur a erat nam.</p>
                </div>
                <p className="element_container-text">Mi, quis, hendrerit, dolor</p>
            </div>
        </div>
    );
};

export default OrganizationOne;