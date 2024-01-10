let formdata = document.querySelector('form');
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("emailadress");
var comment = document.getElementById("subject");
var warningtext = document.getElementById("warning")
class connection{
  constructor() {
  }
  post(Data){
    fetch("http://127.0.0.1:3000/comment/", {
      method: 'POST',
      body: Data,
      mode: 'no-cors',
    }).catch(function () {
      console.log("connection error");
    });
  }
  networktest(){
    return new Promise((resolve, reject ) => {
      fetch("http://127.0.0.1:3000/comment/", {
      }).then(response => {
        if(!response.ok){
        reject('Correction Error');
        } else {
        resolve('true');
        }
      }) 
      .catch(error => {
         reject('Error ' + error.message);
      });
     })
  }
} 
class verification extends connection{
  constructor() {
    super();
  }   
  connectionTest(FormData) {
   this.networktest()
   .then((value) =>{
    console.log(value);
    if(value == "true"){
      warningtext.style.visibility = 'hidden';
      alert("Thank you! Your message has been received!")
      super.post(FormData);
    }
   }).catch(error =>{
    console.log("no good");
    warningtext.innerHTML = "Sorry there was a connection error please try again later!";
    warningtext.style.visibility = 'visible';
   });
  }
  formverification(Form) {
    if (Form.get("fname") != "" && Form.get("email") != "" && Form.get("email").includes("@") == true && Form.get("comment") != "") {
      this.connectionTest(new URLSearchParams(Form));
    } else {
      warningtext.innerHTML = "Please check the input fields";
      warningtext.style.visibility = 'visible';
      window.setTimeout(function(){
        warningtext.style.visibility = 'hidden';
      }, 20000);
      if(Form.get("fname") === ""){
        firstname.style.backgroundColor = 'rgba(' + 255 + ',' + 99 + ',' + 71 + ',' + 0.5 + ')'
      } 
      if (Form.get("email") === ""){
        email.style.backgroundColor = 'rgba(' + 255 + ',' + 99 + ',' + 71 + ',' + 0.5 + ')'
      } else if(Form.get("email").includes("@") == false){
        email.style.backgroundColor = 'rgba(' + 255 + ',' + 99 + ',' + 71 + ',' + 0.5 + ')'
        warningtext.innerHTML = "Please check the written email adress!";
      }
      if (Form.get("comment") === "") {
        subject.style.backgroundColor = 'rgba(' + 255 + ',' + 99 + ',' + 71 + ',' + 0.5 + ')'
      }
      window.setTimeout(function(){
       firstname.style.backgroundColor = 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 0.8 + ')';
       email.style.backgroundColor = 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 0.8 + ')';
       subject.style.backgroundColor = 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 0.8 + ')';
      }, 8000);
    }
  }
}
formdata.addEventListener('submit', async event => {
  event.preventDefault();
  const Data = new FormData(formdata);
  VerifiTest.formverification(Data);
}
);
function Images() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      dog.src = result.message
    })
}
function init() {
  VerifiTest = new verification();
}