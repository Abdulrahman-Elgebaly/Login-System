const signUpName = document.getElementById("signUpName");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPass = document.getElementById("signUpPass");
const userNameAlert = document.getElementById("userNameAlert");
const emailAlert = document.getElementById("emailAlert");
const passwordAlert = document.getElementById("passwordAlert");
const btn = document.getElementById("btn");

let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];



function add(){
  userInputsValidations()
  isExist()
if(userInputsValidations() ==true && isExist() == false){
    const obj ={
      name:signUpName.value,
      email:signUpEmail.value,
      password:signUpPass.value
    }
    user.push(obj)

    localStorage.setItem('user',JSON.stringify(user))
    window.location.href = "index.html";
  }else if(isExist() == true){
  document.getElementById('message').classList.remove('d-none')
    document.getElementById('message').innerHTML= `<p class="text-center"> User already exists!</p>`
  }else {
    return false
  }

}

function userNameValidation(){
let regex =/^(?=.{3,}$)[A-Za-z][A-Za-z0-9._]*(?: [A-Za-z0-9._]+)*\s*$/
if (regex.test(signUpName.value)== true && signUpName.value != ''){
  signUpName.classList.add('is-valid');
  signUpName.classList.remove('is-invalid');
  userNameAlert.classList.add('d-none')
  return true
}else{
  signUpName.classList.add('is-invalid');
  userNameAlert.classList.remove('d-none')
  userNameAlert.innerHTML= "At least 3 characters long, may contain dots and underscores" 
  return false
}
}
function userEmailValidation(){
  let regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(regex.test(signUpEmail.value) == true && signUpEmail.value != ''){
      signUpEmail.classList.add('is-valid');
        signUpEmail.classList.remove('is-invalid');
      emailAlert.classList.add('d-none')
  return true
  }else{
     signUpEmail.classList.add('is-invalid');
    emailAlert.classList.remove('d-none')  
    emailAlert.innerHTML= "Please enter a valid email address (example: name@example.com)"
  return false
  }
}
function userPasswordValidation(){
  let regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if(regex.test(signUpPass.value) == true && signUpPass.value != ''){
      signUpPass.classList.add('is-valid');
          signUpPass.classList.remove('is-invalid');
      passwordAlert.classList.add('d-none')
  return true
  }else{
      signUpPass.classList.add('is-invalid');
    passwordAlert.classList.remove('d-none')  
    passwordAlert.innerHTML= "Password must have 8+ characters with uppercase, lowercase, number, and special character."
  return false
  }
}
function userInputsValidations(){
userNameValidation()
userEmailValidation()
userPasswordValidation()
if(userNameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true){
  return true 
}else{
  return false
}
}

function isExist(){
for (let i=0 ; i < user.length ; i++){
if(user[i].name.toLowerCase() == signUpName.value.toLowerCase() || user[i].email.toLowerCase() == signUpEmail.value.toLowerCase() ){
return true
}
}
return false
}

document.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    add();
  }
});
