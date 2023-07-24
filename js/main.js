let loginEmail =document.getElementById("loginEmail")
let loginPassword =document.getElementById("loginPassword")
let loginRequired =document.getElementById("required-login")
let loginBtn =document.getElementById("login-btn")
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let signUpName =document.getElementById("signUpName")
let signUpEmail =document.getElementById("signUpEmail")
let signUpPassword =document.getElementById("signUpPassword")
let signUpRequired =document.getElementById("signUpRequired")
let signUpBtn =document.getElementById("signUp-btn")
// ***********************************************************************************************************


let UsersList;
if(localStorage.users != null){
    UsersList = JSON.parse(localStorage.users)
}else{
    UsersList=[]
}


function addUser() {
    if (exist()) {
      displayExist();
      return;
    }
    if (chekIsEmptySignUp()) {
      let user = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value,
      };
      UsersList.push(user);
      localStorage.setItem("users", JSON.stringify(UsersList));
      displaySuccess();
      clearForm();
    } else {
      displayRequirmentSignUp();
    }
  }

function searchUser(){
    if(checkEmptySignIn()){
        displayRequirment();
        return;
    }
    if(existlogin()){
        return;
    }
    displayInCorrect();
}




function exist(){
    for(let i=0 ; i<UsersList.length; i++){
        if(UsersList[i].email==signUpEmail.value){
            return true;
        }
    }
    return false;
}



function welcome(){
    document.getElementById("welcome").innerHTML = `Welcome ${JSON.parse(localStorage.homeList)}`;
}




function existlogin(){
    for(let i=0; i<UsersList.length; i++){
        if(UsersList[i].email==loginEmail.value && UsersList[i].password==loginPassword.value){
            let name = UsersList[i].name;
            localStorage.setItem("homeList",JSON.stringify(name));
            location.replace("home.html");
            return true;
        }
    }
}


function clearForm(){
    signUpName.value ="";
    signUpEmail.value ="";
    signUpPassword.value ="";
}


function chekIsEmptySignUp(){
    if(signUpName.value !="" &&signUpEmail.value !="" &&signUpPassword.value !="" ){
        return true
    }else{
        return false
    }
}



function checkEmptySignIn(){
    if(loginEmail.value =="" ||loginPassword.value =="" ){
        return true
    }else{
        return false
    }
}



//!>>>>>>>>>>>>>>>>>>>>>>>>>>>> messages***********************************************
function displayRequirment(){
    loginRequired.innerHTML=`<span class="text-danger">All inputs is required</span>`
}
function displayExist(){
    signUpRequired.innerHTML=`<span class=' text-danger'>email already exists</span>`;

};

function displayInCorrect(){
    loginRequired.innerHTML=`<span class="text-danger">incorrect email or password</span>`

}

function displayRequirmentSignUp(){
    signUpRequired.innerHTML=`<span class="text-danger">All inputs is required</span>`
}

function displaySuccess(){
    signUpRequired.innerHTML=`<span class="text-success fw-bold">Success</span>`
}
