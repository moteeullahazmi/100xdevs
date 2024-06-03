fetch('https://api.example.com/data')
  .then(response => response.json()) // Parse JSON if fetch successful
  .then(data => console.log(data))    // Handle the parsed data
  .catch(error => console.error('Error:', error)); // Handle any errors
