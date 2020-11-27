import React, {useState} from 'react';
import {Link, Switch, Route} from "react-router-dom"
import "../../../../scss/_homewhowehelp.scss";
import FoundationOne from "./FoundationOne"
import FoundationTwo from "./FoundationTwo"

const FoundationList = () => {

    const [pagination1, setPagination1] = useState("active");
    const [pagination2, setPagination2] = useState(null);

    const handleClick1 = () => {
        setPagination1("active")
        setPagination2(null)
    }

    const handleClick2 = () => {
        setPagination1(null)
        setPagination2("active")
    }



    return (
        <>
                <Switch>
                    <Route exact path='/' component={FoundationOne}/>
                    <Route path='/Foundation1' component={FoundationOne}/>
                    <Route path='/Foundation2' component={FoundationTwo}/>
                </Switch>

                <div className="pagination_buttons">
                    <Link to="/Foundation1">
                        <button onClick={handleClick1} className={["pagination_button", pagination1].join(' ')}>1</button>
                    </Link>
                    <Link to='/Foundation2'>
                        <button onClick={handleClick2} className={["pagination_button", pagination2].join(' ')}>2</button>
                    </Link>
                </div>
        </>
    );
};

export default FoundationList;