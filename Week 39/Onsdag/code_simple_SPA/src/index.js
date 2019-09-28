import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

var myFetch = function (URL) {
    fetch(URL)
            .then(response => response.json())
            .then(data => {
                document.getElementById("myDiv").innerHTML = data.joke;
            })
}

var jokeURL = 'https://studypoints.info/jokes/api/jokes/period/hour';

var getJoke = function () {
    return myFetch(jokeURL);
}

document.getElementById("GetJoke").addEventListener("click", getJoke);


var klinge = function (blade) {
    document.getElementById(blade).addEventListener("click", function () {
        document.getElementById("myDiv2").innerHTML = blade;
    })
}

klinge("north");klinge("south");klinge("west");klinge("east");
