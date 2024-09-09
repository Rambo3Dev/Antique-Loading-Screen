function getRandomSongNumber() {
    return random = Math.floor(Math.random() * 3) + 1;
  }
  function setNewSong() {
  if (random == 1) {
    document.getElementById("loading").src = "song/song1.mp3";
    songname.innerHTML = "Rambo-Non-copyrighted";
  }
  else if (random == 2) {
    document.getElementById("loading").src = "song/song2.mp3";
    songname.innerHTML = "Rambo-Non-copyrighted";
  }
  else if (random == 3) {
    document.getElementById("loading").src = "song/song3.mp3";
    songname.innerHTML = "Rambo-Non-copyrighted";
  }

  }

document.addEventListener("DOMContentLoaded", function () {
    
    var random = getRandomSongNumber();
    setNewSong(random);
  });

var play = false;
var vid = document.getElementById("loading");
vid.volume = 0.2;
window.addEventListener('keyup', function(e) {
    if (e.which == 38) { // ArrowDOWN
        vid.volume = Math.min(vid.volume + 0.025, 1);
    } else if (e.which == 40) { // ArrowUP
        vid.volume = Math.max(vid.volume - 0.025, 0);
    };
});

var mutetext = document.getElementById("text");
var songname = document.getElementById("songname");

window.addEventListener("keyup", function(event) {
    if (event.which == 37) { // ArrowLEFT
        if (document.getElementById("loading").src.endsWith("song2.mp3")) {
            document.getElementById("loading").src = "song/song1.mp3";
            songname.innerHTML = "Rambo-Non-copyrighted";

        } else if (document.getElementById("loading").src.endsWith("song1.mp3")) {
            document.getElementById("loading").src = "song/song3.mp3";
            songname.innerHTML = "Rambo-Non-copyrighted";

        } else if (document.getElementById("loading").src.endsWith("song3.mp3")) {
            document.getElementById("loading").src = "song/song2.mp3";
            songname.innerHTML = "Rambo-Non-copyrighted";
        }
        document.getElementById("loading").play();
        mutetext.innerHTML = "MUTE";
    }

    if (event.which == 39) { // ArrowRIGHT
        if (document.getElementById("loading").src.endsWith("song2.mp3")) {
            document.getElementById("loading").src = "song/song3.mp3";
            songname.innerHTML = "Rambo-Non-copyrighted";

        } else if (document.getElementById("loading").src.endsWith("song3.mp3")) {
            document.getElementById("loading").src = "song/song1.mp3";
            songname.innerHTML = "Rambo-Non-copyrighted";

        } else if (document.getElementById("loading").src.endsWith("song1.mp3")) {
            document.getElementById("loading").src = "song/song2.mp3";
            songname.innerHTML = "Rambo-Non-copyrighted";

        }
        document.getElementById("loading").play();
        mutetext.innerHTML = "MUTE";
    }
    
});

var audio = document.querySelector('audio');

if (audio) {

    window.addEventListener('keydown', function(event) {

        var key = event.which || event.keyCode;
        var x = document.getElementById("text").innerText;
        var y = document.getElementById("text");

        if (key === 32 && x == "MUTE") { 

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "UNMUTE";

        } else if (key === 32 && x == "UNMUTE") {

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "MUTE";
        }
    });
}

var shadedText = document.querySelector('.shaded-text');
var texts = ["JOINING SERVER", "PREPARING ASSETS", "ESTABLISHING CONNECTION"];
var currentText = 0;

setInterval(function() {
currentText = (currentText + 1) % texts.length;
shadedText.classList.remove('fade-out');
void shadedText.offsetWidth;
shadedText.classList.add('fade-out');
setTimeout(function() {
shadedText.textContent = texts[currentText];
}, 1000);
}, 4000);

window.addEventListener('DOMContentLoaded', () => {
  console.log(`You are connecting to ${window.nuiHandoverData.serverAddress}`);

  
  document.querySelector('#namePlaceholder > span').innerText = window.nuiHandoverData.name;
});

(function welcometext() {
    var welcomes = ['Explore the mysteries of our new city.', 'Welcome to your new adventure.', 'Start your thrilling journey now!', 'Dive into your next great adventure!', 'Set sail on your newest quest!', ];
    var randomWelcome = Math.floor(Math.random() * welcomes.length);
    document.getElementById('welcomeDisplay').innerHTML = welcomes[randomWelcome];
  })();

  