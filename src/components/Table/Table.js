import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';
import './Table.css';

const Table = () => {
    const [info, setInfo] = useState([]);
    const [previousPageUrl, setPreviousPageUrl] = useState(null);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://swapi.dev/api/people");
    const [nextPageUrl, setNextPageUrl] = useState("");

    useEffect(() => {
        fetch(currentPageUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.results);
                setPreviousPageUrl(data.previous);
                setNextPageUrl(data.next);
                setInfo(data.results)
            })
    }, [currentPageUrl]);
    return (
        <div className='container'>
            <table>
                <tbody>
                    {info.map((i, index) => <Row key={index} info={i} />)}
                </tbody>
            </table>
             <button onClick= {() => setCurrentPageUrl(previousPageUrl)}>-</button><button onClick= {() => setCurrentPageUrl(nextPageUrl)}>+</button>
        </div>
    );
};

export default Table;