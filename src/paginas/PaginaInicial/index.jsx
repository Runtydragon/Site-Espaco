import Cabecalho from "components/cabecalho";
import Populares from "components/fotosPopulares";
import Galeria from "components/galeria";
import Menu from "components/menu";
import Rodape from "components/rodape";

import banner from "./banner.png";
import styles from "./PaginaInicial.module.scss";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>
              A galeria mais completa do espaço<output></output>
            </h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
