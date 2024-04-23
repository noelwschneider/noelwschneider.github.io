document.addEventListener("DOMContentLoaded", function() {
  fetch('/common/navbar.html')
    .then(response => {
      return response.text()
    })
    .then(html => {
      document.getElementById('navbar').innerHTML = html;
    })
    .catch(error => console.error('Error loading the navbar:', error));
});
