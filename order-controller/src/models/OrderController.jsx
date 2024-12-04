import React, { useState } from "react";

import AddOrder from "../components/AddOrder";
import OrderList from "../components/OrderList";
import AddBot from "../components/AddBot";
import BotController from "../components/BotController";
const OrderController = () => {
  const [orders, setOrders] = useState([]);
  const [bots, setBots] = useState([]);
  const [orderId, setOrderId] = useState(1);

  return (
    <div>
      <h1>Order Management System</h1>
      <AddOrder
        orderId={orderId}
        setOrderId={setOrderId}
        setOrders={setOrders}
      />
      <OrderList orders={orders} />
      <BotController
        bots={bots}
        orders={orders}
        setOrders={setOrders}
        setBots={setBots}
      />
      <AddBot
        bots={bots}
        orders={orders}
        setOrders={setOrders}
        setBots={setBots}
      />
    </div>
  );
};

export default OrderController;
