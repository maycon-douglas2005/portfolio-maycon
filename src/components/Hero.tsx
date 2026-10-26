import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <>
      <section className="flex py-8 justify-center">
        <img
          src="/images/info.png"
          className="ml-3 h-64 rounded-full border-2 border-[#A1C6EA]"
          alt=""
        />
        <div className="ml-3 flex flex-col">
          <h1 className="text-5xl">Desenvolvedor Full-Stack</h1>
          <p>Construindo aplicações da interface até a lógica.</p>

          <h2 className="mt-5 text-xl">MAYCON CHAVES</h2>
          <p> 21 Anos | Santo André, São Paulo</p>

          <div className="flex gap-3 mt-3 text-3xl">
            <FaPhp />
            <FaBootstrap />
            <IoLogoJavascript />
            <FaReact />
            <RiTailwindCssFill />
            <BsTypescript />
            <FaPython />
            <FaJava />
            <DiMysql />
            <FaGitAlt />
            <FaGithub />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
