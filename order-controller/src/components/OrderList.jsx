import React from "react";

const OrderList = ({ orders }) => {
  const PendingOrders = () => (
    <ul>
      {orders
        .filter(
          (order) => order.status === "PENDING" || order.status === "DOING"
        )
        .map((order) => (
          <li key={order.id}>
            {order.type} Order #{order.id}
          </li>
        ))}
    </ul>
  );

  const CompletedOrders = () => (
    <ul>
      {orders
        .filter((order) => order.status === "COMPLETE")
        .map((order) => (
          <li key={order.id}>
            {order.type} Order #{order.id}
          </li>
        ))}
    </ul>
  );
  return (
    <div>
      <h2>Pending Orders</h2>
      <PendingOrders />
      <h2>Completed Orders</h2>
      <CompletedOrders />
    </div>
  );
};

export default OrderList;
