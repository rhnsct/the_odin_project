function checkPassword(pass) {
    let password = document.getElementById('password').value;
    if (pass.value === password) {
        pass.setCustomValidity("");
    }   else {
        pass.setCustomValidity("Invalid field.");
    }
}