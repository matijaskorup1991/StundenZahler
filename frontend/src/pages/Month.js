import React, { useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useDispatch, useSelector } from 'react-redux';
import { getMonth } from '../redux/actions/months';
import Loader from '../components/Loader';
import '../styles/month.scss';

const Month = ({ match }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.monthsReducer);
  const userData = useSelector((state) => state.userReducer);
  const { month } = data;
  const { user } = userData;
  console.log(user.username);
  console.log(month);
  useEffect(() => {
    dispatch(getMonth(match.params.id));
  }, []);
  const formatDate = (el) => {
    return new Date(el.day).toISOString().split('T')[0];
  };

  const renderDays = month ? (
    month.data.map((el) => {
      return (
        <tr key={el.id}>
          <td>{formatDate(el)}</td>
          <td>{el.hour}</td>
        </tr>
      );
    })
  ) : (
    <Loader />
  );

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const gesamteStunden = month
    ? month.data.reduce((a, b) => a + b.hour, 0)
    : null;

  const downloadProgres = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#hours-table' });
    doc.save('table.pdf');
  };

  return (
    <div className='month'>
      <table id='hours-table'>
        <thead>
          <tr>
            <th>{user ? user.username : 'Neradi'}</th>
            <th>
              Monat:{' '}
              {month ? months[new Date(month.created_at).getMonth()] : null}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Datum</td>
            <td>Stunden</td>
          </tr>
          {renderDays}
          <tr>
            <td>GESAMTE STUNDEN:</td>
            <td>{gesamteStunden}</td>
          </tr>
        </tbody>
      </table>
      <div className='download-button'>
        <button onClick={() => downloadProgres()}>DOWNLOAD</button>
      </div>
    </div>
  );
};

export default Month;
