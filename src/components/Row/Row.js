import React from 'react';
import './Row.css';

const Row = ({ info }) => {
    return (
        <tr className='row'>
            <td>{info.name}</td>
            <td><strong> Height <br /> </strong>{info.height}</td>
            <td><strong>Mass </strong> <br />{info.mass}</td>
            <td><strong> Hair Color</strong> <br /> {info.hair_color}</td>
            <td><strong> Skin Color </strong> <br />{info.skin_color}</td>
            <td><strong> Eye Color </strong> <br />{info.eye_color}</td>
            <td><strong> Birth Year </strong> <br />{info.birth_year}</td>
            <td><strong> Gender </strong><br />{info.gender}</td>
            <td><button>View Details</button></td>
        </tr>
    );
};

export default Row;