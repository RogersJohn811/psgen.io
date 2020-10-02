// var specialChar = ["!", "@", ];
// var upperCase = [];
// var lowerCase = [];
// var numeric = [];

// function password() {
//     var passLength  = prompt("How long do you want your password?");

// if (isNaN(passLength) === true){
//     alert("This is not a number")
//     return;
// }

// if (passlength < 8 && passLength > 128){
//   alert("At least 8 characters in the password");
//   return;
// }

// var specialCharacters = confirm("Must conatin special characters");
// var upperCaseChar = confirm("")
// var lowerCaseChar = confirm("")
// var numericChar = confirm("")

// if (specialCharacters === false && upperCaseChar === false lowerCaseChar === false && numericChar === false){
//   alert("Must select at least one character type")
//   return;
// }
// }

//generate random password
function generate(){


  //set password length/complexity
  let complexity = document.getElementById("slider")

  //possible password vales
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz1234567890!@#$%^&*()_+";

  let password = "";

  //create for loop to chose password characters 
  for(var i = 0; i <= complexity; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(valuess.length - 1)));

  }

  //add password to textbox/display area
  document.getElementById("display").value = password;

  //add password to previously generated passwords section
  document.getElementById("lastNums").innerHTML += password + "<br />";

}