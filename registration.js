document.getElementById('username').addEventListener('input',
function(registration){
    var usernameValidation = false;
    let usernameElement = registration.target;
    let username = usernameElement.value;
    
    if("a" > username[0] || username[0]> "z" && "A" > username[0]|| username[0] > "Z") {
        usernameElement.classList.add('valid-text')
         usernameElement.classList.remove('invalid-text')
        console.log("Username has requirements")
        
    }
    else{
        usernameElement.classList.add('invalid-text')
        usernameElement.classList.remove('valid-text')
        console.error("Username must be with a-z or A-Z");
        usernameValidation = true;
    }
    if(username.length > 3){
        usernameElement.classList.add('valid-text')
        usernameElement.classList.remove('invalid-text')
        console.log("Strong Username")
    }
    else{
        usernameElement.classList.add('invalid-text')
        usernameElement.classList.remove('valid-text')
        usernameValidation = true;
    }
    
    let passwordElement = registration.target;
    let password = passwordElement.value;
    var num = /[0-9]/;
    var uppercaseLetters = /[A-Z]/;
    var specialcases = /[/ * - + ! @ # $ ^ & ~ [ ] ]/;
    var Repassword = document.getElementById("re-password").value;
    var passwordValidation = false;
    
    if(password.length > 8){
        passwordElement.classList.add('valid-text')
        passwordElement.classList.remove('invalid-text')
        console.log("Password fits length");
        passwordValidation = true;
    }
    else{
        passwordElement.classList.add('invalid-text')
        passwordElement.classList.remove('valid-text')
        console.error("Password must be 8 or more characters");
    }
    
    if (!uppercaseLetters.test(password)){
        passwordElement.classList.add('valid-text')
        passwordElement.classList.remove('invalid-text')
       console.log("Password has a uppercase letter in it");
       passwordValidation = true;
    }
    else{
        passwordElement.classList.add('invalid-text')
        passwordElement.classList.remove('valid-text')
        console.error("Password must have at least one uppercase letter [A-Z]");
    }
    if (!num.test(password)){
        passwordElement.classList.add('valid-text')
        passwordElement.classList.remove('invalid-text')
        console.log("Password has a number in it");
        passwordValidation = true;
    }
    else{
        passwordElement.classList.add('invalid-text')
        passwordElement.classList.remove('valid-text')
        console.error("Password must have at least one number [1-9]");
    }
    if (!specialcases.test(password)){
        passwordElement.classList.add('valid-text')
        passwordElement.classList.remove('invalid-text')
        console.log("Password has a special case in it");
        passwordValidation = true;
    }
    else{
        passwordElement.classList.add('invalid-text')
        passwordElement.classList.remove('valid-text')
        console.error("Password must have at least one special case [/ * - + ! @ # $ ^ & ~ [ ]]");
    }
    if (password !== Repassword){
        console.error("Password does not match");
    }
    else{
        passwordValidation = true;
    }

    if (usernameValidation && passwordValidation){
        document.getElementById("registrationForm").submit();
    }
    else{
        console.error("Not everything is complete. Complete all boxes to register.");

    }

    

});
