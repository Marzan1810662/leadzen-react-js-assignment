import React from 'react';
import './Pagination.css';

const Pagination = ({ setCurrentPageUrl,currentPageUrl, previousPageUrl, nextPageUrl, count,infoPerPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(count / infoPerPage); i++) {
        pageNumbers.push(i)
    }
    const paginate = (number) => {
        if(number === 1){
            setCurrentPageUrl("https://swapi.dev/api/people")
        }
        else{
            setCurrentPageUrl(`https://swapi.dev/api/people/?page=${number}`)
        }
    }
    return (
        <div className='pagination'>
            <button 
            onClick={() => previousPageUrl ?setCurrentPageUrl(previousPageUrl) : setCurrentPageUrl(currentPageUrl)}>‹</button>
            <ul>
                {pageNumbers.map(number =>
                    <li key={number}>
                        <button onClick={()=> paginate(number)} >{number}</button>
                    </li>)}
            </ul>
            <button onClick={() => nextPageUrl? setCurrentPageUrl(nextPageUrl) : setCurrentPageUrl(currentPageUrl)}>›</button>
        </div>
    );
};

export default Pagination;