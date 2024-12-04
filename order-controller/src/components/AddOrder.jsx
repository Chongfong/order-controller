import React from "react";

const AddOrder = ({ orderId, setOrderId, setOrders }) => {
  const createNewOrder = (type) => ({
    id: orderId,
    type,
    status: "PENDING",
  });

  const addOrderToList = (orders, newOrder) => {
    if (newOrder.type === "VIP") {
      const normalOrdersIndex = orders.findIndex(
        (order) => order.type === "Normal"
      );
      if (normalOrdersIndex === -1) {
        return [...orders, newOrder];
      }
      return [
        ...orders.slice(0, normalOrdersIndex),
        newOrder,
        ...orders.slice(normalOrdersIndex),
      ];
    }
    return [...orders, newOrder];
  };

  const addOrder = (type) => {
    const newOrder = createNewOrder(type);
    setOrderId(orderId + 1);
    setOrders((prevOrders) => addOrderToList(prevOrders, newOrder));
  };

  return (
    <>
      <button onClick={() => addOrder("Normal")}>New Normal Order</button>
      <button onClick={() => addOrder("VIP")}>New VIP Order</button>
    </>
  );
};

export default AddOrder;
