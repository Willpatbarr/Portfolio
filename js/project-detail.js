import { fullProjects } from './data.js';
import { createNav, createFooter } from './overlays.js';

createNav();
createFooter();

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const container = document.getElementById("project-detail-container");
const project = fullProjects.find(p => p.id === projectId);

if (project) {
  container.innerHTML = `
    <div class="left-side-details">
        
        <img src="${project.imageSrc}" alt="${project.title}" />
    </div>
    <div class="right-side-details">
        <h1>${project.title}</h1>
        <p>${project.fullDescr}</p>
        <div class="tags">
            <p><strong>Languages:</strong> ${project.languages}</p>
            <p><strong>Frameworks:</strong> ${project.frameworks}</p>
            <p><strong>Type:</strong> ${project.isPersonal ? "Personal" : "Team"}</p>
        </div>
    </div>
  `;
} else {
  container.innerHTML = "<p>Project not found.</p>";
}