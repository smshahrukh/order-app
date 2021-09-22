import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"
import BootstrapTable from 'react-bootstrap-table-next';


const BASE_URL = "http://localhost:8000";

function OrderDetails() {
    let { orderId } = useParams();
    const [order, setOrder] = useState(null)
    const history = useHistory()

    useEffect(() => {
        async function fetchData() {
            try {
                const orderRes = await fetch(`${BASE_URL}/orders/${orderId}`)
                if (orderRes && orderRes.status !== 200) {
                    history.push('/')
                } else {
                    const order = await orderRes.json()
                    setOrder(order)
                }
            }
            catch (e) {
                history.push('/')
            }
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
                    <p><strong>Status:</strong> {order.status}</p>
                </div>

                {order.OrderItems && order.OrderItems.length > 0 &&

                    < BootstrapTable keyField='id' data={order.OrderItems} columns={columns} />
                }

            </div>}
        </div>
    )


}

export default OrderDetails;