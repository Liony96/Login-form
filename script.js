const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');
const signIn = document.querySelector('.sign-in');
const signUp= document.querySelector('.sign-up');

document.addEventListener('click', e => {
    if (e.target === signInBtn || e.target === signUpBtn) {
        signIn.classList.toggle('active');
        signUp.classList.toggle('active');
    }
})

const pass1 = document.getElementById('password-1');
const pass2 = document.getElementById('password-2');
const submitSignUp = document.getElementById('submit');

submitSignUp.addEventListener('click', () => {
    if (pass1.textContent != pass2.textContent) {
        alert('Passwords does not match');
        pass1.style.color = 'red';
        pass2.style.color = 'red';
    }
})