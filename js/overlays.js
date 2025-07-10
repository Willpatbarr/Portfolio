// export function createNav() {
//     const nav = document.createElement("nav");
//     const ul = document.createElement("ul");

//     const links = [
//         { href: "index.html", text: "Home" },
//         { href: "resume.html", text: "Resume" },
//         { href: "projects.html", text: "Projects" },
//         { href: "about-me.html", text: "About Me" },
//         { href: "contact-me.html", text: "Contact Me" },
//     ];

//     links.forEach(({ href, text }) => {
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         a.href = href;
//         a.textContent = text;
//         li.appendChild(a);
//         ul.appendChild(li);
//     });

//     nav.appendChild(ul);
//     document.body.prepend(nav);
// }

export function createNav() {
    const navHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="about-me.html">About Me</a></li>
                <li><a href="contact-me.html">Contact Me</a></li>
            </ul>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
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
