import React, { useEffect, useCallback } from "react";

const BotController = ({ bots, orders, setOrders, setBots }) => {
  const processOrders = useCallback(() => {
    let tempOrders = [...orders];

    const updatedBots = bots.map((bot) => {
      if (
        bot.status === "IDLE" &&
        tempOrders.some((order) => order.status === "PENDING")
      ) {
        const nextOrder = tempOrders.find(
          (order) => order.status === "PENDING"
        );
        tempOrders = tempOrders.map((order) =>
          order.id === nextOrder.id ? { ...order, status: "DOING" } : order
        );
        setOrders(tempOrders);
        return { ...bot, status: "BUSY", order: nextOrder, timeLeft: 10 };
      } else if (bot.status === "BUSY") {
        if (bot.timeLeft > 1) {
          return { ...bot, timeLeft: bot.timeLeft - 1 };
        } else {
          tempOrders = tempOrders.map((order) =>
            order.id === bot.order.id ? { ...order, status: "COMPLETE" } : order
          );
          setOrders(tempOrders);
          return { ...bot, status: "IDLE", order: null, timeLeft: 0 };
        }
      }
      return bot;
    });

    setBots(updatedBots);
  }, [bots, orders, setBots, setOrders]);

  useEffect(() => {
    if (
      (orders.length > 0 &&
        orders.some((order) => order.status === "PENDING") &&
        bots.some((bot) => bot.status === "IDLE")) ||
      bots.some((bot) => bot.status === "BUSY")
    ) {
      const interval = setInterval(() => {
        processOrders();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [orders, bots, processOrders]);

  return (
    <div>
      <h2>Bots</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            Bot #{bot.id} - {bot.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotController;
