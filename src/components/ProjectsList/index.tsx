import ProjectCard from "../ProjectCard";
import { projects } from "../../config";

function ProjectList() {
  return (
    <>
      <h2 className="font font-extrabold text-zinc-100 text-center text-4xl pt-8 pb-8">
        My top projects
      </h2>

      <div className="w-max mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </>
  );
}

export default ProjectList;
