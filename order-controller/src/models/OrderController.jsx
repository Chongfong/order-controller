import React from "react";

import AddOrder from "../components/AddOrder";
import OrderList from "../components/OrderList";
import BotManager from "../components/BotManager";
const OrderController = (props) => {
  return (
    <div>
      <h1>Order Management System</h1>
      <AddOrder />
      <OrderList />
      <BotManager />
    </div>
  );
};

export default OrderController;
