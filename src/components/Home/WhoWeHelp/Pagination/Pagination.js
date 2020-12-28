import React from 'react';
import "../../../../scss/_homewhowehelp.scss";
// import {Link} from "react-router-dom";

const Pagination = ({postPerPage, totalPost, paginate, active}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <div className="pagination_buttons">
            {pageNumbers.map(page => (
                <button key={page} onClick={() => paginate(page)}
                        className={["pagination_button", page===active?"active":null].join(' ')}>
                    {page}
                </button>
            ))}

        </div>
    );
};

export default Pagination;