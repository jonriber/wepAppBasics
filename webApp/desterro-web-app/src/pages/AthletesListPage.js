import React from 'react';
// import athleteInformation from './athlete-information';
// import AthletesList from '../components/AthletesList'
// import Jumbotron from 'react-bootstrap/Jumbotron';
import DataTable from '../components/DataTable';


const AthletesListPage = () => (
    <React.Fragment>
            <div>
                <h1>This is our registered Athletes:</h1>
                {/* <AthletesList athletes={athleteInformation} /> */}
                <DataTable/>
            </div>
        
    </React.Fragment>
);

export default AthletesListPage;