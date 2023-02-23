// Get the form element and listen for the submit event
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  // Get the user input values
  const name = contactForm.elements.name.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;

  // Do some basic form validation
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Send the data to your server using AJAX or fetch
  // Replace this with your own code to send the data to your server
  fetch('/path/to/your/server', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully');
      contactForm.reset(); // reset the form
    } else {
      throw new Error('Failed to send message');
    }
  })
  .catch(error => {
    alert(error.message);
  });
});
