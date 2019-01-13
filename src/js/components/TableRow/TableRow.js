import React from 'react';
import './TableRow.css';

const TableRow = ({ number, title, url, date, img, chanTitle }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{title}</td>
      <td>{url}</td>
      <td>{chanTitle}</td>
      <td>{date}</td>
      <td>
        <img src={img} alt={title} />
      </td>
    </tr>
  );
};

export default TableRow;
