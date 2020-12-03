import React, {useState} from 'react';
import "../../../../scss/_homewhowehelp.scss";
import Pagination from "../Pagination/Pagination";


const Foundation = () => {

    const foundations = [
        {
            id: 1,
            name: "Fundacja “Dbam o Zdrowie”",
            purpose: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            id: 2,
            name: "Fundacja “Dla dzieci”",
            purpose: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            need: "ubrania, meble, zabawki"
        },
        {
            id: 3,
            name: "Fundacja “Bez domu”",
            purpose: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            need: "ubrania, jedzenie, ciepłe koce"
        },
        {
            id: 4,
            name: "Fundacja “Dbam o Konie”",
            purpose: "Cel i misja: Pomoc koniom znajdującym się w trudnej sytuacji życiowej.",
            need: "ubrania, jedzenie, sprzęt AGD, meble"
        },
        {
            id: 5,
            name: "Fundacja “Dla Pandy”",
            purpose: "Cel i misja: Pomoc pandom z ubogich rodzin.",
            need: "ubrania, meble, zabawki"
        },
        {
            id: 6,
            name: "Fundacja “Bez Samochodu”",
            purpose: "Cel i misja: Pomoc dla osób nie posiadających samochodu.",
            need: "kierownica, fotele, ciepłe koce",
        }
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 3;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = foundations.slice(indexOfFirstPost, indexOfLastPost)


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <>
            <div className="list_container">
                {currentPosts.map(foundation => (
                    <div className="element_container">
                        <div key={foundation.id} className="content_container">
                            <div className="header_container">
                                <h2 className="header_container-head">{foundation.name}</h2>
                                <p className="header_container-text">{foundation.purpose}</p>
                            </div>
                            <p className="content_container-text">{foundation.need}</p>
                        </div>
                        <div className="element_container-line"/>
                    </div>

                ))}
            </div>
            <Pagination postPerPage={postPerPage} totalPost={foundations.length} paginate={paginate}
                        active={currentPage}/>
        </>

    );
};

export default Foundation;