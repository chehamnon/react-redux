import React, {PropTypes} from 'react';
import CompetencyData from './CompetencyData';

const CompetencyList = ({competencies}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Competency Name</th>
                <th>Previous Result</th>
                <th>Current Result</th>
                <th>Note</th>
                <th></th>
            </tr>                
            </thead>
            <tbody>
            {competencies.map(competency =>
                <CompetencyData key={competency.id} competency={competency} />
            )}
            </tbody>
        </table>
    );
};

CompetencyList.propTypes = {
	competencies: PropTypes.array.isRequired
};

export default CompetencyList;