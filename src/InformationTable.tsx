import React from 'react';
import './InformationTable.css';

function InformationTable() {
    return (
        <table className='table'>
        <thead> 
            <tr>
                <th className='table-cell'>First name</th>
                <th className='table-cell'>Last name</th>
                <th className='table-cell'>Phone</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>data one</td>
                <td>data two</td>
                <td>data three</td>
            </tr>
        </tbody> 
        </table>
    );
}

export default InformationTable;