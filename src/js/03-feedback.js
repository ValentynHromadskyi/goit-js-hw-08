import throttle from 'lodash.throttle';

const refs = {
  formElement: document.querySelector('.feedback-form'),
};

refs.formElement.addEventListener('input', throttle(onformInput, 500));
refs.formElement.addEventListener('submit', onformSubmit);

let feedback = {};

function onformInput(event) {
  feedback[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

changeInputs();

function changeInputs() {
  const feedbackParce = JSON.parse(localStorage.getItem('feedback-form-state'));
  feedback = { ...feedbackParce };
  refs.formElement.email.value = feedback.email || '';
  refs.formElement.message.value = feedback.message || '';
}

function onformSubmit(event) {
  event.preventDefault();
  if (refs.formElement.message.value !== "" && refs.formElement.email.value !== "") {
    console.log(feedback);
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    return
  } 
    alert("Всі поля повинні бути заповнені");
     }

