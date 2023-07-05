let today = new Date();
let  year = today.getFullYear();
let userYear = document.getElementById('userYaer');
let calculete = document.getElementById('calcBtn');

calculete.addEventListener('click', function(){
    let age = year - userYear.value;
    if(userYear.value != ''){
        document.getElementById('result').innerHTML =
        'you have ' + '<span>' + age + '</span>'  + ' yaers old';
    }
    else{
        alert('write a valide vlaue');
    }
});