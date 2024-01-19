document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('loginModal');
    var galleryContent = document.querySelector('.gallery');
    var loginErrorMessage = document.getElementById('loginErrorMessage'); 

    
    modal.style.display = 'block';
    galleryContent.classList.add('content-hidden'); 

    
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        
        if (username === 'emperoress' && password === '10252020') {
            
            modal.style.display = 'none';
            galleryContent.classList.remove('content-hidden'); 
            loginErrorMessage.style.display = 'none';
        } else {
            
            loginErrorMessage.style.display = 'block'; 
        }
    });
});
