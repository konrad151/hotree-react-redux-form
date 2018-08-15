import React from 'react';

export const EmployesSelectField = ({ employesId, employesName, employesLastName }) => {
    return (
        <option value={employesId} key={employesLastName}>
            {employesName} {employesLastName}
        </option>
    );
};