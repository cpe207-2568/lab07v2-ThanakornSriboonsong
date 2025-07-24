// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PassWordInput = document.querySelector("#password-input")
const ConFirmPassInput = document.querySelector("#password-confirm-input")
// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};
PassWordInput.onkeyup = () => {
  PassWordInput.classList.remove("is-valid");
  PassWordInput.classList.remove("is-invalid");
};
ConFirmPassInput.onkeyup = () => {
  ConFirmPassInput.classList.remove("is-valid") ;
  ConFirmPassInput.classList.remove("is-invalid") ;
}

// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false ;
  isEmailOk = false ;
  isPassWordOk = false ;
  isPassWordTheSame = false ;

  // validate first name
  if (firstNameInput.value === "" ) {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }
   if (lastNameInput.value === "" ) {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  if (validateEmail(EmailInput.value) !== true ) {
    EmailInput.classList.add("is-invalid");
  } else {
    EmailInput.classList.add("is-valid");
    isEmailOk = true;
  }
  if ( PassWordInput.value.length < 6 ) {
    PassWordInput.classList.add("is-invalid");
  } else {
    PassWordInput.classList.add("is-valid");
    isPassWordOk = true;
  }
  if( ConFirmPassInput.value !== PassWordInput.value ){
    ConFirmPassInput.classList.add("is-invalid") ;
  } else {
    ConFirmPassInput.classList.add("is-valid");
    isPassWordTheSame = true ;
  }
  

  // validate last name

  // validate email

  // validate password

  // validate confirm password

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPassWordOk && isPassWordTheSame) alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  EmailInput.value = "";
  PassWordInput.value = "";
  ConFirmPassInput.value = "";

  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
  PassWordInput.classList.remove("is-valid");
  PassWordInput.classList.remove("is-invalid");
  ConFirmPassInput.classList.remove("is-valid") ;
  ConFirmPassInput.classList.remove("is-invalid") ;
}