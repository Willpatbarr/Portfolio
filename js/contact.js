// Get them overlays in here
import { createNav, createFooter } from './overlays.js';

createNav();
createFooter();


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

//enforce the correct nubers and suymbols
//no letters up in this jon
const phoneInput = document.getElementById("phone");
if (phoneInput) {
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/[^0-9\-+() ]/g, "");
    });
}

const form = document.getElementById("contact-form");

if (form && phoneInput) {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Stop the form from trying to submit if empty

        const phoneValue = phoneInput.value.trim();
        const phonePattern = /^[0-9\-+() ]*$/;

        if (phoneValue && !phonePattern.test(phoneValue)) {
            alert("Please enter a valid phone number (only digits, spaces, +, -, and parentheses).");
            phoneInput.focus();
            return;
        }

        // Clear localStorage, empty that jon
        formFields.forEach(field => localStorage.removeItem(`contact-${field}`));

        window.location.href = `thanks.html`;
    });
}
