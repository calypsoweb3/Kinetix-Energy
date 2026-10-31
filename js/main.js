const menuToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
        navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            navigation.classList.remove("is-open");
        }
    });
}
const demoForm = document.querySelector("[data-demo-form]");
const formStatus = document.querySelector("[data-form-status]");

if (demoForm instanceof HTMLFormElement && formStatus instanceof HTMLElement) {
    demoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.textContent = "Your details are ready.";
    });
}