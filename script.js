//REGISTRATION FORM VALIDATION
/*const regForm = document.getElementById("registration-form");

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
}*/

const closeBtn = document.getElementById("closeBannerBtn");
const flashMessage = document.querySelector(".flash-message");

closeBtn.addEventListener("click", () => {
    flashMessage.style.display = "none"; 
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    const clickInsideMenu = mobileMenu.contains(event.target);
    const clickOnHamburger = hamburger.contains(event.target);

    if (!clickInsideMenu && !clickOnHamburger) {
        mobileMenu.classList.remove("active");
    }
});

const scrollContainer = document.querySelector(".product-scroll");
const arrows = document.querySelectorAll(".scroll-arrow");

arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        const direction = arrow.classList.contains("left") ? -300 : 300;
        scrollContainer.scrollBy({left: direction, behavior: "smooth"});
    });
});


const wishlistBtns = document.querySelectorAll(".wishlist-icon");

wishlistBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("is-toggled");
    });
})


