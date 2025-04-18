export type ProjectProps = {
  name: string;
  description: string;
  techStack: Array<string>;
  githubLink: string;
  websiteLink?: string;
};

export const projects: Array<ProjectProps> = [
  {
    name: "Lufrak",
    description: "",
    techStack: ["c", "html", "css", "js", "git", "github"],
    githubLink: "https://github.com/landiluigi746/Lufrak",
    websiteLink: "https://landiluigi746.github.io/Lufrak",
  },
];
