import React from 'react';
import { connect } from 'react-redux';
import { TableRow } from '../../components';
import './InfoTable.css';

const InfoTable = ({ data }) => {
  const rows = data.map((video, index) => (
    <TableRow
      key={index}
      number={index + 1}
      title={video.title}
      url={video.url}
      date={video.date}
      img={video.img}
      chanTitle={video.channelTitle}
    />
  ));

  return (
    <table className="info-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Title</th>
          <th>Video URL</th>
          <th>Channel title</th>
          <th>Publication date</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(InfoTable);
