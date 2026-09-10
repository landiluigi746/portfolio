export const ICONS_URL = "https://go-skill-icons.vercel.app/api/icons";

export type TechStackItem = {
  name: string;
  iconName: string;
};

export const techStack: TechStackItem[] = [
  { name: "C", iconName: "c" },
  { name: "C++", iconName: "cpp" },
  { name: "HTML", iconName: "html" },
  { name: "CSS", iconName: "css" },
  { name: "JavaScript", iconName: "js" },
  { name: "HTMX", iconName: "htmx" },
  { name: "TailwindCSS", iconName: "tailwindcss" },
  { name: "Astro", iconName: "astro" },
  { name: "Git", iconName: "git" },
  { name: "GitHub", iconName: "github" },
  { name: "Visual Studio Code", iconName: "vscode" },
  { name: "Visual Studio", iconName: "visualstudio" },
  { name: "Zed", iconName: "zed" },
  { name: "CMake", iconName: "cmake" },
  { name: "PostgreSQL", iconName: "postgresql" },
  { name: "SQLite", iconName: "sqlite" },
  { name: "Windows", iconName: "windows" },
  { name: "Arch", iconName: "arch" },
  { name: "Docker", iconName: "docker" },
];
