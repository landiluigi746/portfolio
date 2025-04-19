import ProjectCard from "../ProjectCard";
import { projects } from "../../config";

function ProjectList() {
  return (
    <div id="projects">
      <h2 className="font font-extrabold text-zinc-100 text-center text-4xl pt-8 pb-8">
        My top projects
      </h2>

      <div className="w-max mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 not-sm:gap-0">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <h4 className="font font-extrabold text-zinc-100 text-center my-12">
        Many more coming soon!
      </h4>
    </div>
  );
}

export default ProjectList;
