import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';
const REFRESH_TIME = 500;

const form = document.querySelector('.feedback-form');

const email = form.elements.email;
const message = form.elements.message;

const inputDetails = saveMessage();

// track input and save to local storage
function saveInput(key, value) {
    inputDetails[key] = value;
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(inputDetails));
  }

// save input name & value in storage
function formInput(event) {
   saveInput(event.target.name, event.target.value); 
  }

// to avoid the script crashing
function saveMessage() {
  try {
    return JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)) || {};
  } catch (error) {
    console.log(
      `${error.name}: ${error.message} - Ooops error.`
    );
  }
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}
// task 2 
function updateOutput() {
  if (inputDetails) {
    email.value = inputDetails.email || "";
    message.value = inputDetails.message || "";
  }
}
// submit form & console log result
function submitForm(event) {
  event.preventDefault();

  console.log(inputDetails);
  
// task 3
  localStorage.removeItem(FEEDBACK_FORM_STATE);
  event.target.reset();
}

updateOutput();

// task 4 refresh storage every 500ms
form.addEventListener('input', throttle(formInput, REFRESH_TIME));
form.addEventListener('submit', submitForm);