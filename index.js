const form01 = document.getElementById('Form-one');
const form02 = document.getElementById('Form-two');
let userTitle = document.getElementById('form01-title');

let verify_phone;
form02.style.display = 'none';


form01.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.style.display ='none';
    form02.style.display = 'block';
    verify_phone = document.getElementById('phone-validation-input').value;
    userTitle.textContent = verify_phone;
});