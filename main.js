var app = new Vue({
    el: "#app",
    data: {
        message: "Connection",
    }
})

fetch('https://s.rockbot.com/temp/now_playing.json')
    .then(response => response.json())
    .then(data => console.log(data));