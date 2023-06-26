// bringing in some variables that will need to be used globally, historyCard not really but I just already did it.
var APIKey = "1a107d08c13041f458e3773eb047b491";
var APIKey2 = "aae14bc59371f25c0baad703a8bd681e";
var searchBtn = document.getElementById('submit');
var historyCard = document.getElementById('historyCard');

// This displays today's date and time under the header.
function displayDate() {
    // get a new date (locale machine date time)
    var date = new Date();
    // get the date as a string
    var n = date.toDateString();
    // get the time as a string
    var time = date.toLocaleTimeString();

    // find the html element with the id of time
    // set the innerHTML of that element to the date a space the time
    document.getElementById('time').innerHTML = n + ' ' + time;

}