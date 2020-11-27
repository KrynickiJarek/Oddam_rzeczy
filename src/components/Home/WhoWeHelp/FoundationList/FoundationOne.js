import React from 'react';
import "../../../../scss/_homewhowehelp.scss";

const FoundationOne = () => {

    return (
        <div className="list_container">
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Fundacja “Dbam o Zdrowie”</h2>
                    <p className="header_container-text">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                        życiowej.</p>
                </div>
                <p className="element_container-text">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
            </div>
            <div className="element_container-line"/>
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Fundacja “Dla dzieci”</h2>
                    <p className="header_container-text">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <p className="element_container-text">ubrania, meble, zabawki</p>
            </div>
            <div className="element_container-line"/>
            <div className="element_container">
                <div className="header_container">
                    <h2 className="header_container-head">Fundacja “Bez domu"</h2>
                    <p className="header_container-text">Cel i misja: Pomoc dla osób nie posiadających miejsca
                        zamieszkania.</p>
                </div>
                <p className="element_container-text">ubrania, jedzenie, ciepłe koce</p>
            </div>
        </div>
    );
};

export default FoundationOne;