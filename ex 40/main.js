// Define the make_album function 
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions  and creating 3 variables with different vales
var album1 = make_album("Maria", "Album title 1");
var album2 = make_album("sara", " Album title 2");
//calling a make _album Function with third parameter
var album3 = make_album("Ali", "Album title 3", 20);
// Print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
