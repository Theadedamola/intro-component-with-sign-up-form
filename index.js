const form = document.querySelector("form");
const firstName = form.querySelector(".first-name");
const firstNameInput = firstName.querySelector("#first-name")
const lastName = form.querySelector(".last-name");
const lastNameInput = lastName.querySelector("#last-name");
const email = form.querySelector(".email");
const emailInput = email.querySelector("#email");
const password = form.querySelector(".password")
const passwordInput = password.querySelector("#password")


function checkFirstName() {
    if (firstNameInput.value === ""){
        $("#first-name").addClass("input-error");
        $(".fn-error").show();
    } else {
        $(".fn-error").hide();
        $("#first-name").removeClass("input-error");
    }
}
function checkLastName() {
    if (lastNameInput.value === ""){
        $("#last-name").addClass("input-error");
        $(".ln-error").show();
    } else {
        $(".ln-error").hide();
        $("#last-name").removeClass("input-error");
    }
}
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        $("#email").addClass("input-error");
        $(".e-error").show(); 
        $("#email").attr("placeholder", "email@example/com").css("::placeholder", "red");
    } else {
        $("#email").removeClass("input-error");
        $(".e-error").hide(); 
    }
}
function checkPassword() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordInput.value === "") {
        $("#password").addClass("input-error");
        $(".p-error").show();
    } else if (passwordInput.value.match(passPattern)){
        $("#password").addClass("input-error");
        $(".p-error").show(); 
    } else if (passwordInput.value.length < 8) {
        $("#password").addClass("input-error");
        $(".p-error").show();
        $(".p-error .error").html("<span><img src=images/icon-error.svg width=12px><em>Password not long enough</em>");
    } else {
        $("#password").removeClass("input-error");
        $(".p-error").hide(); 
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();

    firstNameInput.addEventListener("keyup", checkFirstName);
    lastNameInput.addEventListener("keyup", checkLastName);
    emailInput.addEventListener("keyup", checkEmail);
    passwordInput.addEventListener("keyup", checkPassword);
})



$(".submit").hover(function(){
    $(".submit").addClass("button-hover")
}, function(){
    $(".submit").removeClass("button-hover")
})

