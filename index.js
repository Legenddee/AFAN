const form01 = document.getElementById('Form-one');
const form02 = document.getElementById('Form-two');
const form03 = document.getElementById('Form-three');
const form04 = document.getElementById('Form-four');
const modal_submit = document.getElementById('modal-success');
const window_Close = document.getElementById('window-exit');
const Section_title = document.getElementById('Title');
let userTitle = document.getElementById('form01-title');
let warning_alert = document.getElementById('warning-alert');


let nameUser = document.getElementById('Applicant-Name');
let Phone_Number = document.getElementById('Phone-Number');
let Farm_produce = document.getElementById('Farm-Produce');
let Phone_Verify = document.getElementById('phone-validation-input');


// form01.style.display = 'none';
form02.style.display = 'none';
form03.style.display = 'none';
form04.style.display = 'none';
modal_submit.style.display = 'none';
warning_alert.style.display = 'none';


let checkPhone;
form01.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    checkPhone = Phone_Verify.value;

    if(checkPhone === "09039294814" || checkPhone === "+2349039294814") {
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="Ibrahim Yakubu Ibrahim";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "RICE"
    }
    else if(checkPhone === "09013463576" || checkPhone === "+2349013463576"){
        this.style.display ='none';
        form02.style.display = 'block';
        userTitle.textContent = checkPhone;

        nameUser.value ="KENNETH OKECHUKWU";
        Phone_Number.value = checkPhone;
        Farm_produce.value = "MAIZE"

    }
    else{
        this.style.display ='block';
        warning_alert.style.display ='block';
        Phone_Verify.style.color = "red";
    }
    
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

