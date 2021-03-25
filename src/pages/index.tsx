import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { BiCodeCurly } from '@react-icons/all-files/bi/BiCodeCurly';
import { CgBrowser } from '@react-icons/all-files/cg/CgBrowser';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import Layout from '~components/layout';
import SESImage from '~images/spotify-extended-search/home_page.png';
import SEO from '~components/seo';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t('name')} />
      <section className="hero is-fullheight">
        <div className="hero-body hero-image">
          <div className="container has-text-centered">
            <h2 className="is-size-2 has-text-light has-text-centered">
              {t('name')}
            </h2>
            <h3 className="is-size-3 has-text-light has-text-centered">
              {t('role')}
            </h3>
            <a
              className="is-size-3 has-text-light has-text-centered"
              href="http://www.linkedin.com/in/victor-cubilla-737b901ab"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="is-size-3 has-text-light has-text-centered"
              href="https://github.com/Logan8192"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </section>

      <section className="section has-background-primary" id="portfolio">
        <div className="container">
          <h2 className="is-size-2 has-text-centered has-text-light">
            {t('portfolio')}
          </h2>
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="card">
                <div className="card-image">
                  <figure className="image 16by9">
                    <img src={SESImage} alt="Project screenshot" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media-content">
                    <p className="title is-4">Spotify Extended Search</p>
                    <p className="subtitle">
                      <a
                        className="button is-black is-size-6"
                        href="https://github.com/Logan8192/Spotify-Extended-Search"
                      >
                        <span className="icon">
                          <AiFillGithub />
                        </span>
                        <span>{t('repository')}</span>
                      </a>
                    </p>
                    <div className="content">
                      <div className="tags">
                        <p>{t('sesDescription')}</p>
                        <span className="tag is-black">Bulma CSS</span>
                        <span className="tag is-black">Expressjs</span>
                        <span className="tag is-black">Font Awesome</span>
                        <span className="tag is-black">JavaScript</span>
                        <span className="tag is-black">Nodejs</span>
                        <span className="tag is-black">Pugjs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-info" id="skills">
        <div className="container">
          <h2 className="is-size-2 has-text-centered has-text-light">
            {t('skills')}
          </h2>
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <p className="title has-text-centered">Backend</p>
                  <p className="subtitle is-size-2 has-text-centered">
                    <FaServer />
                  </p>
                  <div className="content">
                    <ul>
                      <li>Express.js</li>
                      <li>Laravel</li>
                      <li>MySQL/MariaDB</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <p className="title has-text-centered">Frontend</p>
                  <p className="subtitle is-size-2 has-text-centered">
                    <CgBrowser />
                  </p>
                  <div className="content">
                    <ul>
                      <li>Bootstrap</li>
                      <li>Bulma CSS</li>
                      <li>Gatsby.js</li>
                      <li>Pug.js</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <p className="title has-text-centered">
                    {t('programmingLanguages')}
                  </p>
                  <p className="subtitle is-size-2 has-text-centered">
                    <BiCodeCurly />
                  </p>
                  <div className="content">
                    <ul>
                      <li>Java</li>
                      <li>JavaScript/TypeScript</li>
                      <li>PHP</li>
                      <li>Python</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "navbar", "index"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
