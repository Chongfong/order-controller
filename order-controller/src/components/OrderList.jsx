import React from "react";

const OrderList = ({ orders }) => {
  return (
    <div>
      <h2>Pending Orders</h2>
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
      <h2>Completed Orders</h2>
      <ul>
        {orders
          .filter((order) => order.status === "COMPLETE")
          .map((order) => (
            <li key={order.id}>
              {order.type} Order #{order.id}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OrderList;
