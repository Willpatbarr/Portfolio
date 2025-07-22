// Get them overlays in here
import { createNav, createFooter } from './overlays.js';
//get the data in
import { fullProjects } from './data.js';


//render the overlays
createNav();
createFooter();


//render the project tiles
function renderProjects() {
    const container = document.getElementById("projects");
    if (!container) return;

    // container.innerHTML = "";
    
    fullProjects.forEach(project => {
        const link = document.createElement("a");
        link.href = `project-detail.html?id=${project.id}`;
        link.classList.add("proj-link");
    
        const tile = document.createElement("div");
        tile.classList.add("proj-tile");
    
        tile.innerHTML = `
            <div class="image-wrapper">
                <img class="proj-img" src="${project.imageSrc}" alt="Screenshot of ${project.title}">
            </div>
            <div class="project-content">
                <h3 class="proj-title">${project.title}</h3>
                <p class="proj-short-desc">${project.shortDescr}</p>
                ${project.languages || project.frameworks ? `
                <div class="proj-tags">
                    ${project.languages ? `<p class="language">${project.languages}</p>` : ""}
                    ${project.frameworks ? `<p class="frameworks">${project.frameworks}</p>` : ""}
                </div>
                ` : ""}
            </div>
            `;
    
        link.appendChild(tile);
        container.appendChild(link);
    });
}

renderProjects();