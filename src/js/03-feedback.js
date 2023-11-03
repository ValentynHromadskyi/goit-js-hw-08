import throttle from 'lodash.throttle';

const refs = {
  formElement: document.querySelector('.feedback-form'),
};

refs.formElement.addEventListener('input', throttle(onformInput, 500));
refs.formElement.addEventListener('submit', onformSubmit);

function onformInput(event) {
  const key = event.target.name;
  const value = event.target.value;
  localStorage.setItem(key, value);
}

function onLoad() {
  const email = localStorage.getItem('email');
  const message = localStorage.getItem('message');
  refs.formElement.email.value = email || '';
  refs.formElement.message.value = message || '';
}
onLoad();

function onformSubmit(event) {
  event.preventDefault();
  const email = refs.formElement.email.value;
  const message = refs.formElement.message.value;
  const result = {
    email,
    message,
  };
  console.log(result);
  event.target.reset();
  localStorage.removeItem('email'), localStorage.removeItem('message');
};
