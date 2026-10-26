function Projetos() {
  return (
    <>
      <section
        id="meusProjetos"
        className="w-full flex flex-col justify-center items-center py-10"
      >
        <h2 className="text-5xl col-span-3 ">Meus Projetos</h2>
        <article className=" grid grid-cols-2 grid-rows-[9%_91%] px-5 gap-4 mt-5">
          <h3 className="text-2xl col-span-2 text-center">Automação RPA</h3>
          <img
            className=""
            src="/images/projeto_rpa.png"
            alt="Print do Software Gestão Camaleão"
          />
          <div className=" flex flex-col gap-3">
            <p>
              Robô de automação (PyAutoGUI) que extrai, trata e insere dados do
              Excel em formulários web do sistema SEI.
            </p>

            <p>Stack: Python (PyAutoGUI, Pyperclip)</p>
            <div className="flex flex-row gap-8">
              <a
                className="bg-[#507DBC] rounded-sm p-3"
                href="https://github.com/maycon-douglas2005/rpa-excel-sei-sync"
              >
                Acessar Repositório
              </a>
            </div>
          </div>
        </article>
        <hr />
        <article className=" grid grid-cols-2 grid-rows-[9%_91%] px-5 gap-4 mt-5">
          <h3 className="text-2xl col-span-2 text-center">MyContacts</h3>
          <img
            src="/images/mycontacts_print.png"
            alt="Print do Software MyContacts"
            className=""
          />
          <div className="flex flex-col gap-3">
            <p>
              MyContacts é um sistema web para gerenciamento de contatos,
              permitindo cadastrar, listar, editar e excluir informações de
              forma simples e organizada.
            </p>

            <p>Stack: PHP, Bootstrap, Javascript e MySQL.</p>
            <div className="flex flex-row gap-8">
              <a
                className="bg-[#507DBC] rounded-sm p-3"
                href="https://github.com/maycon-douglas2005/MyContacts"
              >
                Acessar Repositório
              </a>
            </div>
          </div>
        </article>
        <hr />
        <article className=" grid grid-cols-2 grid-rows-[9%_91%] px-5 gap-4 mt-5">
          <h3 className="text-2xl col-span-2 text-center">
            Advocacia Ingrid Chaves
          </h3>
          <img
            src="/images/adv_print.png"
            alt="Print do Software Institucional Advogada"
            className=""
          />
          <div className="flex flex-col gap-3">
            <p>
              Um website institucional desenvolvido para apresentar o portfólio
              de uma advogada, incluindo informações profissionais, áreas de
              atuação, especialidades, trajetória e canais de contato.{" "}
              <br />{" "}
            </p>

            <p>Stack: HTML, CSS e Javascript.</p>
            <div className="flex flex-row gap-8">
              <a
                className="bg-[#507DBC] rounded-sm p-3"
                href="https://ingrid-chaves-advocacia.vercel.app/"
              >
                Ver Site
              </a>
              <a
                className="bg-[#507DBC] rounded-sm p-3"
                href="https://github.com/maycon-douglas2005/INGRID-CHAVES-ADVOCACIA"
              >
                Acessar Repositório
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Projetos;
