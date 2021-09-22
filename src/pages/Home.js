import React, {useState, useEffect} from 'react';
import OrderForm from '../components/OrderForm';
import '../styles/styles.css';
import OrderTable from '../components/OrderTable';

const BASE_URL = "http://localhost:8000";

function Home() {

  const [orders, setOrders] = useState([])
  const [orderItems, setOrderItems] = useState([])

  useEffect(() => {
    async function fetchData() {
      const orderRes = await fetch(`${BASE_URL}/orders`)
      const data = await orderRes.json()
      setOrders(data.orders)
  
  
      const orderItemRes = await fetch(`${BASE_URL}/orderItems`)
      const itemsdata = await orderItemRes.json()
      setOrderItems(itemsdata.orderItems)
    }
    fetchData();
    
  }, [JSON.stringify(orders)])

  const addNewOrder = (newOrder) => {
    setOrders([...orders, newOrder]) 
  }
  return (
    <div>
        <OrderForm orderItems={orderItems} addNewOrder={addNewOrder}/>
        <br />
        <OrderTable orders={orders}/>
    </div>
  );
}

export default Home;
