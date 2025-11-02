// This function will run once the entire page is loaded
window.addEventListener('load', function() {
  // The API URL to get your public count data.
  // The /.json at the end is crucial!
  const apiUrl = 'https://YOUR-CODE.goatcounter.com/counter/.json';

  // Use the modern 'fetch' API to get the data from the URL
  fetch(apiUrl)
    .then(response => response.json()) // Convert the response to JSON format
    .then(data => {
      // Find the element with the ID 'visitor-count' on your page
      const countElement = document.getElementById('visitor-count');
      if (countElement) {
        // Update the element's text with the unique visitor count
        countElement.textContent = data.count_unique;
      }
    })
    .catch(err => {
      // If something goes wrong, show an error in the browser's console
      console.error('Could not fetch visitor count:', err);
      const countElement = document.getElementById('visitor-count');
      if (countElement) {
        // And update the text to show there was a problem
        countElement.textContent = 'N/A';
      }
    });
});