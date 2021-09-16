const newFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#review-subject').value.trim();
    const description = document.querySelector('#review-body').value.trim();
    if (name && description) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/reviewPage');
      } else {
        alert('Failed to save review');
      }
    }
  };
  document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler);
  document
    .querySelector('.review-list')
    .addEventListener('click', delButtonHandler);