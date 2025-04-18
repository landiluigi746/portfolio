import { ProjectProps } from "../../config";

function ProjectCard({
  name,
  description,
  techStack,
  githubLink,
  websiteLink,
}: ProjectProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={"https://skillicons.dev/icons?i=" + techStack.join(",")}></img>
      <a href={githubLink} target="_blank">
        Github Link
      </a>

      {websiteLink && (
        <a href={websiteLink} target="_blank">
          Website Link
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
