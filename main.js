var app = new Vue({
    el: "#app",
    data: {
        artist: '',
        song: '',
        artwork: '',
        queue: [],
    }
})
console.log(app.artist)

app.artist = "Wow Bowie"

fetch("https://s.rockbot.com/temp/now_playing.json")
    .then(response => response.json())
    .then(data => {
        app.artist = data.aNowPlaying.sArtist
        app.song = data.aNowPlaying.sSong
        app.artwork = data.aNowPlaying.sArtwork
        app.queue = data.aQueue
    })