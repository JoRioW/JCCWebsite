const name_error = document.getElementById("error-name")
const phone_error = document.getElementById("error-phone")
const email_error = document.getElementById("error-email")
const message_error = document.getElementById("error-message")
const checkbox_error = document.getElementById("error-check")
const submit_error = document.getElementById("error-submit")

function validation_name(){
const name = document.getElementById("username").value
    
    if(name.length < 5){
        name_error.innerHTML = "*Name must greater than 5 character"
        return false
    }
        
    name_error.innerHTML = "<i>Name correct</i>"
    return true
}

function validation_phone(){
    const phone = document.getElementById("userphone").value

    if(isNaN(phone) === true){
        phone_error.innerHTML = "*Phone number must be in number"
        return false
    }
    else if(phone.length < 10 || phone.length > 12){
        phone_error.innerHTML = "*Phone number must between 10 - 12 character"
        return false
    }

    phone_error.innerHTML = "<i>Phone number correct</i>"
    return true
}

function validation_email(){
    const email = document.getElementById("useremail").value

    if(!email.endsWith("@gmail.com")){
        email_error.innerHTML = "*Email must ends with @gmail.com"
        return false
    }

    email_error.innerHTML = "<i>Email correct</i>"
    return true
}

function validation_message(){
    const message = document.getElementById("usermessage").value

    if(message.length < 50){
        message_error.innerHTML = "*Write a message with at least 50 characters"
        return false
    }

    message_error.innerHTML = "<i>Message correct</i>"
    return true
}

function validation_email_phone(){
    const check_email = document.getElementById("check-email").checked
    const check_phone = document.getElementById("check-phone").checked

    if(!check_email && !check_phone){
        checkbox_error.innerHTML = "*Must choose 1, email or phone"
        return false
    }else if(check_email && check_phone){
        checkbox_error.innerHTML = "*Must choose 1, email or phone"
        return false
    }

    checkbox_error.innerHTML = "<i>Correct</i>"
    return true
}

function validation_all(){
    if(!validation_name() || !validation_phone() || !validation_email() || !validation_message() || !validation_email_phone()){
        submit_error.innerHTML = "*FIll the blank column"
        return false
    }
}





