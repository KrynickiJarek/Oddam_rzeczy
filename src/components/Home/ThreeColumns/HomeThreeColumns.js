import React from 'react';
import "../../../scss/_homethreecolumns.scss";

const HomeThreeColumns = () => {

    return (

        <div id="threeColumns" className="threeColumns_container">
            <div className="threeColumns_container-content">
                <p className="threeColumns_container-number">10</p>
                <p className="threeColumns_container-title">ODDANYCH WORKÓW</p>
                <p className="threeColumns_container-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="threeColumns_container-content">
                <p className="threeColumns_container-number">5</p>
                <p className="threeColumns_container-title">WSPARTYCH ORGANIZACJI</p>
                <p className="threeColumns_container-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="threeColumns_container-content">
                <p className="threeColumns_container-number">7</p>
                <p className="threeColumns_container-title">ZORGANIZOWANYCH ZBIÓREK</p>
                <p className="threeColumns_container-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>

        </div>
    );
};

export default HomeThreeColumns;