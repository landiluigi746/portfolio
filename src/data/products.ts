export type ProjectProps = {
  name: string;
  description: string;
  imageURL?: string;
  tags: string[];
  githubLink?: string;
  websiteLink?: string;
};

export const projects: ProjectProps[] = [
  {
    name: "Nova",
    description:
      "Lightweight 2D game development framework written in C++20 using OpenGL 3.3. Designed to make building simple 2D games and applications easier and more straight-forward.",
    imageURL:
      "https://github.com/landiluigi746/Nova/blob/master/assets/NovaLogo.png?raw=true",
    tags: ["C++", "OpenGL", "Game Dev"],
    githubLink: "https://github.com/landiluigi746/Nova",
  },

  {
    name: "Lufrak",
    description:
      "An intuitive Windows 10/11 tool that simplifies PC setup and performance tuning with just a few clicks, streamlining system configuration for both casual and power users.",
    imageURL: "https://landiluigi746.github.io/Lufrak/images/Menu.png",
    tags: ["C", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/landiluigi746/Lufrak",
    websiteLink: "https://landiluigi746.github.io/Lufrak",
  },

  {
    name: "cellarion",
    description:
      "A cellular automata simulator written in C++ with raylib and OpenMP. It provides users a simple interface to run various cellular automata on a 2D grid of cells.",
    imageURL:
      "https://github.com/landiluigi746/cellarion/blob/master/res/screenshots/BrianBrain.png?raw=true",
    tags: ["C++", "Simulation"],
    githubLink: "https://github.com/landiluigi746/cellarion",
  },

  {
    name: "projectify",
    description:
      "A simple and intuitive project management tool that helps you organize your work efficiently. Its backend is built with C++ and PostgreSQL as database, while the frontend, a simple and easy to use CLI app, is built with C++ and ftxui.",
    imageURL:
      "https://github.com/landiluigi746/projectify/blob/master/screenshots/frontend-cli2.png?raw=true",
    tags: ["C++", "PostgreSQL", "Docker"],
    githubLink: "https://github.com/landiluigi746/projectify",
  },

  {
    name: "Caos Arcade",
    description:
      "Caos Arcade is a videogame developed for the 2025 Phaser Game Jam (4th place out of 26 teams). The theme was Chaos and the videogame revolves around the idea of the gaming world being discombobulated by a deity of chaos, Nixaroth.",
    imageURL: "/portfolio/img/CaosArcade.png",
    tags: ["TypeScript", "Phaser", "Game Dev"],
    websiteLink: "https://caosarcade.web.app/",
  },

  {
    name: "shurlx",
    description:
      "A lightweight, self-hostable URL shortener with a C++ htmx-based backend and SQLite database. Features Docker support for easy deployment, making it ideal for personal use or small-scale link management solutions.",
    imageURL:
      "https://github.com/landiluigi746/shurlx-old/blob/master/screenshots/example.png?raw=true",
    tags: ["C++", "HTMX", "TailwindCSS", "Docker", "SQLite"],
    githubLink: "https://github.com/landiluigi746/shurlx-old",
  },
];

export const featuredProjects = projects.slice(0, 3);
