const { ELEMENT_QUERY } = require("./queries");


async function elementInfo() {
    try {
      // Use the Apollo Client to send the GraphQL query
      const { data } = await client.query({
        query: ELEMENT_QUERY,
      });
  
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  