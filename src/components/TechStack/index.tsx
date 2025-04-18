import { ICONS_URL, techStack } from "../../config";

function TechStack() {
  return (
    // thanks https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
    <div className="text-zinc-100 max-w-1/3 mx-auto not-xl:max-w-4/5">
      <h3 className="font font-extrabold text-4xl text-center">
        My Tech Stack
      </h3>

      <div className="flex flex-nowrap py-16 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
        <div className="flex justify-center items-center md:justify-start [&_img]:mx-8 [&_img]:max-w-none infinite-scroll">
          {techStack.map((elem) => (
            <img src={ICONS_URL + "?i=" + elem}></img>
          ))}
        </div>

        <div className="flex justify-center items-center md:justify-start [&_img]:mx-8 [&_img]:max-w-none infinite-scroll">
          {techStack.map((elem) => (
            <img src={ICONS_URL + "?i=" + elem}></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
