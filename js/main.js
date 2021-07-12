const form = document.querySelector('#form-data');
form.addEventListener('submit', event => {
    event.preventDefault();
    const firstName = form.firstName
    const lastName = form.lastName
    const emailAddress = form.emailAddress
    const password = form.password
    if(firstName.value.trim()==""){
        firstName.classList.add('form-input-error');
        let iconError = firstName.nextSibling.nextSibling;
        let messageError = firstName.nextSibling.nextSibling.nextSibling.nextSibling;
        iconError.style.display = "block";
        messageError.style.display = "block";
        firstName.value = ""
    }else{
        firstName.classList.remove('form-input-error');
        let iconError = firstName.nextSibling.nextSibling;
        let messageError = firstName.nextSibling.nextSibling.nextSibling.nextSibling;
        iconError.style.display = "none";
        messageError.style.display = "none";
    }
    if(lastName.value.trim()==""){
        lastName.classList.add('form-input-error');
        let iconError = lastName.nextSibling.nextSibling;
        let messageError = lastName.nextSibling.nextSibling.nextSibling.nextSibling;
        iconError.style.display = "block";
        messageError.style.display = "block";
        lastName.value = ""
    }else{
        lastName.classList.remove('form-input-error');
        let iconError = lastName.nextSibling.nextSibling;
        let messageError = lastName.nextSibling.nextSibling.nextSibling.nextSibling;
        iconError.style.display = "none";
        messageError.style.display = "none";
    }
    if(emailAddress.value.trim()==""){
        emailAddress.classList.add('form-input-error');
        let iconError = emailAddress.nextSibling.nextSibling;
        let messageError = emailAddress.nextSibling.nextSibling.nextSibling.nextSibling;
        iconError.style.display = "block";
        messageError.style.display = "block";
        emailAddress.value = ""
    }else{
        emailAddress.classList.remove('form-input-error');
        let iconError = emailAddress.nextSibling.nextSibling;
        let messageError = emailAddress.nextSibling.nextSibling.nextSibling.nextSibling;
        iconError.style.display = "none";
        messageError.style.display = "none";
    }
    if(password.value.trim()==""){
        password.classList.add('form-input-error');
        let iconError = password.nextSibling.nextSibling;
        let messageError = password.nextSibling.nextSibling.nextSibling.nextSibling;
        iconError.style.display = "block";
        messageError.style.display = "block";
        password.value = ""
    }else{
        password.classList.remove('form-input-error');
        let iconError = password.nextSibling.nextSibling;
        let messageError = password.nextSibling.nextSibling.nextSibling.nextSibling;
        iconError.style.display = "none";
        messageError.style.display = "none";
    }

});