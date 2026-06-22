function Projetos() {
  return (
    <>
      <section id="meusProjetos" className="w-full flex flex-col justify-center items-center ">
        <h2 className="text-5xl col-span-3 ">Meus Projetos</h2>
        <article className=" grid grid-cols-2 grid-rows-[9%_91%] px-5 gap-4">
          <h3 className="text-2xl col-span-2 text-center">
           Gestão Camaleão
          </h3>
          <img
            className=""
            src="/images/gc_print.png"
            alt="Print do Software Gestão Camaleão"
          />
          <div className=" flex flex-col gap-3">
            <p>
              Gestão Camaleão PDV é uma solução completa de frente de caixa
              pensada para quem precisa de velocidade no atendimento, controle
              de estoque simples e relatórios úteis.
            </p>

            <p>Stack: Next.js, Typescript e Tailwind CSS.</p>
            <div className="flex flex-row gap-8">
              <a
                className="bg-[#507DBC] rounded-sm p-3"
                href="https://gestao-camaleao-front.vercel.app/"
              >
                Ver Site
              </a>
              <a
                className="bg-[#507DBC] rounded-sm p-3"
                href="https://github.com/luanfabruzzi/gestao-camaleao"
              >
                Acessar Repositório
              </a>
            </div>
          </div>
        </article>
        <hr />
        <article className=" grid grid-cols-2 grid-rows-[9%_91%] px-5 gap-4">
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
                href="https://mycontacts.page.gd/"
              >
                Ver Site
              </a>
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
        <article className=" grid grid-cols-2 grid-rows-[9%_91%] px-5 gap-4">
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
              <a className="bg-[#507DBC] rounded-sm p-3" href="https://ingrid-chaves-advocacia.vercel.app/">Ver Site</a>
              <a className="bg-[#507DBC] rounded-sm p-3" href="https://github.com/maycon-douglas2005/INGRID-CHAVES-ADVOCACIA">
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
