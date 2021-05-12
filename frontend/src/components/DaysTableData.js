import React from 'react';

const DaysTableData = ({ keyId, day, hour, deleteHandler }) => {
  return (
    <>
      <tr key={keyId} className='days-to-save'>
        <td> {day}</td>
        <td> {hour}</td>
        <td>
          <div className='days-update'>UPDATE</div>
        </td>
        <td>
          <div onClick={deleteHandler} className='days-delete'>
            DELETE
          </div>
        </td>
      </tr>
    </>
  );
};

export default DaysTableData;
