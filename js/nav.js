export function createNav() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const links = [
        { href: "index.html", text: "Home" },
        { href: "resume.html", text: "Resume" },
        { href: "projects.html", text: "Projects" },
        { href: "about-me.html", text: "About Me" },
        { href: "contact-me.html", text: "Contact Me" },
    ];

    links.forEach(({ href, text }) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = href;
        a.textContent = text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    document.body.prepend(nav);
}

