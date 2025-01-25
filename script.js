function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'riswannnn' && password === 'riswan2025') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
    } else {
        alert('Invalid credentials!');
    }
}
