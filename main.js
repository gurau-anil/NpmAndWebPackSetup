var validator = require("email-validator");
 
let emailValue = document.getElementById("email-input");
let validateBtn = document.getElementById("validate-btn");
validateBtn.addEventListener("click", ()=>{
    let message = validator.validate(emailValue.value) ? "Email is valid": "Invalid Email"
    alert(message)
})