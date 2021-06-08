import React from 'react';
import { FiInstagram, FiLinkedin, FiMail, FiFacebook, FiGithub, FiChevronUp, FiLink } from 'react-icons/fi';

import styles from '../../../styles/links.module.css';

const Links: React.FC = () => {
  function returnToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={styles.pageMain}>
      <div className={styles.imgPerfil}>
        <img src="./icone-pessoal.jpg" alt="Andrey Araújo" />
      </div>

      <div className={styles.socialIcons}>
        <ul>
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
      </div>

      <div className={styles.lastVideo}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hsoI_lk6WwI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>

      <div className={styles.socialLinks}>
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UCKehyTUE9W9nU9FuBFtf9Iw" target="_blank">
              <button className={styles.btn}>You Tube</button>
            </a>
          </li>
          <li>
            <a href="https://dev.to/jackssonandrey/usando-docker-e-docker-composer-no-dia-a-dia-4mi" target="_blank">
              <button className={styles.btn}>Artigo no Dev.to sobre Docker</button>
            </a>
          </li>
          <li>
            <a href="https://www.twitch.tv/andreyaraujoo" target="_blank">
              <button className={styles.btn}>Twitch</button>
            </a>
          </li>
          <li>
            <a href="https://www.andreyaraujo.dev" target="_blank">
              <button className={styles.btn}>Portfólio</button>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <img src="./logo-maior.svg" alt="Andrey Araujo" />
          <p>Desenvolvido e criado por Andrey Araújo - {new Date().getFullYear()}</p>
          <p>andreyaraujo.dev</p>
        </div>
      </div>
    </div>
  )
}

export default Links;
