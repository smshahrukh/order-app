import React from "react";
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
    console.log({ orders })

    return (
        <div>

            <h1> Orders </h1>
            <BootstrapTable keyField='id' data={ orders } columns={ columns } />
        </div>
    )

}

export default OrderTable;