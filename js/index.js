// js/index.js
import { createNav, createFooter } from './overlays.js';
import { featuredProjects } from './data.js';

createNav();
createFooter();

function renderFeaturedProjects() {
    const container = document.getElementById("featured-projects");
    if (!container) return;

    container.innerHTML = ""; // Clear placeholder content

    featuredProjects.forEach(project => {
        const anchor = document.createElement("a");
        anchor.href = `project-detail.html?id=${project.id}`;
        anchor.classList.add("featured-project");

        anchor.innerHTML = `
            <div class="image-wrapper">
                <img class="featured-project-screenshot" src="${project.imageSrc}" alt="${project.imageAlt}" />
            </div>
            <h3>${project.title}</h3>
            <p>${project.shortDescr}</p>
        `;

        container.appendChild(anchor);
    });
}

renderFeaturedProjects();