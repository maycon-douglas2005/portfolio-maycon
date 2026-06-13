function Hero() {
  return (
    <>
      <section className="flex py-8">
        <img
          src="./src/assets/info.png"
          className="h-64 rounded-full border-2 border-[#A1C6EA]"
          alt=""
        />
        <div>
          <h1 className="text-5xl">Desenvolvedor Web</h1>
          <p>
            Construindo aplicações web com PHP, Node, Bootstrap, React,
            TypeScript e MySQL.
          </p>
        </div>
      </section>
    </>
  );
}
export default Hero;
