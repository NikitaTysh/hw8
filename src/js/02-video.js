console.log('start file 2.01');
const iframe = document.querySelector('iframe');
import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';
const player = new Player(iframe);
if (localStorage.getItem('currentTime')) {
  player.setCurrentTime(localStorage.getItem('currentTime'));
}
player.on('play', () => {});
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('currentTime', data.seconds);
    console.log(`time: ${localStorage.getItem('currentTime')}`);
  }, 1000)
);
