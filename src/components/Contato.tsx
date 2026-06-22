import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Contato() {
  return (
    <section className="bg-[#112240] w-full grid grid-cols-2 grid-rows-[10%_2%_18%_70%] justify-items-center">
      <h2 className="text-5xl col-span-2 ">Vamos Conversar?</h2>
      <p className="col-span-2">Me chame no Whatsapp ou me mande um Email!</p>
      <div className="border-b-2  border-gray-700 self-end text-2xl flex gap-3  items-center justify-center ">
        <a href="">
          <FaWhatsapp className="text-green-500" />
        </a>
        <a href="">
          <FaEnvelope className="text-red-400" />{" "}
        </a>
        <a href="">
          <FaGithub className="" />{" "}
        </a>
        <a href="">
          <FaLinkedin className="text-blue-500" />{" "}
        </a>
      </div>

      <img src="/images/contato.png" className=" self-end row-span-2" alt="" />
      <form action="" className=" justify-self-stretch p-2 gap-5 flex flex-col items-center ">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl">Formulário</h3>
          <p className="text-xl">para contato</p>
        </div>

        <input
          type="text"
          placeholder="Seu Nome"
          className=" bg-gray-300  w-[60%] rounded text-black h-[30px] ps-1"
          name="name"
          id=""
        />
        <input
          type="text"
          placeholder="Qual Assunto Quer Falar?"
          className="bg-gray-300 w-[60%] rounded text-black h-[30px] ps-1"  
          name="name"
          id=""
        />
        <textarea
          name=""
          id=""
          placeholder="Digite sua mensagem..."
          className="border w-[60%]  border-gray-700 ps-1"
        ></textarea>
        <button className="px-10 py-2 rounded-lg bg-green-700 flex items-center justify-center gap-2"> Enviar <IoIosSend className="text-[19px]" /></button>
      </form>
    </section>
  );
}
