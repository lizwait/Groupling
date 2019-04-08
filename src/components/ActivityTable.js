import React from 'react';

class ActivityTable extends React.Component {
    constructor(props) {
      super(props);
    }
    render() { 
        const {
            data
        } = this.props;
        const rows = data.map((data, index) =>
            <tr key={index}>
                <td key={data.activitiesActivity}>{data.activitiesActivity}</td>
            </tr>
        );

        return (
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
  }

export default ActivityTable;