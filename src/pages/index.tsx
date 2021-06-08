import React from 'react';
import { FiInstagram, FiLinkedin, FiMail, FiFacebook, FiGithub, FiChevronUp, FiLink } from 'react-icons/fi';

import styles from '../../styles/home.module.css';

const Home: React.FC = () => {
  function returnToTop() {
    window.scrollTo(0, 0);
  }

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
              <a href="#" onClick={returnToTop}>Home</a>
            </li>
            <li>
              <a href="#aboutMe">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#techs">Tecnologias</a>
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
              <a href="https://www.facebook.com/andreyaraujo.dev" target="_blank">
                <FiFacebook size={32} />
              </a>
            </li>
            <li>
              <a href="https://github.com/JackssonAndrey" target="_blank">
                <FiGithub size={32} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/andreyaraujo.dev/" target="_blank">
                <FiInstagram size={32} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jacksson-andrey/" target="_blank">
                <FiLinkedin size={32} />
              </a>
            </li>
            <li>
              <a href="mailto:jaab.andrey@gmail.com" target="_blank">
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

      <div className={styles.myProjects} id="projects">
        <h1>Meus Projetos</h1>
        <h3 className={styles.subtitle}>Abaixo estão alguns do projetos pessoais e profissionais que ja realizei.</h3>

        <article className={styles.projects}>
          <div className={styles.cardProject}>
            <h3>Ecoleta - Marketplace de coleta de resíduos</h3>

            <p>
              Aplicação desenvolvida na Next Level Week, da Rocketseat.
              Trata-se de uma plicação onde as pessoas podem localizar pontos de coleta de resíduos para reciclagem,
              na sua cidade, ou de onde estiver.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#typescript</em></span>
              <span><em>#react</em></span>
              <span><em>#node</em></span>
              <span><em>#reactNative</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="https://github.com/JackssonAndrey/next-level-week" target="_blank">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>Gerenciamento de estabelecimentos</h3>

            <p>
              Sistema feito para resolução de case para vaga de desenvolvedor full stack na FortBrasil. trata-se de um gerenciador
              estabelecimentos.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#react</em></span>
              <span><em>#node</em></span>
              <span><em>#typescript</em></span>
              <span><em>#javascript</em></span>
              <span><em>#postgres</em></span>
              <span><em>#docker</em></span>
              <span><em>#chakraui</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="https://github.com/JackssonAndrey/case-fortbrasil-frontend" target="_blank">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>Move.it</h3>

            <p>
              Aplicação feita na trilha de React, na Next Level Week, da Rocketseat.
              Semelhante a técnica Pomodoro, o Move.it gerencia o tempo de suas atividades, bonificando suas conquistas.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#typescript</em></span>
              <span><em>#react</em></span>
              <span><em>#nextjs</em></span>
              <span><em>#vercel</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="https://github.com/JackssonAndrey/moveit-nlw04" target="_blank">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>Social links</h3>

            <p>
              Página estática para exibição de links sociais, semelhante ao linktr.ee, beacons.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#html</em></span>
              <span><em>#css</em></span>
              <span><em>#vercel</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="https://github.com/JackssonAndrey/social-links" target="_blank">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>Busca de repositórios</h3>

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com frontend em React, consumindo API do GitHub.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#javascript</em></span>
              <span><em>#react</em></span>
              <span><em>#netlify</em></span>
              <span><em>#css</em></span>
              <span><em>#materialui</em></span>

            </article>

            <span className={styles.cardFooter}>
              <a href="https://github.com/JackssonAndrey/api-github-repos" target="_blank">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <div className={styles.cardProject}>
            <h3>toDo Dev</h3>

            <p>
              Aplicação para gerenciamento de tarefas para desenvolvedores.
            </p>

            <article className={styles.projectsTags}>
              <span><em>#javascript</em></span>
              <span><em>#css</em></span>
              <span><em>#ejs</em></span>
              <span><em>#sequelize</em></span>
            </article>

            <span className={styles.cardFooter}>
              <a href="https://github.com/JackssonAndrey/toDo-Dev" target="_blank">
                <button type="button" className={styles.btnViewCode}><FiLink size={18} style={{ marginRight: '5px' }} /> Código</button>
              </a>
            </span>
          </div>

          <span style={{ width: '100%', marginTop: '20px', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <a href="https://github.com/JackssonAndrey?tab=repositories" target="_blank">
              <button className={styles.btnViewCode}>Ver mais projetos</button>
            </a>
          </span>
        </article>
      </div>

      <div className={styles.aboutMe} id="aboutMe">
        <h1>Quem sou?</h1>

        <div className={styles.aboutMeContent}>
          <article>
            Fala dev, sou Andrey Araújo, atualmente sou desenvolvedor Full Stack na FortBrasil. Programo em PHP, Lavavel, Python,
            Django, Javascript, Nodejs,
            React, mas confesso que minha stack favorita é Nodejs, React e React Native. Sou formado em Análise e
            Desenvolvimento de Sistemas. Tive o primeiro contato com programação ainda no ensino médio. Desde então sempre procuro
            desenvolver pequenos e médios sistemas, para estar em constante aprendizado. Os erros do dia a dia nos fazem crescer e
            amadurecer como desenvolvedores e profissionais.
          </article>
          <article>
            <img src="./perfil.png" alt="Andrey Araújo" />
          </article>
        </div>
      </div>

      <div className={styles.techs} id="techs">
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
                <a href="https://www.facebook.com/andreyaraujo.dev" target="_blank">
                  <FiFacebook size={32} />
                </a>
              </li>
              <li>
                <a href="https://github.com/JackssonAndrey" target="_blank">
                  <FiGithub size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/andreyaraujo.dev/" target="_blank">
                  <FiInstagram size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jacksson-andrey/" target="_blank">
                  <FiLinkedin size={32} />
                </a>
              </li>
              <li>
                <a href="mailto:jaab.andrey@gmail.com" target="_blank">
                  <FiMail size={32} />
                </a>
              </li>
            </ul>
          </article>
          <img src="./logo-maior.svg" alt="Andrey Araujo" />
          <p>Desenvolvido e criado por Andrey Araújo - {new Date().getFullYear()}</p>
          <p>andreyaraujo.dev</p>
        </div>

        <span className={styles.returnTop} onClick={returnToTop}>
          <FiChevronUp size={24} />
        </span>
      </div>
    </div>
  )
}

export default Home;
