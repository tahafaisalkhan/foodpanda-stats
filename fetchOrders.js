const axios = require('axios');

const apiUrl = 'https://pk.fd-api.com/api/v5/orders/order_history?include=order_products,order_details&limit=10000'; // increase limit to fetch all orders
const headers = {
  'accept': 'application/json, text/plain, */*',
  'accept-language': 'en-US,en;q=0.9',
  'authorization': 'Bearer JWT_Token', // add token here
  'x-fp-api-key': 'volo',
  'x-pd-language-id': '1'
};

async function fetchAllOrders() 
{
  let totalSpent = 0;
  let nextPageUrl = apiUrl;
  let allOrders = [];

  try 
  {
    while (nextPageUrl) 
      {
        const response = await axios.get(nextPageUrl, { headers });
        const { items, paging } = response.data.data;

        allOrders = allOrders.concat(items);

        totalSpent += items.reduce((prev, curr) => {
          if (curr.decline_reason)
            {
                return prev;
            }
          return prev + curr.total_value;
        }, 0);

        if (paging && paging.next) 
          {
          nextPageUrl = paging.next;
        } 
        else 
        {
          nextPageUrl = null;
        }
    }

    console.log(`Total money spent on Foodpanda: ${totalSpent}`);
    console.log(`Total number of orders retrieved: ${allOrders.length}`);
  } 
  catch (error) {

    console.error('Error fetching orders:', error.message);
  }
}

fetchAllOrders();
