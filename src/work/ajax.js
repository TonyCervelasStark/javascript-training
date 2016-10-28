$.get('http://localhost:3000/api/users/', function(users){
    console.log(users.sort((user1, user2) => user1.name < user2.name ? -1 : 1));
    // console.log(users.sort((user1, user2) => (user1.name).localeCompare(user2.name)));
    displayUsers(users);
});


$.get('/api/users/admins/', function(admins){
    console.log('admins', admins.map(admin => admin.name));
});


function displayUsers(users) {
    const block=$('<ul>');
    users.forEach(function (user){
        const pUser = $('<li>').text(user.name);
        block.append(pUser);
    });
    $('section.users').append(block);
}


/*
function displayUsers(users){
    const block = $('<div>');
    const pUser = users.map(user => $('<p>').text(user.name));
    block.append(pUser);
    $('section.users').append(block);
}
*/
