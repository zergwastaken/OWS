// nav.js
document.addEventListener("DOMContentLoaded", () => {
  // Fetch the nav.html file
  fetch('nav.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load nav bar');
      }
      return response.text();
    })
    .then(html => {
      // Inject the HTML into the placeholder
      document.getElementById('nav-placeholder').innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('nav-placeholder').innerHTML = '<p>Error loading navigation.</p>';
    });
});