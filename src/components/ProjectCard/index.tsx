import { ProjectProps } from "../../config";

function ProjectCard({
  name,
  description,
  imageURL,
  madeWith,
  githubLink,
  websiteLink,
}: ProjectProps) {
  return (
    <div className="max-w-max bg-zinc-900 text-zinc-100 flex flex-row gap-4 outline-1 outline-zinc-600 rounded-2xl hover:bg-neutral-800 hover:scale-105 not-sm:scale-90 not-sm:flex-col transition-all ">
      {imageURL ? (
        <img
          className="max-w-64 h-auto object-cover rounded-l-2xl not-sm:scale-90 not-sm:rounded-2xl not-sm:w-screen"
          src={imageURL}
        ></img>
      ) : (
        <div className="w-64 max-w-64 h-auto object-cover bg-sky-300 rounded-l-2xl not-sm:rounded-2xl not-sm:w-screen"></div>
      )}

      <div className="max-w-full flex flex-col justify-evenly pt-3 pb-3 not-sm:w-screen">
        <div>
          <h3 className="font font-extrabold text-3xl text-center">{name}</h3>
          <p className="font font-semibold px-3 pt-4 text-left not-sm:text-center w-72 not-sm:w-full not-sm:">
            {description}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="mb-2 mt-2 font-bold text-lg">Made with:</h3>
          <img
            className="w-max"
            src={"https://skillicons.dev/icons?i=" + madeWith.join(",")}
          ></img>
        </div>

        <div className="flex flex-row justify-center items-center mt-2">
          {githubLink && (
            <a
              href={githubLink}
              className="font font-semibold bg-green-700 rounded-2xl text-slate-50 shadow-sm transition-all hover:shadow-lg hover:bg-green-800 hover:scale-105 p-2 m-2"
              target="_blank"
            >
              Github Link
            </a>
          )}

          {websiteLink && (
            <a
              href={websiteLink}
              className="font font-semibold bg-green-700 rounded-2xl text-slate-50 shadow-sm transition-all hover:shadow-lg hover:bg-green-800 hover:scale-105 p-2 m-2"
              target="_blank"
            >
              Website Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
