document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('loginModal');
    var galleryContent = document.querySelector('.gallery');
    var loginErrorMessage = document.getElementById('loginErrorMessage'); // Placeholder for error message

    // Show the modal by default when the page is loaded
    modal.style.display = 'block';
    galleryContent.classList.add('content-hidden'); // Initially hide the gallery content

    // ...

    // Handle form submission
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // You can add logic here to handle login validation
        // For example, check username and password inputs
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Basic validation - Replace this with your own authentication logic
        if (username === 'emperoress' && password === '10252020') {
            // If validation is successful, close the modal and show the content
            modal.style.display = 'none';
            galleryContent.classList.remove('content-hidden'); // Show the gallery content
            loginErrorMessage.style.display = 'none'; // Hide the error message
        } else {
            // If validation fails, show an error message
            loginErrorMessage.style.display = 'block'; // Display the error message
        }
    });
});
