const url = 'http://localhost:5500/api';
//run the fetch-discover-api.js to receive the url data into main.js
function getUsers() {
    fetch(url)
        .then(res => res.json())
        //sends API content to browser
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error));
}

//show a specific user
function getUser() {
    fetch(`${url}/1`)
        .then(res => res.json())
        .then(data => {
            userName.textContent = data.name;
            userCity.textContent = data.city;
            userAvatar.src = data.avatar;
        })
        .catch(error => console.error(error));
}

getUser();
getUsers();