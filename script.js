document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(JSON.stringify({ email: document.getElementById('email').value }))
  fetch('https://script.google.com/macros/s/AKfycbw2ohfU9R65oUAii7e-J7YU6oopL6_heHNn2JoFRxtf1QAaeanCd0fk0HycrGm9oC2I/exec', {
    method: 'POST',
    mode: 'no-cors',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ email: document.getElementById('email').value })
  }).then(function(response) {
    console.log(response)
  })
    .catch(function(error) {
      console.log(error)
      alert('Failed to subscribe');
    });
   document.getElementById('emailForm').innerHTML = '<p>Thanks for subscribing!</p>';
      setTimeout(function() {
        var element = document.getElementById('emailForm');
        element.parentNode.removeChild(element);
      }, 3000);
});
