import React from 'react';

const DaysTable = ({ children }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>DATE:</td>
            <td>HOURS:</td>
          </tr>
        </thead>
        <tbody>{children}</tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
};

export default DaysTable;
