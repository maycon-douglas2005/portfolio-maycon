
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
          <h1 className="text-5xl">Desenvolvedor Web</h1>
          <p>
            Construindo aplicações do front-end ao back-end.
          </p>

          <h2 className="mt-5 text-xl">MAYCON CHAVES</h2>
          <p>  21 Anos | Procurando Estágio |  Santo André, São Paulo</p>
          
          <button className="self-center mt-5 bg-[#507DBC] p-4 rounded-sm cursor-pointer text-white">Veja Meus Projetos</button>
        </div>
        
      </section>
    </>
  );
}
export default Hero;
