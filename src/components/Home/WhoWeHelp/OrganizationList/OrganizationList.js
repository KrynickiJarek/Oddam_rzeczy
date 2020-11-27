import React, {useState} from 'react';
import {Link, Switch, Route} from "react-router-dom"
import "../../../../scss/_homewhowehelp.scss";
import OrganizationOne from "./OrganizationOne"
import OrganizationTwo from "./OrganizationTwo"
import OrganizationThree from "./OrganizationThree"

const OrganizationList = () => {

    const [pagination1, setPagination1] = useState("active");
    const [pagination2, setPagination2] = useState(null);
    const [pagination3, setPagination3] = useState(null);

    const handleClick1 = () => {
        setPagination1("active")
        setPagination2(null)
        setPagination3(null)
    }

    const handleClick2 = () => {
        setPagination1(null)
        setPagination2("active")
        setPagination3(null)
    }

    const handleClick3 = () => {
        setPagination1(null)
        setPagination2(null)
        setPagination3("active")
    }

    return (
        <>
                <Switch>
                    <Route exact path='/' component={OrganizationOne}/>
                    <Route path='/Organization1' component={OrganizationOne}/>
                    <Route path='/Organization2' component={OrganizationTwo}/>
                    <Route path='/Organization3' component={OrganizationThree}/>
                </Switch>

                <div className="pagination_buttons">
                    <Link to="/Organization1">
                        <button onClick={handleClick1} className={["pagination_button", pagination1].join(' ')}>1</button>
                    </Link>
                    <Link to='/Organization2'>
                        <button onClick={handleClick2} className={["pagination_button", pagination2].join(' ')}>2</button>
                    </Link>
                    <Link to='/Organization3'>
                        <button onClick={handleClick3} className={["pagination_button", pagination3].join(' ')}>3</button>
                    </Link>
                </div>
        </>
    );
};

export default OrganizationList;