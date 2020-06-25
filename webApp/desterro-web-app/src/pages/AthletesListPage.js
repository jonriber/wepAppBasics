import React from 'react';
import athleteInformation from './athlete-information';
import AthletesList from '../components/AthletesList'
import Jumbotron from 'react-bootstrap/Jumbotron';


const AthletesListPage = () => (
    <React.Fragment>
        <Jumbotron>
            <div>
                <h1>This is our registered Athletes:</h1>
                <AthletesList athletes={athleteInformation} />
            </div>
        </Jumbotron>
        
    </React.Fragment>
);

export default AthletesListPage;