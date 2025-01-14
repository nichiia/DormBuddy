       let selectedRoom = null;

        // Handle room selection
        document.querySelectorAll('.select-room').forEach(button => {
            button.addEventListener('click', () => {
                // Deselect previous room, if any
                if (selectedRoom) {
                    selectedRoom.classList.remove('selected');
                    selectedRoom.style.backgroundColor = '';
                }

                // Select current room
                selectedRoom = button;
                selectedRoom.classList.add('selected');
                selectedRoom.style.backgroundColor = 'green';
            });
        });

        // Enable the booking button when policies are agreed
        function toggleBookingButton() {
            const checkbox = document.getElementById('agree-policies');
            const bookingButton = document.getElementById('booking-button');
            bookingButton.disabled = !checkbox.checked || !selectedRoom;

            if (!selectedRoom && checkbox.checked) {
                alert('Please select a room before proceeding.');
            }
        }

        // Redirect to payment.html with selected room details
        document.getElementById('booking-button').addEventListener('click', () => {
            if (selectedRoom) {
                const room = selectedRoom.dataset.room;
                const location = selectedRoom.dataset.location;
                const price = selectedRoom.dataset.price;

                window.location.href = `payment.html?room=${encodeURIComponent(room)}&location=${encodeURIComponent(location)}&price=${encodeURIComponent(price)}`;
            }
        });