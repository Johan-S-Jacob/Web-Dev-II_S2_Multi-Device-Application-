document.getElementById('contact-btn').addEventListener('click', () => {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
  
    // Basic input validation (you can add more robust checks)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Create a simple object to represent the contact information
    const contactData = {
      name: name,
      email: email,
      message: message
    };
  
    // Send the contact information (replace this with your actual implementation)
    // For example, you could send it to a server using fetch API:
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        // Optionally, clear the form fields
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
      } else {
        alert('Error sending message. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });