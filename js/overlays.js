

export function createNav() {
    const navHTML = `
        <nav>
            <button id="nav-toggle" aria-label="Toggle Navigation">☰</button>
            <ul id="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact-me.html">Contact Me</a></li>
            </ul>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Add toggle functionality
    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.getElementById("nav-toggle");
        const navLinks = document.getElementById("nav-links");

        if (toggle && navLinks) {
            toggle.addEventListener("click", () => {
                navLinks.classList.toggle("show");
            });
        }
    });
}


export function createFooter() {
    const footerHTML = `
        <footer id="site-footer">
            <div class="footer-inline">
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank">LinkedIn</a>
                <a href="https://github.com/your-github" target="_blank">GitHub</a>
                <a href="mailto:your.email@example.com">Email</a>
                <span>&copy; William Barr 2025</span>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

