var app = new Vue({
    el: "#app",
    data: {
        artist: '',
        song: '',
    }
})

const vm = app.$mount('#app')
console.log(vm.artist)

vm.artist = "Wow Bowie"

fetch("https://s.rockbot.com/temp/now_playing.json")
    .then(response => response.json())
    .then(data => {
        vm.artist = data.aNowPlaying.sArtist
        vm.song = data.aNowPlaying.sSong
    })

console.log(vm.artist)
    