import { Icon } from "../misc/Icon.component";
import { AiOutlineGithub, BsLinkedin, MdEmail } from "../misc/Icons.collection";

interface TextLinkProps {
  text: string;
  url: string;
}

const TextLink = ({
  text,
  url,
} : TextLinkProps) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </a>
  );
};

export const Header = () => {
  return (
    <header
      className={`font-jost py-8 sm:flex sm:flex-row sm:items-center sm:justify-between`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" url="#" />
        <TextLink text="Skills" url="#skills" />
        <TextLink text="Projects" url="#projects" />
        <TextLink text="Contact" url="#contact" />
      </p>

      <div className="flex flex-row justify-end mr-3 sm:mr-0 sm:justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/juan-esc" />

        <Icon
          icon={<BsLinkedin />}
          url="https://www.linkedin.com/in/juanescalonillamartin/"
        />

        <Icon icon={<MdEmail />} url="mailto:juanescalonilla@gmail.com" />
      </div>
    </header>
  );
};