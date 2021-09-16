const newFormHandler = async (event) => {
    event.preventDefault();
  
    const guest_name = document.querySelector('#guest-name').value.trim();
    const reservation_date = document.querySelector('#res-date').value.trim();
    const phone_num = document.querySelector('#phone-num').value.trim();
    const party_num = document.querySelector('#party-num').value.trim();
    
  
    if (guest_name && reservation_date && phone_num && party_num) {
      const response = await fetch(`/api/reservations`, {
        method: 'POST',
        body: JSON.stringify({ guest_name, reservation_date, phone_num, party_num }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        alert('Reservation created! Look forward to seeing you');
      } else {
        alert('Failed to create reservation');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reservations/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete reservation');
      }
    }
  };
  
  document
    .querySelector('.new-reservation-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.reservation-list')
    .addEventListener('click', delButtonHandler);