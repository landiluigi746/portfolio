const techStackContainer = document.getElementById("tech-stack-container");
const projectsContainer = document.getElementById("projects-container");
const contactsContainer = document.getElementById("contacts-container");

const deviconsUrl = 'https://skillicons.dev/icons';

const techStackItems = [
    "c",
    "cpp",
    "html",
    "css",
    "git",
    "github",
    "githubactions",
    "vscode",
    "visualstudio",
    "cmake",
    "windows",
    "ubuntu"
];

const projects = [
    {
        name: "Lufrak",
        description: "Simple and inuitive program that allows to setup and optimize computers with Windows 10/11 in just a few clicks",
        link: "https://landiluigi746.github.io/Lufrak/",
        techStack: ["c", "html", "css", "github"]
    },

    {
        name: "gulc",
        description: "General Utility Library for C that aims to provide functions and data structures that simplify development (such as vector, hash map, string)",
        link: "https://github.com/landiluigi746/gulc",
        techStack: ["c", "git", "githubactions"]
    }
];

const contacts = [
    {
        app: "github",
        link: "https://github.com/landiluigi746"
    },

    {
        app: "discord",
        link: "https://discord.com/users/588073796401889297"
    },

    {
        app: "devto",
        link: "https://https://dev.to/landiluigi746"
    }
];

function loadTechStackIcons() {
    techStackItems.forEach(function(techStackItem) {
        const finalUrl = deviconsUrl + "?i=" + techStackItem;
        const img = document.createElement("img");
        img.classList.add("tech-stack-icon");
        img.src = finalUrl;
        techStackContainer.appendChild(img);
    });
}

function loadProjects() {
    projects.forEach(function(project) {
        const div = document.createElement("div");
        const ul = document.createElement("ul");

        div.innerHTML = `
            <a href="${project.link}">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-desc">${project.description}</p>
                <h4>Tech stack involved</h4>
            </a>
        `;

        project.techStack.forEach(function(techStackItem) {
            ul.innerHTML += `
                <li>
                    <img src="${deviconsUrl + "?i=" + techStackItem}">
                </li>
            `;
        });
        
        ul.classList.add("project-tech-stack");
        div.classList.add("project");

        div.appendChild(ul);
        projectsContainer.appendChild(div);
    });
}

function loadContacts() {
    contacts.forEach(function(contact) {
        const a = document.createElement("a");

        a.href = contact.link;

        a.innerHTML = `
            <img class="contact-img" src=${deviconsUrl + "?i=" + contact.app}>
        `;

        contactsContainer.appendChild(a);
    });
}

window.onload = function(){
    loadTechStackIcons();
    loadProjects();
    loadContacts();
};