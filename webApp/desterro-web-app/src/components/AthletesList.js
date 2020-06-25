import React from "react";
import {Link} from 'react-router-dom';

const AthletesList = ({athletes}) => (
    <>
    {athletes.map((athletes,key) =>(
        <Link key= {key} to={`/athlete-detail/${athletes.name}`} >
            <h3>{athletes.name}</h3>
            <p>Club: {athletes.club}</p>
        </Link>
        
    ))}
    </>
);

export default AthletesList;