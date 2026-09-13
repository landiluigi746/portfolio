import ggpkgImage from "../assets/img/ggpkg.png";
import lufrakImage from "../assets/img/lufrak.png";
import cellarionImage from "../assets/img/cellarion.png";
import cstlImage from "../assets/img/cstl.png";
import novaImage from "../assets/img/nova.png";
import theEssenceImage from "../assets/img/the_essence.png";
import caosArcadeImage from "../assets/img/caos_arcade.png";

export type ProjectProps = {
  name: string;
  description: string;
  image: ImageMetadata;
  tags: string[];
  githubLink?: string;
  websiteLink?: string;
};

export const projects: ProjectProps[] = [
  {
    name: "ggpkg",
    description:
      "ggpkg is a unified command-line interface for system package managers across different platforms written in C++23. It automatically detects your system's package manager and provides a consistent set of commands, making package management seamless whether you're on Windows, Ubuntu, Arch Linux, or other supported distributions.",
    image: ggpkgImage,
    tags: ["CLI tool", "C++", "CMake"],
    githubLink: "https://github.com/landiluigi746/ggpkg",
  },

  {
    name: "Lufrak",
    description:
      "An intuitive Windows 10/11 tool that simplifies PC setup and performance tuning with just a few clicks, streamlining system configuration for both casual and power users.",
    image: lufrakImage,
    tags: ["Windows tool", "C", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/landiluigi746/Lufrak",
    websiteLink: "https://landiluigi746.github.io/Lufrak",
  },

  {
    name: "cellarion",
    description:
      "A cellular automata simulator written in C++ with raylib and OpenMP. It provides users a simple interface to run various cellular automata on a 2D grid of cells.",
    image: cellarionImage,
    tags: ["Simulation", "C++", "CMake"],
    githubLink: "https://github.com/landiluigi746/cellarion",
  },

  {
    name: "cstl",
    description:
      "A lightweight header/source C99 library designed to attempt a recreation of key C++ Standard Template Library (STL) features in pure C.",
    image: cstlImage,
    tags: ["C", "CMake"],
    githubLink: "https://github.com/landiluigi746/cstl",
  },

  {
    name: "Nova",
    description:
      "Lightweight 2D game development framework written in C++20 using OpenGL 3.3. Designed to make building simple 2D games and applications easier and more straight-forward.",
    image: novaImage,
    tags: ["Game Dev", "C++", "OpenGL", "CMake"],
    githubLink: "https://github.com/landiluigi746/Nova",
  },

  {
    name: "The Essence",
    description:
      "The Essence is a videogame developed for the 2026 Phaser Game Jam that led my team to the victory. The theme of the jam was (R)Evolution and the videogame consists in the concept of Conway's Game of Life, representing the Evolution, applied to a turn-based 1v1 game, using natural evolution and special cards that affect the game's board, (hence the Revolution)",
    image: theEssenceImage,
    tags: ["Game Dev", "TypeScript", "Phaser"],
    websiteLink: "https://the-essence-game.web.app/",
  },

  {
    name: "Caos Arcade",
    description:
      "Caos Arcade is a videogame developed for the 2025 Phaser Game Jam (4th place out of 26 teams). The theme was Chaos and the videogame revolves around the idea of the gaming world being discombobulated by a deity of chaos, Nixaroth.",
    image: caosArcadeImage,
    tags: ["Game Dev", "TypeScript", "Phaser"],
    websiteLink: "https://caosarcade.web.app/",
  },
];

export const featuredProjects = projects.slice(0, 3);
