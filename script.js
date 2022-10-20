//Load in reusable HTML components (Header & Footer).

const footer = document.querySelector("#footer");

fetch('footer.html')
    .then(response => response.text())
    .then(text => footer.innerHTML = text);

const header = document.querySelector('#header');

fetch('header.html')
    .then(response => response.text())
    .then(text => header.innerHTML = text);


//Open the menu when the hamburger is clicked.

setTimeout(() => {
    const hamburger = document.querySelector("#navbar__menu__icon");
    const menuLinks = document.querySelector(".navbar__menu__links");
    const shadow = document.querySelector(".navbar__menu__shadow");
    const body = document.querySelector("body");
    hamburger.addEventListener("click", () => {
        menuLinks.classList.toggle("links");
        shadow.classList.toggle("shadow");
        body.classList.toggle("overflow-hidden");
        })
    shadow.addEventListener("click", () => {
        menuLinks.classList.toggle("links");
        shadow.classList.toggle("shadow");
        body.classList.toggle("overflow-hidden");
    })
},"1000")

//Form behavior

const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const phoneInput = document.querySelector("#phone-input");
const inputs = document.querySelectorAll("input")
const textField = document.querySelector("#text-input");
const contactForm = document.querySelector("#form-contact");

//Handle the placeholder text in the textarea

textField.addEventListener("click", () => {
    if(textField.value === "Your message"){
        textField.value = "";
    }
})

textField.addEventListener("focusout", () => {
    if(textField.value === ""){
        textField.value = "Your message";
    }
})

//Handle error states when the form is submitted

const nameErr = document.querySelector("#name-error");
const emailErr = document.querySelector("#email-error");
const phoneErr = document.querySelector("#phone-error");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        nameErr.classList.add("show");
    }
    if(emailInput.value === ""){
        emailErr.classList.add("show");
    }
    if(phoneInput.value === ""){
        phoneErr.classList.add("show");
    }
})

//Remove error states when focused

nameInput.addEventListener("focus", () => {
    nameErr.classList.remove("show");
})
emailInput.addEventListener("focus", () => {
    emailErr.classList.remove("show");
})
phoneInput.addEventListener("focus", () => {
    phoneErr.classList.remove("show");
})

//Add filled styling when filled and remove it when it is empty

inputs.forEach(input => {
    input.addEventListener("focusout", () => {
        if(input.value != ""){
            input.classList.add("filled");
        } else {
            input.classList.remove("filled");
        }
    })
})

inputs.forEach(input => {
    input.addEventListener("keydown", event => {
        setTimeout(() => {
            if(input.value === ""){
                input.classList.remove("filled");
            };
        }, 100)
    
    })
})