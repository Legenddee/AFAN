const form01 = document.getElementById('Form-one');
const form02 = document.getElementById('Form-two');
const form03 = document.getElementById('Form-three');
const form04 = document.getElementById('Form-four');
const modal_submit = document.getElementById('modal-success');
const window_Close = document.getElementById('window-exit');
const Section_title = document.getElementById('Title');
let userTitle = document.getElementById('form01-title');


let verify_phone;
// form01.style.display = 'none';
form02.style.display = 'none';
form03.style.display = 'none';
form04.style.display = 'none';
modal_submit.style.display = 'none';


form01.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.style.display ='none';
    form02.style.display = 'block';
    verify_phone = document.getElementById('phone-validation-input').value;
    userTitle.textContent = verify_phone;
});

form02.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.style.display ='none';
    form01.style.display ='none';
    form04.style.display ='none';
    form03.style.display = 'block';
});

form03.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.style.display ='none';
    form01.style.display ='none';
    form02.style.display ='none';
    form04.style.display = 'block';
});

form04.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.style.display ='none';
    form01.style.display ='none';
    form02.style.display ='none';
    form03.style.display ='none';
    modal_submit.style.display = 'block';
    modal_submit.click();
    Section_title.style.display = 'none';
});
// window_Close.addEventListener('click', function(){
//     modal_submit.style.display = 'none';
// });
