// Retrieve selected room and price from localStorage
const selectedRoom = localStorage.getItem('selectedRoom');
const selectedRoomPrice = localStorage.getItem('selectedRoomPrice');

// Display room details on the payment page
if (selectedRoom && selectedRoomPrice) {
    document.getElementById('room-details').textContent = `Selected Room: ${selectedRoom}`;
    document.getElementById('room-price').textContent = `Price: RM${selectedRoomPrice}`;
    document.getElementById('total-price').textContent = `RM${parseFloat(selectedRoomPrice) + 3}`; // Including tax
} else {
    document.getElementById('room-details').textContent = `No room selected`;
    document.getElementById('room-price').textContent = `Price: N/A`;
    document.getElementById('total-price').textContent = `N/A`;
}

let selectedPaymentMethod = null;

// Function to handle payment method selection
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    alert(`${method} selected as payment method.`);
    document.getElementById('secure-payment').disabled = false;
}

// Function for proceed to payment
function continueToPayment() {
    if (selectedPaymentMethod) {
        const popup = document.getElementById('popup');
        popup.classList.remove('hidden');
        setTimeout(() => {
            popup.classList.add('hidden');
            alert('Redirecting to secure payment gateway...');
            // Implement redirection logic here
        }, 2000);
    } else {
        alert('Please select a payment method before proceeding.');
    }
}

// Function for cancel payment
function cancelPayment() {
    window.location.href = 'oncampus.html';
}
