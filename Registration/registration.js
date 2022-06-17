let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let psw1 = document.getElementById("psw1");
let psw2 = document.getElementById("psw2");
const data = { fname, lname, email, psw1, psw2 };
const myjson = JSON.stringify(data);
console.log(myjson);

function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("must enter email address! \n and it should follow the format");
  //alert("You have entered an invalid email address!")
  return false;
}
