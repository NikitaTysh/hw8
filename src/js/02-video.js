console.log('start file 2');
const iframe = document.querySelector('iframe');
import Player from '@vimeo/player';
import  throttle  from 'lodash';
const player = new Player(iframe);
player.on('play', () => {
  if (localStorage.getItem('currentTime')) {
    player.setCurrentTime(localStorage.getItem('currentTime'));
  }
});
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('currentTime', data.seconds);
  }, 1000)
);
