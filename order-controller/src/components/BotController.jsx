import React from "react";

const BotController = ({ bots }) => {
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
