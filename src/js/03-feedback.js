console.log('start 3th file');
import { throttle } from 'lodash';
const input = document.querySelector('.feedback-form');
const submit = input.querySelector('button');
submit.addEventListener('click', onClick);
console.dir(input);
const localData = {};
if (localStorage.getItem('data') !== null) {
  const parsedSettings = JSON.parse(localStorage.getItem('data'));
  input.elements.email.value = parsedSettings.email;
  input.elements.message.value = parsedSettings.message;
}
input.addEventListener('input', throttle(inputFunc, 500));
function inputFunc(e) {
  localData.email = e.currentTarget.elements.email.value;
  localData.message = e.currentTarget.elements.message.value;
  localStorage.setItem('data', JSON.stringify(localData));
}
function onClick() {
  input.email.value = '';
  input.message.value = '';
  localStorage.clear();
  
}
// ментору -> подскажите как правильно очистить форму?
// если буде 100 полей , не прописывать же каждый в ручную
