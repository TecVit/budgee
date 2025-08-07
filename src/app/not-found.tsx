import Link from "next/link";
import Navbar from "./components/navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="container-404">
        <section className="content-404">
          <h1>404</h1>
          <h2>Página não encontrada</h2>
          <p>Não foi possivel encontrar sua página</p>
          <Link href="/inicio">Voltar para o início</Link>
        </section>
      </main>
      <p className="copyright">&copy; 2025 - Todos direitos reservados</p>
    </>
  )
};

export default NotFound;