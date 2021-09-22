import React from "react";
import { useHistory } from "react-router-dom";

import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'id',
  text: 'Order ID'
}, {
  dataField: 'customerName',
  text: 'Customer Name'
}, {
  dataField: 'status',
  text: 'Status'
}];

const OrderTable = ({ orders }) => {
    const history = useHistory()
    const options = {
        onClick: function(e, row, rowIndex){
            const rowId = row.id;
            console.log({ rowId })
            history.push(`/${rowId}`);

        }
    }
    return (
        <div>

            <h1> Orders </h1>
            <BootstrapTable keyField='id' data={ orders } columns={ columns } rowEvents={options} />
        </div>
    )

}

export default OrderTable;