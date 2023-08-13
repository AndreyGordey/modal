
window.onload = function() {
    var video = document.getElementById('myVideo');
    
    function togglePlay() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
    
    document.querySelector('.player-container').addEventListener('click', togglePlay);
  };