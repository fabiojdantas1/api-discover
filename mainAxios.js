const url = 'http://localhost:5500/api';
//run the axios-discover-api.js to receive the url data into main.js
function getUsers() {
    axios.get(url)
        .then(res => renderApiResult.textContent = JSON.stringify(res.data))
        .catch(error => console.error(error));
}
//run lsof -i tcp:port in terminal to check running processes and run kill -9 PID number
//add POST method
function addUser(newUser) {
    axios.post(url, newUser)
        .then(res => console.log(res))
        .catch(error => console.error(error));
}
const newUser = {
    name: 'Olivia Zara',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio do Sul'
};

//addUser(newUser);

//show a specific user
function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(res => {
            userName.textContent = res.data.name;
            userCity.textContent = res.data.city;
            userId.textContent = res.data.id;
            userAvatar.src = res.data.avatar;
        })
        .catch(error => console.error(error));
}

function updateUser(updatedUser, id) {
    axios.put(`${url}/${id}`, updatedUser)
        .then(res => console.log(res))
        .catch(error => console.error(error));
}

const updatedUser = {
    name: 'Marcelo da Silva',
    avatar: 'https://picsum.photos/200/300',
    city: 'San Francisco'
};

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(res => console.log(res))
        .catch(error => console.error(error));
}

//updateUser(updatedUser, 26);
deleteUser(12);
getUsers();
getUser(1);