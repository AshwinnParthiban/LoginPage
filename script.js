const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link'); // Corrected selector for the login link
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close')



document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting

});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active'); // Add 'active' class when register link is clicked
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active'); // Remove 'active' class when login link is clicked
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})