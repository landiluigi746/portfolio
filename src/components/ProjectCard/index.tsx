import { ICONS_URL, ProjectProps } from "../../config";

function ProjectCard({
  name,
  description,
  imageURL,
  madeWith,
  githubLink,
  websiteLink,
}: ProjectProps) {
  const useGrid = madeWith.length >= 3;

  return (
    <div className="w-fit bg-zinc-900 text-zinc-100 outline-1 outline-zinc-600 rounded-2xl hover:bg-neutral-800 hover:scale-105 not-sm:scale-90 transition-all">
      <img
        className="w-96 max-h-60 object-cover object-left-top rounded-t-2xl not-sm:w-svw border-b-[1px] border-zinc-600"
        src={imageURL}
      ></img>

      <div className="w-96 mt-4 not-sm:w-svw">
        <h3 className="font font-extrabold text-3xl text-center">{name}</h3>
        <p className="font font-semibold mx-4 mt-4 text-justify">
          {description}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center my-2">
        <h3 className="font-bold text-lg mb-2">Made with:</h3>

        <div
          className={`${useGrid ? "grid grid-cols-3" : "flex flex-row"} gap-3`}
        >
          {madeWith.map((elem) => (
            <img src={ICONS_URL + "?i=" + elem}></img>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center items-center mt-2 mb-2">
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

    // <div className="max-w-screen bg-zinc-900 text-zinc-100 flex flex-col gap-3 outline-1 outline-zinc-600 rounded-2xl hover:bg-neutral-800 hover:scale-105 not-sm:scale-90 transition-all">
    //   {imageURL ? (
    //     <img
    //       className="w-svw h-auto not-sm:scale-90 not-sm:rounded-2xl sm:max-w-64"
    //       src={imageURL}
    //     ></img>
    //   ) : (
    //     <div className="w-64 max-w-64 h-auto object-cover bg-sky-300 rounded-l-2xl not-sm:rounded-2xl not-sm:w-screen"></div>
    //   )}

    //   <div className="max-w-full flex flex-col justify-evenly pt-3 pb-3 not-sm:w-screen mx-2">
    //     <div>
    //       <h3 className="font font-extrabold text-3xl text-center">{name}</h3>
    //       <p className="font font-semibold w-full px-2 pt-4 sm:w-72">
    //         {description}
    //       </p>
    //     </div>

    //     <div className="flex flex-col justify-center items-center">
    //       <h3 className="mb-2 mt-2 font-bold text-lg">Made with:</h3>

    //       <div
    //         className={`${useGrid ? "grid grid-cols-3" : "flex flex-row"} gap-3`}
    //       >
    //         {madeWith.map((elem) => (
    //           <img src={ICONS_URL + "?i=" + elem}></img>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="flex flex-row justify-center items-center mt-2">
    //       {githubLink && (
    //         <a
    //           href={githubLink}
    //           className="font font-semibold bg-green-700 rounded-2xl text-slate-50 shadow-sm transition-all hover:shadow-lg hover:bg-green-800 hover:scale-105 p-2 m-2"
    //           target="_blank"
    //         >
    //           Github Link
    //         </a>
    //       )}

    //       {websiteLink && (
    //         <a
    //           href={websiteLink}
    //           className="font font-semibold bg-green-700 rounded-2xl text-slate-50 shadow-sm transition-all hover:shadow-lg hover:bg-green-800 hover:scale-105 p-2 m-2"
    //           target="_blank"
    //         >
    //           Website Link
    //         </a>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProjectCard;
