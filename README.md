# Foodpanda Total Spent

This project contains a script that fetches all orders from the Foodpanda API, handles pagination, and calculates the total money spent on non-declined orders.

## Features

- Fetches all orders from the Foodpanda API, beyond any pagination limits
- Automatically handles pagination, retrieving all available orders
- Calculates the total money spent on non-declined orders
- Outputs the total number of orders retrieved and the total money spent

## Prerequisites

Before running the script, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (Version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager, typically installed with Node.js)

## Setup

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/foodpanda-order-fetcher.git
cd foodpanda-order-fetcher
```

### 2. Install Dependencies

Install the required dependencies by running the following command in your terminal:

```bash
npm install
```

This will install the `axios` package, which is used for making HTTP requests.

### 3. Configure the Script

You need to provide your Foodpanda API token in the script. Open `fetchOrders.js` and replace `JWT_Token` with your actual JWT token:

```javascript
const headers = {
  'accept': 'application/json, text/plain, */*',
  'accept-language': 'en-US,en;q=0.9',
  'authorization': 'Bearer JWT_Token', // Replace with your token
  'x-fp-api-key': 'volo',
  'x-pd-language-id': '1'
};
```

### 4. Run the Script

Once everything is set up, run the script using Node.js:

```bash
node fetchOrders.js
```

## Example Output

After running the script, you should see something like:

```
Total money spent on Foodpanda: 15000
Total number of orders retrieved: 120
```

## Error Handling

If the script encounters any issues with the API request, you will see an error message like this:

```
Error fetching orders: Request failed with status code 401
```

Make sure that your API token is valid and that your request headers are correct.

