import { HiOutlineArrowNarrowRight } from "../misc/Icons.collection";

export const About = () => {
  return (
    <div className="my-3 sm:my-8 flex flex-col-reverse sm:flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-5xl font-bold text-white text-center sm:text-left mb-4 sm:mb-0">Juan Escalonilla</p>
        <p className="mt-1 text-3xl text-gray-300">
        Software Engineering student at UPM
        </p>

        <p className="mt-4 text-gray-400">
          Building Web apps and more...
        </p>

          <a href="/CV_Juan_Escalonilla.pdf"
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check my CV
            <HiOutlineArrowNarrowRight />
          </a>

          <a href="https://github.com/juan-esc"
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <HiOutlineArrowNarrowRight />
          </a>
      </div>

      <div className="mb-6 sm:mb-0 custom:block">
        <img
          src="/me.png"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64"
          alt="avatar"
        />
      </div>
    </div>
  );
};
