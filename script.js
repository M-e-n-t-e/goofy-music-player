let progress = document.querySelector(".progress");
let song = document.querySelector(".song");
let ctrlIcon = document.querySelector(".ctrlIcon");
let music_volume = document.querySelector(".volume");
let songCover = document.querySelector(".song-img");
let down_and_mute = document.getElementById("down-and-mute");
let runner = document.querySelector(".runner");
let run = document.querySelector(".run");
let sorry = document.querySelector(".sorry");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        songCover.classList.remove("active");
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        songCover.classList.add("active");
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
function setVolume() {
    song.volume = music_volume.value / 100;
}
if (music_volume === 0) {
    // down_and_mute.classList.remove('fa-volume-down');
    alert("heehee");
}
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};
function reset() {}
run.addEventListener('click', () => {
    sorry.classList.toggle('active')
})
runner.addEventListener('click', () => {
    sorry.classList.toggle("active");
})