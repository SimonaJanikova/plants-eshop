//REGISTRATION FORM VALIDATION
const regForm = document.getElementById("registration-form");

regForm.addEventListener("submit", function (e) {
    e.preventDefault();

const email = document.getElementById("username-reg").value.trim();
const password = document.getElementById("password").value.trim();
const passwordRepeat = document.getElementById("password-repeat").value.trim();


    if(!email || !password || !passwordRepeat) {
        showError("Všetky polia su povinné!")
        return;
    }

    if(password !== passwordRepeat) {
        showError("Heslá sa musia zhodovať!")
    }
    return;
})

function showError(message) {
    const errorContainer = document.getElementById("error-container");
    const errorMsg = document.createElement("p");
    errorMsg.textContent = message;

    errorContainer.innerHTML = "";
    errorContainer.appendChild(errorMsg);
}