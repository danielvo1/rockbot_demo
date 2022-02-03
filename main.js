var app = new Vue({
    el: "#app",
    data: {
        artist: '',
        song: '',
        artwork: '',
        queue: [],
        page: 'nowplaying', 
    }
})

//testing that the artist name is being changed from the api call 
app.artist = "Wow Bowie"

fetch("https://s.rockbot.com/temp/now_playing.json")
    .then(response => response.json())
    .then(data => {
        app.artist = data.aNowPlaying.sArtist
        app.song = data.aNowPlaying.sSong
        app.artwork = data.aNowPlaying.sArtwork
        app.queue = data.aQueue
    })