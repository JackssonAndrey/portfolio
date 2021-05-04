import React from 'react';
import { FiInstagram, FiLinkedin, FiMail, FiFacebook, FiGithub } from 'react-icons/fi';

import styles from '../../styles/home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.pageMain}>
      <header className={styles.pageHeader}>
        <nav className={styles.menuHeader}>
          <span className={styles.imgLogoMenu}>
            <a href="#">
              <img src="./logo-menu.svg" alt="Andrey Araújo" />
            </a>
          </span>

          <ul className={styles.listMenu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Contatos</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className={styles.apresentation}>
        <aside className={styles.textLeft}>
          <h1>Andrey Araújo</h1>
          <h1>Desenvolvedor Fullstack.</h1>
          <p>
            Criando soluções itelligentes para seus
            problemas cotidianos.
          </p>

          <ul className={styles.listSocial}>
            <li>
              <a href="#">
                <FiFacebook size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <FiGithub size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <FiInstagram size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <FiLinkedin size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <FiMail size={32} />
              </a>
            </li>
          </ul>
        </aside>

        <aside className={styles.logoRight}>
          <img src="./logo-maior.svg" alt="Andrey Araújo" />
        </aside>
      </div>

      <div className={styles.imgArrowADown}>
        <img src="./arrow-down.svg" alt="Arrow Down" />
      </div>

      <div className={styles.myProjects}>
        <h1>Meus Projetos</h1>
        <h3>Abaixo estão alguns do projetos pessoais e profissionais que ja realizei.</h3>

        <article className={styles.projects}>
          <div className={styles.cardProject}>
            <span className={styles.cardImg}>
              <img src="./print-github.png" alt="Imagem Projeto" />
            </span>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}>Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <span className={styles.cardImg}>
              <img src="./print-github.png" alt="Imagem Projeto" />
            </span>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}>Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <span className={styles.cardImg}>
              <img src="./print-github.png" alt="Imagem Projeto" />
            </span>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}>Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <span className={styles.cardImg}>
              <img src="./print-github.png" alt="Imagem Projeto" />
            </span>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}>Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <span className={styles.cardImg}>
              <img src="./print-github.png" alt="Imagem Projeto" />
            </span>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}>Código</button>
              </a>
            </span>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Home;
