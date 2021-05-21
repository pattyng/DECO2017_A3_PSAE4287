//music citations
//https://www.bensound.com/royalty-free-music/track/little-idea

var playpause=document.getElementById("play");
var audio=document.getElementById('audio');
function togglePlayPause(){
  if (audio.paused || audio.ended){
    playpause.title="Pause";
    audio.play();
} else {
    playpause.title="Play";
    audio.pause();
  }
}