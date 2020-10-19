import React from 'react';
import { IContact } from './App';
import './InformationTable.css';

interface IInformationTable {
    list: Array<IContact>
}

interface IKeys { 
    first: string; 
    last: string, 
    phone: string 
}

function InformationTable({list}: IInformationTable) {

    const generateList = () => {
        return list.map((x: IKeys, index: number) => (
            <tr key={index}>
                <td>{x.first}</td>
                <td>{x.last}</td>
                <td>{x.phone}</td>
            </tr>
        ))
    }

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
            {generateList()}
        </tbody> 
        </table>
    );
}

export default InformationTable;