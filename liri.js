var twitterKeys = require("./keys.js");
var fs = require("fs");
var request = require("request")
var Spotify = require('node-spotify-api');


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

function spotifyThisSong(req) {
	var spotify = new Spotify({
  		id: "8a789df7c455457cab178069bb895f19",
  		secret: "b6c04df9d02f44598fdceb99a88fe757"
		});

	var nodeArgs = process.argv;
	// var songName = "";

	// for (var i = 3; i < nodeArgs.length; i++){
	// 	if (i > 3 && i < nodeArgs.length) {
	// 		songName = songeName + "+" + nodeArgs[i];

	// 	}
	// 	else {
	// 		songName += nodeArgs[i];
	// 	}
	// }
	
	spotify
  		.search({ type: 'track', query: "Home" })
  		.then(function(response) {
   		 console.log(response);
 	 })
  		.catch(function(err) {
    	console.log(err);
  });

}
function movieThis(req) {

	var nodeArgs = process.argv;
	var movieName = "";

	for (var i = 3; i < nodeArgs.length; i++){
		if (i > 3 && i < nodeArgs.length) {
			movieName = movieName + "+" + nodeArgs[i];

		}
		else {
			movieName += nodeArgs[i];
		}
	}
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

	console.log(queryUrl);

	request(queryUrl, function(error, response, body) {

	
 
  	if (!error && response.statusCode === 200) {

  	console.log("Movie: " + JSON.parse(body).Title);
  	console.log("Release year: " + JSON.parse(body).Year);
  	console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
    console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
    console.log("The country where the movie was made: " + JSON.parse(body).Country);
    console.log("The movie's language is: " + JSON.parse(body).Language);
    console.log("The plot of the movie is: " + JSON.parse(body).Plot);
    console.log("The actors in the movie are: " + JSON.parse(body).Actors)
  }
});

}

function doWhatItSays() {

}