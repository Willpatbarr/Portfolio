
const formFields = ["email", "phone", "message"];

window.addEventListener("DOMContentLoaded", () => {
    formFields.forEach(field => {
        const saved = localStorage.getItem(`contact-${field}`);
        if (saved) {
            const el = document.getElementById(field);
            if (el) el.value = saved;
        }
    });
});

formFields.forEach(field => {
    const input = document.getElementById(field);
    if (input) {
        input.addEventListener("input", (e) => {
            localStorage.setItem(`contact-${field}`, e.target.value);
        });
    }
});

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", () => {
        formFields.forEach(field => localStorage.removeItem(`contact-${field}`));
    });
}
