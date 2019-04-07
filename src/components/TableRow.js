import React from 'react';

class TableRow extends React.Component {
    render() {
      const {
        data
      } = this.props;
      const row = data.map((data) =>
      <tr>
          <td key={data.groupName}>{data.groupName}</td>
          <td key={data.groupSocial}>{data.groupSocial}</td>
          <td key={data.groupContact}>{data.groupContact}</td>
          <td key={data.groupFlightArrival}>{data.groupFlightArrival}</td>
          <td key={data.groupFlightDeparture}>{data.groupFlightDeparture}</td>
          <td key={data.groupFlightDeparture}>{data.groupFlightDeparture}</td>
      </tr>
      );
      return (
        <span>{row}</span>
      );
    }
  }

  export default TableRow;