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
    const doingBot = bots.at(-1);
    if (doingBot.order) {
      setOrders(
        [...orders].map((order) =>
          order.id === doingBot.order.id
            ? { ...order, status: "PENDING" }
            : order
        )
      );
    }
    const copiedBots = [...bots];
    setBots(copiedBots.slice(0, -1));
  };

  return (
    <>
      <button onClick={addBot}>+ Bot</button>
      <button onClick={removeBot}>- Bot</button>
    </>
  );
};

export default AddBot;
