import ProjectCard from "../ProjectCard";
import { projects } from "../../config";

function ProjectList() {
  return (
    <>
      <h2 className="text-center font-bold text-xl">My top projects</h2>

      <div className="flex justify-center items-center">
        <div className=""></div>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </>
  );
}

export default ProjectList;
