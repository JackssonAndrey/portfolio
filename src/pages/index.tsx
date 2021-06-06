import React from 'react';
import { FiInstagram, FiLinkedin, FiMail, FiFacebook, FiGithub, FiChevronUp, FiLink } from 'react-icons/fi';

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
            <h3>Título do projeto</h3>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#javascript</em></span>
              <span><em>#react</em></span>
              <span><em>#vercel</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>Título do projeto</h3>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#javascript</em></span>
              <span><em>#react</em></span>
              <span><em>#vercel</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>Título do projeto</h3>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#javascript</em></span>
              <span><em>#react</em></span>
              <span><em>#vercel</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>Título do projeto</h3>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#javascript</em></span>
              <span><em>#react</em></span>
              <span><em>#vercel</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>Título do projeto</h3>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#javascript</em></span>
              <span><em>#react</em></span>
              <span><em>#vercel</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="#">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>
        </article>
      </div>

      <div className={styles.aboutMe}>
        <h1>Quem sou?</h1>

        <div className={styles.aboutMeContent}>
          <article>
            Fala dev, sou Andrey Araújo, atualmente sou desenvolvedor Full Stack. Programo em PHP, Lavavel, Javascript, Nodejs,
            React, React Native, mas confesso que minha stack favorita é Nodejs, React e React Native. Sou formado em Análise e
            Desenvolvimento de Sistemas. Tive o primeiro contato com programação ainda no ensino médio. Desde então sempre procuro
            desenvolver pequenos e médios sistemas, para estar em constante aprendizado. Os erros do dia a dia nos fazem crescer e
            amadurecer como desenvolvedores e profissionais.

            Atualmente trabalho como freelancer no desenvolvimento web, desde sites simples até sistemas mais complexos. Caso
            queira saber mais a respeito, minhas redes socias estão mais em baixo para entrar em contato comigo.
          </article>
          <article>
            <img src="./perfil.png" alt="Andrey Araújo" />
          </article>
        </div>
      </div>

      <div className={styles.techs}>
        <div className={styles.techsContent}>
          <article>
            <h1>Tecnologias que trabalho</h1>
            <p>Essas são algumas das tecnologias que trabalho.</p>
          </article>
          <article>
            <span>
              <img src="./images/logo-aws.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-css.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-bootstrap.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-django.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-github.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-heroku.svg" alt="Image tech" className={styles.iconTech} />
            </span>

            <span>
              <img src="./images/logo-html.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-jquery.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-js.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-laravel.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-materialui.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-mysql.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-nodejs.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-php.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-python.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-react.svg" alt="Image tech" className={styles.iconTech} />
            </span>
            <span>
              <img src="./images/logo-ts.svg" alt="Image tech" className={styles.iconTech} />
            </span>
          </article>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <article>
            <ul className={styles.listSocial}>
              <li>
                <a href="#">
                  <FiFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiGithub size={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiMail size={24} />
                </a>
              </li>
            </ul>
          </article>
          <img src="./logo-maior.svg" alt="Andrey Araujo" />
          <p>Desenvolvido e criado por Andrey Araújo - {new Date().getFullYear()}</p>
          <p>andreyaraujo.dev</p>
        </div>

        <span className={styles.returnTop}>
          <FiChevronUp size={24} />
        </span>
      </div>
    </div>
  )
}

export default Home;
