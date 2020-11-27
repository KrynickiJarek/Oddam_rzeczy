import React from 'react';
import "../../../../scss/_homewhowehelp.scss";

const FoundationTwo = () => {

    return (
        <div className="list_container">
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Fundacja “Dbam o Konie”</h2>
                    <p className="header_container-text">Cel i misja: Pomoc koniom znajdującym się w trudnej sytuacji życiowej.</p>
                </div>
                <p className="element_container-text">ubrania, jedzenie, sprzęt AGD, meble</p>
            </div>
            <div className="element_container-line"/>
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Fundacja “Dla Pandy”</h2>
                    <p className="header_container-text">Cel i misja: Pomoc pandom z ubogich rodzin.</p>
                </div>
                <p className="element_container-text">ubrania, meble, zabawki</p>
            </div>
            <div className="element_container-line"/>
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Fundacja “Bez Samochodu”</h2>
                    <p className="header_container-text">Cel i misja: Pomoc dla osób nie posiadających samochodu.</p>
                </div>
                <p className="element_container-text">kierownica, fotele, ciepłe koce</p>
            </div>
        </div>
    );
};

export default FoundationTwo;