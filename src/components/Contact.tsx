import {
  BsLinkedin,
  MdEmail,
  AiOutlineGithub,
} from "../misc/Icons.collection";

import { Icon } from "../misc/Icon.component";

const Contact = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/juan-esc" />

        <Icon
          icon={<BsLinkedin />}
          url="https://www.linkedin.com/in/juanescalonillamartin/"
        />

        <Icon icon={<MdEmail />} url="mailto:juanescalonilla@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
