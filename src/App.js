import React, {useState, useEffect} from 'react';
import OrderForm from './components/OrderForm';
import './App.css';
import './styles/styles.css';
import OrderTable from './components/OrderTable';

const BASE_URL = "http://localhost:8000";

function App() {

  const [orders, setOrders] = useState([])
  const [orderItems, setOrderItems] = useState([])

  useEffect(async () => {
    const orderRes = await fetch(`${BASE_URL}/orders`)
    const data = await orderRes.json()
    setOrders(data.orders)


    const orderItemRes = await fetch(`${BASE_URL}/orderItems`)
    const itemsdata = await orderItemRes.json()
    setOrderItems(itemsdata.orderItems)
    
  }, [JSON.stringify(orders)])

  const addNewOrder = (newOrder) => {
    console.log("add new order: ", newOrder)
    setOrders([...orders, newOrder]) 
  }
  return (
    <div className="App">
      <header className="App-header">
        <OrderForm orderItems={orderItems} addNewOrder={addNewOrder}/>

        <br />

        <OrderTable orders={orders}/>
      </header>
    </div>
  );
}

export default App;
