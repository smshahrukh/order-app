import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom"
import { Formik, Field } from "formik";

const BASE_URL = "http://localhost:8000";

function Admin() {

    const [orders, setOrders] = useState([])
    const isAdmin = localStorage.getItem('isAdmin')
    const history = useHistory()

    useEffect(() => {
        async function fetchData() {
            try {
                const ordersRes = await fetch(`${BASE_URL}/orders`)
                if (ordersRes && ordersRes.status !== 200) {
                    history.push('/login')
                } else {
                    const orders = await ordersRes.json()
                    setOrders(orders)
                }
            }
            catch (e) {
                history.push('/login')
            }
        }
        if (isAdmin) {
            fetchData()
        } else {
            history.push('/login')
        }
    }, [])

    return (
        <div>Admin</div>
    )


}

export default Admin;