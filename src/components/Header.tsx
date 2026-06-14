function Header() {
  return (
    <>
      <header className="w-full bg-[#151E3F]">
        <nav className="flex justify-between items-center pt-2 pb-2">
          <p className="ml-8 text-xl">
            Maycon Chaves
          </p>

          <ul className="flex gap-8 mr-8">
            <li>
              <a href="#sobreMim">Sobre Mim</a>
            </li>
            <li>
              <a href="#meusProjetos">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
