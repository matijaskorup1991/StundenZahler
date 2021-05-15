import React, { useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMonth } from '../redux/actions/months';
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

  const renderDays = month.length
    ? month.data.map((el) => {
        return (
          <tr>
            <td>{formatDate(el)}</td>
            <td>{el.hour}</td>
          </tr>
        );
      })
    : null;

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

  const exportPDF = () => {
    const unit = 'pt';
    const size = 'A4';
    const orientation = 'portrait';

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = user && user.username;
    const headers = [['DATUM', 'STUNDEN']];

    const data = month.length
      ? month.data.map((el) => [formatDate(el), el.hour])
      : null;

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save('report.pdf');
  };

  return (
    <div className='month'>
      <table>
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
            <td>50</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => exportPDF()}>DOWNLOAD</button>
    </div>
  );
};

export default Month;
