const form = document.getElementById('form');
const correo = document.getElementById('email');
const text = document.querySelector('.warning');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let warning = ''
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+/
    let entrar = false
    text.innerHTML = ''
    if(!regexEmail.test(email.value)) {
        warning += `Please provide a valid email` 
        entrar = true
    }
    if (entrar) {
        text.innerHTML = warning
    }
})