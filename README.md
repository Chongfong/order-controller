### Situation
McDonald is transforming their business during COVID-19. They wish to build the automated cooking bots to reduce workforce and increase their efficiency. As one of the software engineer in the project. You task is to create an order controller which handle the order control flow. 

### User Story
As below is part of the user story:
1. As McDonald's normal customer, after I submitted my order, I wish to see my order flow into "PENDING" area. After the cooking bot process my order, I want to see it flow into to "COMPLETE" area.
2. As McDonald's VIP member, after I submitted my order, I want my order being process first before all order by normal customer.  However if there's existing order from VIP member, my order should queue behind his/her order.
3. As McDonald's manager, I want to increase or decrease number of cooking bot available in my restaurant. When I increase a bot, it should immediately process any pending order. When I decrease a bot, the processing order should remain un-process.
4. As McDonald bot, it can only pickup and process 1 order at a time, each order required 10 seconds to complete process.

### Requirements
1. When "New Normal Order" clicked, a new order should show up "PENDING" Area.
2. When "New VIP Order" clicked, a new order should show up in "PENDING" Area. It should place in-front of all existing "Normal" order but behind of all existing "VIP" order.
3. The order number should be unique and increasing.
4. When "+ Bot" clicked, a bot should be created and start processing the order inside "PENDING" area. after 10 seconds picking up the order, the order should move to "COMPLETE" area. Then the bot should start processing another order if there is any left in "PENDING" area.
5. If there is no more order in the "PENDING" area, the bot should become IDLE until a new order come in.
6. When "- Bot" clicked, the newest bot should be destroyed. If the bot is processing an order, it should also stop the process. The order now back to "PENDING" and ready to process by other bot.
7. No data persistance is needed for this prototype, you may perform all the process inside memory.

### Techniques

- Front-End Fundamental
  - HTML / CSS / JavaScript
- Frameworks & Library
  - React (Hooks)
- Others
  - Version Control: Git / GitHub
 
### Tech Note

1. Control orders by each bot
2. Check the status of each bot every second (with interval)
3. Keep the PENDING and DOING orders on display

### Components

| Components  | Description |
| ----- | -------- |
| AddBot | handle adding and removing bots |
| AddOrder | handle adding new orders |
| BotController | handle the processing of orders by the bots |
| OrderList | display the pending and complete orders |
| OrderController | manage the state and integrate the other components |


### Quick Start

1. Copy the content of root folder to your project folder.
2. Run the cmd: `npm install` or `npm i`.
3. Run the cmd: `npm run start`.
