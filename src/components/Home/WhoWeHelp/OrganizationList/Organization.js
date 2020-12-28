import React, {useState} from 'react';
import "../../../../scss/_homewhowehelp.scss";
import Pagination from "../Pagination/Pagination";


const Organization = () => {

    const organization = [
        {
            id: 1,
            name: "Organizacja “Lorem Ipsum 1”",
            purpose: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            need: "Egestas, sed, tempus",
        },
        {
            id: 2,
            name: "Organizacja “Lorem Ipsum 2”",
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            need: "Ut, aliquam, purus, sit, amet",
        },
        {
            id: 3,
            name: "Organizacja “Lorem Ipsum 3”",
            purpose: "Scelerisque in dictum non consectetur a erat nam.",
            need: "Mi, quis, hendrerit, dolor",
        },
        {
            id: 4,
            name: "Organizacja “Lorem Ipsum 4”",
            purpose: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            need: "Egestas, sed, tempus",
        },
        {
            id: 5,
            name: "Organizacja “Lorem Ipsum 5”",
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            need: "Ut, aliquam, purus, sit, amet",
        },
        {
            id: 6,
            name: "Organizacja “Lorem Ipsum 6”",
            purpose: "Scelerisque non consectetur a erat nam.",
            need: "Mi, quis, hendrerit, dolor",
        },
        {
            id: 7,
            name: "Organizacja “Lorem Ipsum 7”",
            purpose: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            need: "Egestas, sed, tempus",
        },
        {
            id: 8,
            name: "Organizacja “Lorem Ipsum 8”",
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            need: "Ut, aliquam, purus, sit, amet",
        },
        {
            id: 9,
            name: "Organizacja “Lorem Ipsum 9”",
            purpose: "Scelerisque in dictum a erat nam.",
            need: "Egestas, sed, tempus",
        }
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 3;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = organization.slice(indexOfFirstPost, indexOfLastPost)


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <>
            <div className="list_container">
                {currentPosts.map(organization => (
                    <div className="element_container">
                        <div key={organization.id} className="content_container">
                            <div className="header_container">
                                <h2 className="header_container-head">{organization.name}</h2>
                                <p className="header_container-text">{organization.purpose}</p>
                            </div>
                            <p className="content_container-text">{organization.need}</p>
                        </div>
                        {organization.id%postPerPage!==0 && <div className="element_container-line"/>}
                    </div>

                ))}
            </div>
            <Pagination postPerPage={postPerPage} totalPost={organization.length} paginate={paginate}
                        active={currentPage}/>
        </>

    );

};

export default Organization;