const axios = require('axios');

// Function to fetch data from an API
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Example usage
fetchData()
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
