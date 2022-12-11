console.log('start file 223');
const iframe = document.querySelector('iframe');
import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';
const player = new Player(iframe);
if (localStorage.getItem('currentTime')) {
  player.setCurrentTime(localStorage.getItem('currentTime'));
}
player.on('play', () => {
  console.log(`time: ${localStorage.getItem('currentTime')}`);
  if (localStorage.getItem('currentTime')) {
    player.setCurrentTime(localStorage.getItem('currentTime'));
  }
});
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('currentTime', data.seconds);
    console.log(`time: ${localStorage.getItem('currentTime')}`);
  }, 1000)
);
