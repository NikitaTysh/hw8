console.log('start 3.01');
import throttle from 'lodash.throttle';
const input = document.querySelector('.feedback-form');
const submit = document.querySelector('.feedback-form button');
submit.addEventListener('click', onClick);
const localData = {};
if (localStorage.getItem('data') !== null) {
  const parsedSettings = JSON.parse(localStorage.getItem('data'));
  input.elements.email.value = parsedSettings.email;
  input.elements.message.value = parsedSettings.message;
}
input.addEventListener('input', throttle(inputFunc, 500));
function inputFunc(e) {
  console.dir();
  if(e.target.localName==='input')
  {
    localData.email = e.target.value;
    
  }
  else 
  localData.message = e.target.value;
  localStorage.setItem('data', JSON.stringify(localData));
}
function onClick(e) {
  e.preventDefault();
  input.reset();
  console.log(JSON.parse(localStorage.getItem('data')))
  localStorage.clear();
}

