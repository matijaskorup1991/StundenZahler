import React from 'react';

const DaysTableData = ({ key, day, hour }) => {
  return (
    <>
      <tr key={key} className='days-to-save'>
        <td> {day}</td>
        <td> {hour}</td>
        <td>
          <div className='days-update'>UPDATE</div>
        </td>
        <td>
          <div className='days-delete'>DELETE</div>
        </td>
      </tr>
    </>
  );
};

export default DaysTableData;
