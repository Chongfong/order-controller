import React from "react";

const AddBot = ({ setOrders, setBots, bots, orders }) => {
  const addBot = () => {
    const newBot = {
      id: bots.length + 1,
      status: "IDLE",
      order: null,
      timeLeft: 0,
    };
    const updatedBots = [...bots, newBot];
    setBots(updatedBots);
  };

  const removeBot = () => {
    const doing = bots.at(-1).order;
    setOrders(
      [...orders].map((order) =>
        order.id === doing.id ? { ...order, status: "PENDING" } : order
      )
    );
    setBots((prevBots) => prevBots.slice(0, -1));
  };

  return (
    <>
      <button onClick={addBot}>+ Bot</button>
      <button onClick={removeBot}>- Bot</button>
    </>
  );
};

export default AddBot;
