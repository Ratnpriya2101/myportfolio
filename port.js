const text = ["Web Developer", "Full Stack Developer","Python Developer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        document.querySelector(".type").textContent = current;

        if (j === text[i].length) isDeleting = true;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, 120);
}

type();
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent successfully!");

form.reset();

});