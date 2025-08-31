document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'ISHU' && password === '1234') {
        window.location.href = 'main.html';
    } else {
        message.textContent = 'Invalid username or password.';
    }
});