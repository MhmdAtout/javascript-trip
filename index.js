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

// ___________________________________________ Question 4
function isPrime(number){
    if (number < 2) {
        return `${number} is not a prime number`;
    }
    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return `You are ${number} years old, it is not a prime number`;
        }
    }

    return `You are ${number} years old, it is a prime number`;
}

var check_prime_btn = document.getElementById('check_prime_btn');
var prime_result = document.getElementById('prime_result');

check_prime_btn.addEventListener('click', () => {
    var year_input = document.getElementById('year_input');
    var date = new Date();
    var current_year = date.getFullYear();
    var age =  current_year - year_input.value;
    var function_result = isPrime(age); 
    prime_result.innerText = function_result;
})

// ___________________________________________ Question 5
var student_name = document.getElementById('student_name');
var student_major = document.getElementById('student_major');
var course_name = document.getElementById('course_name');
var intructor_name = document.getElementById('intructor_name');

var name_value = document.getElementById('name_value');
var major_value = document.getElementById('major_value');
var course_value = document.getElementById('course_value');
var instructor_value = document.getElementById('instructor_value');

var course_btn = document.getElementById('course_btn');

class Courses{
    constructor(name, major, course, intructor){
        this.name = name;
        this.major = major;
        this.course = course;
        this.intructor = intructor;
    }
}

course_btn.addEventListener('click', () => {
    var new_student = new Courses(student_name.value, student_major.value, course_name.value, intructor_name.value);
    name_value.innerText = `${new_student.name}`;
    major_value.innerText = `${new_student.major}`;
    course_value.innerText = `${new_student.course}`;
    instructor_value.innerText = `${new_student.intructor}`;
})

// ___________________________________________ Question 6
function reverse (string) {
    var reversed_string = ""
    for (var i = string.length -1; i >= 0; i-- ){
        reversed_string += string[i]
    }
    return reversed_string;
}

var reverse_input = document.getElementById('reverse_input');
var reverse_btn = document.getElementById('reverse_btn');
var reverse_result = document.getElementById('reverse_result');

reverse_btn.addEventListener('click', () => {
    var reversed = reverse(reverse_input.value)
    reverse_result.innerText = reversed
})

// ___________________________________________ Question 7

var shuffle_btn = document.getElementById('shuffle_btn');
var shuffle_result = document.getElementById('shuffle_result');


shuffle_btn.addEventListener('click', () => {
    var shuffle_input = document.getElementById('shuffle_input').value;
    let new_word

    for (let i = 0; i < shuffle_input.length; i++){
        if(shuffle_input[i] === "i" || shuffle_input[i] === "o" || shuffle_input[i] === "u" || shuffle_input[i] === "a" || shuffle_input[i] === "e"){
            new_word = shuffle_input.slice(0, i)
            shuffle_input = shuffle_input.slice(i, shuffle_input.length +1)
            break;
        }}

    shuffle_result.innerText = `${shuffle_input}${new_word}ay`;  
})

// ___________________________________________ Question 9
var get_ip_btn = document.getElementById('get_ip_btn');
var ip_adress = document.getElementById('ip_adress');
var ip_sum = document.getElementById('ip_sum');


get_ip_btn.addEventListener('click', () => {
    fetch('http://ip-api.com/json/?fields=61439')
    .then((res) => res.json())
    .then((data) => {
        ip_adress.innerText = data.query
        
        var ip_number = data.query.replaceAll(".", ""); 
        let sum = 0;

        for (var i = 0; i < ip_number.length; i++){
            if(ip_number[i] % 2 == 0){
                sum += parseInt(ip_number[i]);
            }
        }
        ip_sum.innerText = `The sum of even numbers in your IP Address = ${sum}`
    });
})

// ___________________________________________ Question 10
var get_location = document.getElementById('get_location');
var country = document.getElementById('country');
var region = document.getElementById('region');
var city = document.getElementById('city');

get_location.addEventListener('click', () => {
    fetch('http://ip-api.com/json/?fields=61439')
    .then((res) => res.json())
    .then((data) => {
        country.innerText = `Country: ${data.country}`
        region.innerText = `Region: ${data.regionName}`
        city.innerText = `City: ${data.city}`
    });
})