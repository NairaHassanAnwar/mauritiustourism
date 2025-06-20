//Form Validation
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    
  // Defining error variables with a default value
    var nameErr = emailErr  = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr ) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" ;
    }
};
 function validatForm2(){
	var Letter = document.myform.Letter.value;  
  if (Letter==null || Letter==""){  
  	alert("Message can't be blank");  
 	 return false;  
}
else if(Letters != /^[A-Za-z]+$/){  
  alert("Please input alphabet characters only.");  
  return false;  
  }  }; 
