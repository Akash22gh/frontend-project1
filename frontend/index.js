<script>
    // Get all "Book Ticket" buttons
    const bookTicketButtons = document.querySelectorAll('.book-ticket-btn');

    // Add click event listeners to each button
    bookTicketButtons.forEach(button => {
        button.addEventListener('click', event => {
            const movieTitle = button.getAttribute('data-movie');
            
            // Redirect to a booking page with the selected movie
            window.location.href = `booking.html?movie=${encodeURIComponent(movieTitle)}`;
        });
    });
</script>
