export type ProjectProps = {
  name: string;
  description: string;
  imageURL?: string;
  madeWith: Array<string>;
  githubLink: string;
  websiteLink?: string;
};

export const projects: Array<ProjectProps> = [
  {
    name: "Lufrak",
    description:
      "Simple and inuitive program that allows to setup and optimize computers with Windows 10/11 in just a few clicks",
    imageURL: "https://landiluigi746.github.io/Lufrak/images/Menu.png",
    madeWith: ["c", "html", "css", "js"],
    githubLink: "https://github.com/landiluigi746/Lufrak",
    websiteLink: "https://landiluigi746.github.io/Lufrak",
  },

  {
    name: "cellarion",
    description:
      "cellarion is a cellular automata showcase written in C++ with raylib and OpenMP. It provides a simple interface for users to create and run cellular automata on a 2D grid of cells.",
    madeWith: ["cpp"],
    githubLink: "https://github.com/landiluigi746/cellarion",
  },
];
