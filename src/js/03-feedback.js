console.log('start 3th file');
import throttle from 'lodash.throttle';
const input = document.querySelector('.feedback-form');
const submit = document.querySelector('.feedback-form button');
let a;
submit.addEventListener('click', onClick);
const localData = {};
if (localStorage.getItem('data') !== null) {
  const parsedSettings = JSON.parse(localStorage.getItem('data'));
  input.elements.email.value = parsedSettings.email;
  input.elements.message.value = parsedSettings.message;
}
input.addEventListener('input', throttle(inputFunc, 50));
function inputFunc(e) {
  localData.email = e.currentTarget.elements.email.value;
  localData.message = e.currentTarget.elements.message.value;
  localStorage.setItem('data', JSON.stringify(localData));
}
function onClick(e) {
  e.preventDefault();
  input.reset();
  console.log(`email : ${JSON.parse(localStorage.getItem('data')).email}`);
  console.log(`message : ${JSON.parse(localStorage.getItem('data')).message}`);
  localStorage.clear();
}


// ментору -> подскажите как правильно очистить форму?
// если буде 100 полей , не прописывать же каждый в ручную
