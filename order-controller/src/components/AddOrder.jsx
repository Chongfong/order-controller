import React from "react";

const AddOrder = ({ orderId, setOrderId, setOrders }) => {
  const addOrder = (type) => {
    const newOrder = { id: orderId, type, status: "PENDING" };
    setOrderId(orderId + 1);
    setOrders((prevOrders) => {
      if (type === "VIP") {
        const normalOrdersIndex = prevOrders.findIndex(
          (order) => order.type === "Normal"
        );
        if (normalOrdersIndex === -1) {
          return [...prevOrders, newOrder];
        } else {
          return [
            ...prevOrders.slice(0, normalOrdersIndex),
            newOrder,
            ...prevOrders.slice(normalOrdersIndex),
          ];
        }
      } else {
        return [...prevOrders, newOrder];
      }
    });
  };

  return (
    <>
      <button onClick={() => addOrder("Normal")}>New Normal Order</button>
      <button onClick={() => addOrder("VIP")}>New VIP Order</button>
    </>
  );
};

export default AddOrder;
