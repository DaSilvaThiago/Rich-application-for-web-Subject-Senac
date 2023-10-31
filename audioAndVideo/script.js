const video = document.getElementById("video");
const audio = document.getElementById("audio");


const startVideo = document.getElementById("startVideo");
const pauseVideo = document.getElementById("pauseVideo");
const muteVideo = document.getElementById("muteVideo");
const rewindButton = document.getElementById("rewindButton");
const advanceVideo = document.getElementById("advanceVideo");
const fullScreen = document.getElementById("fullScreen");



const reproduceAudio = document.getElementById("reproduceAudio");
const pauseAudio = document.getElementById("pauseAudio");
const muteAudio = document.getElementById("muteAudio");
const rewindAudio = document.getElementById("rewindAudio");
const advanceAudio = document.getElementById("advanceAudio");




startVideo.addEventListener('click', function(){
    video.play();
});

pauseVideo.addEventListener('click', function(){
    video.pause();
});

muteVideo.addEventListener('click', function(){
    video.muted = (video.muted)? false : true;
});

rewindButton.addEventListener('click', function(){
    video.currentTime -= 5;
});

advanceVideo.addEventListener('click', function(){
    video.currentTime += 5;
});

fullScreen.addEventListener('click', function(){
        video.requestFullscreen();
});




reproduceAudio.addEventListener('click', function(){
    audio.play();
});

pauseAudio.addEventListener('click', function(){
    audio.pause();
});

muteAudio.addEventListener('click', function(){
    audio.muted = (video.muted)? false : true;
});

rewindAudio.addEventListener('click', function(){
    audio.currentTime -= 5;
});

advanceAudio.addEventListener('click', function(){
    audio.currentTime += 5;
});
