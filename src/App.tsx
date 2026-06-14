import Header from "./components/Header";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SobreMim />
        <Projetos />
      </main>
    </>
  );
}

export default App;
