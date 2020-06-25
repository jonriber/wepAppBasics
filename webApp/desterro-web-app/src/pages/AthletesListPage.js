import React from 'react';
import athleteInformation from './athlete-information';
import AthletesList from '../components/AthletesList'


const AthletesListPage = () => (
    <React.Fragment>
        <div>
            <h1>This is our registered AthletesListPage List:</h1>
            <AthletesList athletes={athleteInformation} />
        </div>
    </React.Fragment>
);

export default AthletesListPage;