import React, { useState } from "react";

import AddOrder from "../components/AddOrder";
import OrderList from "../components/OrderList";
import BotManager from "../components/BotManager";
const OrderController = (props) => {
  const [orders, setOrders] = useState([]);
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
      <BotManager />
    </div>
  );
};

export default OrderController;
