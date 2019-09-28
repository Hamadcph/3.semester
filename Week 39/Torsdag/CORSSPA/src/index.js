
var getAllPersons = document.getElementById("getAllPersons");

getAllPersons.addEventListener("click", function(){
    const promise = fetch('http://localhost:8080/CORS/api/person/all')
            .then(response=>response.json())
            .then(data=>{console.log(data)});

});