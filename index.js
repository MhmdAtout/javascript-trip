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

// ___________________________________________ Question 2
function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while(i < arr1.length && j < arr2.length) {
     if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;  
     }else {
      results.push(arr2[j])
      j++
     }
    }
    while(i < arr1.length){
     results.push(arr1[i]);
     i++;
    }
    while(j < arr2.length){
     results.push(arr2[j]);
     j++;
    }
    return results
   }

function mergeSort(arr){
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
   }


var merge_sort_btn = document.getElementById('merge_sort_btn');
var sorted_list = document.getElementById('sorted_list');
var merge_result = document.getElementById('merge_result');

merge_sort_btn.addEventListener('click', () => {
    var list = prompt("Enter 10 numbers separated with spaces only")
    var splitted = list.split(' ');
    var parsed = [];
    splitted.forEach(element => {
        parsed.push(parseInt(element)) 
    });
    var sorted = mergeSort(parsed);
    var string = sorted.join(" ");
    sorted_list.innerText = string;

    merge_result.classList.remove('hide');
    merge_result.classList.add('flex');
})

// ___________________________________________ Question 3
const to_check = document.getElementById("to_check");
const check_btn = document.getElementById("check_btn");
var input_word = document.getElementById('input_word');
var result = document.getElementById('result');

check_btn.addEventListener("click", function () {
  check(to_check.value);
});
function check(words) {
  for (let i = 0; i < words.length; i++) {
    let j = words.length - 1 - i;
    if (words[i] == words[j]) {
      let portion = words.slice(i + 1, j - 1);
      check(portion);
      if ((portion.length = 1)) {
        input_word.innerHTML = to_check.value
        result.innerHTML = "WOW! Its a Palindrome :)";
      }
    } else {
        input_word.innerHTML = to_check.value
        result.innerHTML = "OOPPSS! Not a Palindrom :(";
      break;
    }
  }
}