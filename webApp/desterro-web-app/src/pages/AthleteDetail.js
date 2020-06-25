import React from 'react';
import athleteInformation from './athlete-information';
import NotFoundPage from './NotFoundPage';
import Jumbotron from 'react-bootstrap/Jumbotron';

const AthleteDetailPage = ({match}) => {
    const name = match.params.name;
    const athlete = athleteInformation.find(athlete => athlete.name === name);
     if (!athlete) return <NotFoundPage/>;
    
    return (
    <React.Fragment>
        <Jumbotron>
            <h1>Athlete Detail Page</h1>
            <p>This is {athlete.name}</p>
            <p>He is {athlete.age} years old</p>
            <h3>Plays in {athlete.club}</h3>
        </Jumbotron>
    </React.Fragment>
    );
};

export default AthleteDetailPage;