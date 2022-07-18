const url = 'http://localhost:5500/api';
//run the fetch-discover-api.js to receive the url data into main.js
function getUsers() {
    fetch(url)
        .then(res => res.json())
        //sends API content to browser
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error));
}
//run lsof -i tcp:port in terminal to check running processes and run kill -9 PID number
//show a specific user
function getUser(id) {
    fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(data => {
            userName.textContent = data.name;
            userCity.textContent = data.city;
            userAvatar.src = data.avatar;
        })
        .catch(error => console.error(error));
}
//add POST method
function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error));
}
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error));
}

const newUser = {
    name: 'Olivia Zara',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio do Sul'
};

addUser(newUser);

const updatedUser = {
    name: 'Marcelo da Silva',
    avatar: 'https://picsum.photos/200/300',
    city: 'San Francisco'
};

updateUser(updatedUser, 1);
getUsers();
getUser(13);