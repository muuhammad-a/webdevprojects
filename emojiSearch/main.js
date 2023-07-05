let search = document.getElementById('search-btn');
let searchInput = document.getElementById('search');
let space = document.getElementById('response');
let copiArea = document.getElementById('textCopi');
let copiBtn = document.getElementById('copid');
let copidTools = document.getElementById('copidTool');
let openCopi = document.getElementById('open');


search.addEventListener('click', function () {
    const API_KEY = `cfbdbbb553dbf86f4f123bb8a0084c5ff7e36ddc`;
    const BASE_URL = `https://emoji-api.com/emojis?search=${searchInput.value}&access_key=${API_KEY}`;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', BASE_URL);
    xhr.onload = function () {
        if (this.status >= 200) {
            space.style.height = 'auto';
            let data = JSON.parse(xhr.response);
            console.log('response here');
            console.log(data);

            space.innerHTML = '';
            copiArea.innerHTML = ''; // Aggiunto per svuotare l'elemento textCopi

            if (data && data.length > 0) {
                data.forEach(function (emoji) {
                    let span = document.createElement('span');
                    span.innerHTML = String.fromCodePoint(parseInt(emoji.codePoint, 16));
                    space.appendChild(span);

                    span.addEventListener('click', function () {
                        navigator.clipboard.writeText(span.innerHTML)
                            .then(function () {
                                copiArea.innerHTML += span.innerHTML; // Aggiunto per aggiungere l'emoji alla stringa di emoji
                                span.style.backgroundColor='grey';
                            })
                            .catch(function (error) {
                                console.log('Error copying emoji: ' + error);
                            });
                    });
                });
            }
        } else {
            console.log('error ' + this.status);
        }
    };

    xhr.send();
});


let clear = document.getElementById('clear');
clear.addEventListener('click', function () {
    space.innerHTML = '';
    copiArea.innerHTML = ''; // Aggiunto per svuotare l'elemento textCopi
});

openCopi.addEventListener('click', function(){
    copidTools.classList.toggle('active');
});
copiBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(copiArea.innerHTML);
    alert('your emoji is copid')
})