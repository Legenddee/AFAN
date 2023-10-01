// let form01 = document.getElementById('Form-two');
// let form02 = document.getElementById('Form-two');
// form02.style.display = 'none'

// let verify_btn = document.getElementById('verify-btn');

// function verifyPhoneNumber() {
//     form01.style.display ='none';
//     form02.style.display ='block';
// }

// verify_btn.addEventListener('click', verifyPhoneNumber);

const form01 = document.getElementById('Form-one');
const form02 = document.getElementById('Form-two');
form02.style.display = 'none';


form01.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // You can add your custom logic here
    // For example, validation or sending data to a server
    this.style.display ='none';
    form02.style.display = 'block';
});