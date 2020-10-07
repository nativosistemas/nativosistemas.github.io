function ir(){
fetch('http://www.kellerhoff.com.ar:84/api/users')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
		var users =JSON.parse(data);

        console.log('data = ', users[0].login);
		
		  document.getElementById("mostrar").innerHTML = users[0].login;
		
    })
    .catch(function(err) {
        console.error(err);
    });
}