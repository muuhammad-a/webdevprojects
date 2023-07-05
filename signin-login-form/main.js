let loginBtn = document.getElementById('loginBtn');
let signinBtn = document.getElementById('signinBtn');
let space = document.getElementById('space');
let title = document.getElementById('title');
let loginForm = document.getElementById('loginForm');
let signInForm = document.getElementById('sign-in-Form');


/* login form */

loginBtn.addEventListener('click', function(){
    loginForm.classList.add('active');
    signInForm.classList.remove("active");
    title.innerHTML = 'login';
    space.style.transform='translateX(-80px)';

})
signinBtn.addEventListener('click', function(){
    loginForm.classList.remove('active');
    signInForm.classList.add("active");
    title.innerHTML='sign in';
    space.style.transform='translateX(80px)';

})