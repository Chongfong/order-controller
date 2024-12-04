import React, { useEffect, useCallback } from "react";

const BotController = ({ bots, orders, setOrders, setBots }) => {
  const updateOrderStatus = (orders, orderId, status) =>
    orders.map((order) =>
      order.id === orderId ? { ...order, status } : order
    );

  const processBots = useCallback(() => {
    let updatedOrders = [...orders];

    const updatedBots = bots.map((bot) => {
      if (bot.status === "IDLE") {
        const nextOrder = updatedOrders.find(
          (order) => order.status === "PENDING"
        );

        if (nextOrder) {
          updatedOrders = updateOrderStatus(
            updatedOrders,
            nextOrder.id,
            "DOING"
          );
          return { ...bot, status: "BUSY", order: nextOrder, timeLeft: 10 };
        }
      } else if (bot.status === "BUSY") {
        if (bot.timeLeft > 1) {
          return { ...bot, timeLeft: bot.timeLeft - 1 };
        } else {
          updatedOrders = updateOrderStatus(
            updatedOrders,
            bot.order.id,
            "COMPLETE"
          );
          return { ...bot, status: "IDLE", order: null, timeLeft: 0 };
        }
      }
      return bot;
    });

    setOrders(updatedOrders);
    setBots(updatedBots);
  }, [bots, orders, setOrders, setBots]);

  useEffect(() => {
    const hasPendingOrders = orders.some((order) => order.status === "PENDING");
    const hasBusyBots = bots.some((bot) => bot.status === "BUSY");
    const hasIdleBots = bots.some((bot) => bot.status === "IDLE");

    if ((orders.length > 0 && hasPendingOrders && hasIdleBots) || hasBusyBots) {
      const interval = setInterval(() => processBots(), 1000);
      return () => clearInterval(interval);
    }
  }, [orders, bots, processBots]);

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
