var twitterKeys = require("./keys.js");
var fs = require("fs");
var request = require("request")



var action = process.argv[2];



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
	var Twitter = require('twitter');

	var client = new Twitter({
  	consumer_key: '1np2EolIVVfu8AcvpACxaaQV2',
  	consumer_secret: 'cfqVYoHM9Z5XHChyNMqlEm2ahlwSv0SEgKqEqjJl680iybX27T',
  	access_token_key: '912806874499620864-RxATla9xUvu436Td5Zyns4CJBeowQum',
  	access_token_secret: 'Vn7fWLJjoWPNjlGxVrs9goKz1fl7vMSIOjneg5Dtqon61',
	});

	
	var params = {screen_name: 'MarinaLyulko'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
 		if (!error) {
 			for (var i = 0; i < tweets.length; i++) {
	  		console.log(tweets[i].text);
	  	}
   		 
   		}
		});
}
function spotifyThisSong(song) {
	var Spotify = require('node-spotify-api');

	var spotify = new Spotify({
  		id: "8a789df7c455457cab178069bb895f19",
  		secret: "b6c04df9d02f44598fdceb99a88fe757"
		});
	
	for (var i = 3; i < process.argv.length; i++){
		
		if (i > 3 && i < process.argv.length) {
			songName = songName + "+" + process.argv[i];

		}
		if (process.argv.length >= 4) {
			songName = process.argv[3];
		} 
	 	 if (song != 1) {
			songName = song;
		} else {
		songName = "Ace of Base - The Sign"
	}

	spotify.search({ type: 'track', query: songName }, function(err, data) {
  	if (err) {
    return console.log('Error occurred: ' + err);
  	}
 
	console.log("the artist is:" + data.tracks.items[0].artists[0].name); 
	console.log("the song is:" + songName)
	console.log("Preview Link:" + data.tracks.items[0].preview_url);
	console.log("the album is:" + data.tracks.items[0].album.name);  
	});

	
	
 
	

}
function movieThis(movie) {

	var nodeArgs = process.argv;
	var movieName = "";

	for (var i = 3; i < nodeArgs.length; i++){
		if (i > 3 && i < nodeArgs.length) {
			movieName = movieName + "+" + nodeArgs[i];

		}
		else if (true) {
			movieName += nodeArgs[i];
		} else {
			movieName = "Mr.Nobody";
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

	fs.readFile("random.txt", "utf8", function(error, data) {

 	if (error) {
    	return console.log(error);
  	}

  	var dataArr = data.split(",");

  	var command = dataArr[0];
  	var value = dataArr[1];

  		switch(command) {
  			case "spotify-this-song":
  			spotifyThisSong(value);
  			break;

  			case "movie-this":
  			movieThis(value);
  			break;

  			default:
  			console.log("request cant be found");
  			break;
  		}

});

}