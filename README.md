# ecommerce-microfront

A mini project simulating an ecommerce in which the microfront architecture was used in order to practice said structure, in the project I do not use any framework simply in order to show the microfront structure in greater detail, when running the project a list will be displayed of product and a cart that indicates how many products have been added to the same

### Project Structure

- container => orchestrator between the MFs

- products => MF showing the list of available products

- shoppingCart => MF that shows the number of items that have been added to the shopping cart

### Main Technologies

- JavaScript
- Webpack 5
- Faker

### How to run the project

1. Go to each folder and run the command
   `npm install or yarn install`
2. Then run
   `yarn run dev or npm run dev` on each, leaving the last orchestrator (Container)

- If you go to localhost:8080 you will see the render of the orchestrator

- If you go to localhost:8081 you will see the render of the MF products showing the list of available products

- If you go to localhost:8082 you will see the rendering of shoppingCart MF showing the items that have been added to the shopping cart
