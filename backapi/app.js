document.getElementById('addUserForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const first_name = document.getElementById('first_name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name, email, age })
    });


    const data = await response.json();
    console.log(data);
    loadUsers();
});


document.getElementById('updateUserForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('updateId').value;
    const first_name = document.getElementById('updateName').value;
    const email = document.getElementById('updateEmail').value;
    const age = document.getElementById('updateAge').value;

    
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name, email, age })
    });

 
    const data = await response.json();
    console.log(data);
    loadUsers();
});

async function loadUsers() {
    const response = await fetch('http://localhost:3000/api/users');


    const users = await response.json();
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <p>${user.first_name} - ${user.email} - ${user.age} 
            <button onclick="deleteUser('${user._id}')">Delete</button>
            </p>`;
        usersList.appendChild(userDiv);
    });
}


async function deleteUser(id) {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
    });

   
    const data = await response.json();
    console.log(data);
    loadUsers();
}


loadUsers();