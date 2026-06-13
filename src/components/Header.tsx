function Header() {
  return (
    <>
      <header className="w-full ">
        <nav className="flex justify-between">
          <p className="ml-8 bg-">
            Maycon <br /> Chaves
          </p>

          <ul className="flex gap-8">
            <li>
              <a href="">Sobre Mim</a>
            </li>
            <li>
              <a href="">Projetos</a>
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
