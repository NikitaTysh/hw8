console.log('start 3.03');
import throttle from 'lodash.throttle';
const input = document.querySelector('.feedback-form');
const submit = document.querySelector('.feedback-form button');
submit.addEventListener('click', onClick);
if (localStorage.getItem('data')) {
  const {email,message} = JSON.parse(localStorage.getItem('data'));
  input.elements.email.value = email || '';
  input.elements.message.value = message || '';
}
input.addEventListener('input', throttle(inputFunc, 500));
function inputFunc(e) {
const userData = JSON.parse(localStorage.getItem('data')) || {}
userData[e.target.name] = e.target.value;
localStorage.setItem('data',JSON.stringify(userData))
}
function onClick(e) {
  e.preventDefault();
  input.reset();
  console.log(JSON.parse(localStorage.getItem('data')))
  localStorage.clear();
}

