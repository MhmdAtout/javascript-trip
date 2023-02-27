// __________________________________________ Question 1
var first_name = document.getElementById('first_name');
var last_name = document.getElementById('last_name');
var signup_email = document.getElementById('signup_email');
var signup_password = document.getElementById('signup_password');

var submit_btn = document.getElementById('submit_btn');
var registration_result = document.getElementById('registration_result');

var reg_text = document.getElementById('reg_text');
var course_form_text = document.getElementById('course_form_text');

var password_sample = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,100}$/;
var email_sample = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+).([a-z]+).([a-z]+)?$/;

var data = {
    first_name : '',
    last_name : '',
    email : '', 
    password : '',
}

submit_btn.addEventListener('click', () => {
    if(signup_password.value.match(password_sample) && signup_email.value.match(email_sample)){
        data.first_name = first_name.value;
        data.last_name = last_name.value;  
        data.email = signup_email.value;
        data.password = signup_password.value;
        registration_result.innerText = "Registration Done, Scroll Down";
        alert('Registeration data is saved in console');
        console.log(data);
        course_form_text.classList.remove('hide');
        course_form_text.classList.add('flex');
        reg_text.innerText = `Hello ${first_name.value} ${last_name.value}, \n Welcome to SE Fcactory, please do not forget to fill this form. \n We know that you will suffer during the FSW Bootcamp, so down below you can have fun with a small excercises we've specially prepared for you. \n Have Fun :) `
    } else{
        alert("Please make sure \n Your password should be a minimuim of 8 characters and includes a special character, numbers, small and capital letters \n Email can only include '.'")
    }
})