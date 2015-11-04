// wait for DOM to load before running JS
$(function() {
 // 1. Create a Form
 // 2. make AJAx request when form submits
 // 3. Get user input from form to send to spotify
  // check to make sure JS is loaded

	//Submit the form to search spotfiy API
	$('#search').on('submit', function(event){
  	event.preventDefault(); 

    // reset the form
    $(tracks).empty();

	//save the form entries to variable
	var searchedTrack = $('#searchedTrack').val();

	// Tracked results that are in the array called 'items'
	// The array is nested in 'tracks' 
	$.get('https://api.spotify.com/v1/search?q=' + searchedTrack + '&type=track', function (data){
  	var artistResults = data.tracks.items;
  	console.log(artistResults); 

	//appended the tracks to view on window 
  	var artistSongs = artistResults.forEach(function(track){
  		console.log(track.name); 
  		$('#results').append('<p>' + track.name + '</p>');	


	//empty - clear the hello results and put good bye results 
  	// console.log('JS is loaded!');
	 });
});  
}); 
}); 