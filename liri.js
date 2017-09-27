var twitterKeys = require("./keys.js");
var fs = require("fs");


var action = process.argv[2];
var value = process.argv[3];


switch(action) {
	case "my-tweets":
		myTweets();
		break;

	case "spotify-this-song":
		spotifyThisSong();
		break;

	case "movie-this":
		movieThis();
		break;

	case "do-what-it-says":
		doWhatItSays();
		break;
}


function myTweets() {

}

function spotifyThisSong() {

}

function movieThis() {

}

function doWhatItSays() {
	
}