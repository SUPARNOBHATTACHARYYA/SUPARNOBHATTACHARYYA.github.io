// This function will run once the entire page is loaded
window.addEventListener('load', function() {
  
  // The API URL to get your public count data.
  const apiUrl = 'https://suparnob.goatcounter.com/counter/.json';

  // Use the 'fetch' API to get the data from the URL
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const countElement = document.getElementById('visitor-count');
      if (countElement) {
        // Update the element's text with the unique visitor count
        countElement.textContent = data.count_unique;
      }
    })
    .catch(err => {
      // If something goes wrong, log the error and update the text
      console.error('Could not fetch visitor count:', err);
      const countElement = document.getElementById('visitor-count');
      if (countElement) {
        countElement.textContent = 'N/A';
      }
    });
});