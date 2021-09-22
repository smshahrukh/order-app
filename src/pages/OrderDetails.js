import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import BootstrapTable from 'react-bootstrap-table-next';

import { Formik, Field } from "formik";

const BASE_URL = "http://localhost:8000";

function OrderDetails() {
    let { orderId } = useParams();
    const [order, setOrder] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const orderRes = await fetch(`${BASE_URL}/orders/${orderId}`)
            const order = await orderRes.json()
            setOrder(order)
        }
        fetchData()
    }, [orderId])

    const columns = [
        {
            dataField: 'id',
            text: 'Item ID'
          }, {
            dataField: 'name',
            text: 'Item Name'
          }
    ]


    return (
        <div>
            {order && <div>
                 <div>
                     <p><strong>Customer Name:</strong> {order.customerName}</p>
                     <p><strong>Phone Number:</strong> {order.phoneNum}</p>
                </div>

                <BootstrapTable keyField='id' data={ order.OrderItems } columns={ columns } />

            </div>}
        </div>
    )


}

export default OrderDetails;