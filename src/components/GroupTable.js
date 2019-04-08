import React from 'react';

class GroupTable extends React.Component {
    constructor(props) {
      super(props);
    }
    render() { 
        const {
            data
        } = this.props;
        const rows = data.map((data, index) =>
            <tr key={index}>
                <td key={data.groupName}>{data.groupName}</td>
                <td key={data.groupSocial}>{data.groupSocial}</td>
                <td key={data.groupContact}>{data.groupContact}</td>
                <td key={data.groupFlightArrival}>{data.groupFlightArrival}</td>
                <td key={data.groupFlightDeparture}>{data.groupFlightDeparture}</td>
                <td key={data.groupNotes}>{data.groupNotes}</td>
            </tr>
        );

        return (
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Social</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Flight Arrival</th>
                        <th scope="col">Flight Departure</th>
                        <th scope="col">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
  }

export default GroupTable;