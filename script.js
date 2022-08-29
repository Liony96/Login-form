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