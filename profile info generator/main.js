let rootDocment = document.getElementById('root');

/* create html elements before calling API  */

let tumbnail = document.createElement('img');
let profileImage = document.createElement('img');
let profileName = document.createElement('h1');
let address = document.createElement('p');
let userEmail = document.createElement('p');
let userPhoneNumber = document.createElement('p');

/* create principale container where we add all information */
let infoContainer = document.createElement('div');

/* API url   */

const apiUrl = 'https://randomuser.me/api/';

window.addEventListener('load', function(){
    fetch(apiUrl)
    .then((response)=> response.json())
    .then(json => {
        console.log(json)
        results = json['results'];
        /* random media informatino importing from API */
        tumbnail.src= results[0]['picture']['thumbnail'];
        profileImage.src= results[0]['picture']['medium'];

        /*  text information importing from API   */

        profileName.innerHTML = '<i class="fa-solid fa-user"></i> '
         + results[0]['name']['first'] + ' ' 
         + results[0]['name']['last'] ;

        address.innerHTML ='<i class="fa-solid fa-location-dot"></i> ' 
        + results[0]['location']['city'] + ' ' 
        + results[0]['location']['country'];

        userEmail.innerHTML ='<i class="fa-solid fa-envelope"></i> ' + results[0]['email'];

        userPhoneNumber.innerHTML ='<i class="fa-solid fa-phone"></i> ' + results[0]['phone'];
        })

    rootDocment.appendChild(tumbnail);
    rootDocment.appendChild(profileImage);
    rootDocment.appendChild(infoContainer);

    /* append all text info to infoContiner variable  */
    infoContainer.appendChild(profileName);
    infoContainer.appendChild(address);
    infoContainer.appendChild(userEmail);
    infoContainer.appendChild(userPhoneNumber);


    /* add some class to our elements */

    infoContainer.classList.add('info-container');
    tumbnail.classList.add('thumbnail');
    profileImage.classList.add('profile-image');

})

/* now we create our css */