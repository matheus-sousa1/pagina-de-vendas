import styles from "./Start.module.css";
import React from "react";
import logoText from "./img_start/logo ff.png";
import imgStart from "./img_start/imagem inicial.jpg";
import logo from "./img_start/logo F.png";
import pc from "./img_start/computador.png";
import clock from "./img_start/relogio.png";
import touch from "./img_start/toque.png";
import reprodution from "./img_start/reprodutor-de-video.png";
import roadmap from "./img_start/roadmap.jpg";
import logica from "./img_start/logica .jpg";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";

function Start() {
  return (
    <div className={styles.container}>
      <div className={styles.font_logo}>
        <img src={logoText} alt="logo texto" />
      </div>
      <div className={styles.img_start}>
        <p>
          Descubra finalmente como <span>aprender a programação Front-end</span>
          para desenvolver seus websites.
        </p>
        <img src={imgStart} />
      </div>
      <div className={styles.objective_course}>
        <div className={styles.objective_text}>
          <h2>
            Ao aplicar essas técnicas <br /> Front-end você poderá:
          </h2>
          <ul>
            <li>Pegar qualquer site e refazer ele na sua própria tela</li>
            <li>
              Entender a estrutura usada por outros desenvolvedores Front-end
            </li>
            <li>Ter a habilidade de criar sites simples em poucos meses</li>
          </ul>
        </div>
        <div className={styles.objective_text}>
          <h2>E ainda estará preparado para:</h2>
          <ul>
            <li>
              Desenvolver sites na frente dos seus amigos e familiares,
              mostrando sua nova habilidade
            </li>
            <li>
              Criar seus projetos pessoais do seu próprio jeito e com sua marca
            </li>
            <li>
              E um dia ter a chance de entrar no mercado profissional dos
              desenvolvedores Front-end
            </li>
          </ul>
        </div>
        <div className={styles.objective_text}>
          <h2>Você conseguirá tudo isso, independente se você:</h2>
          <ul>
            <li>Não tem talento pra programação</li>
            <li>
              Acredita que não tem idade para se tornar um desenvolvedor web
            </li>
            <li>Não sabe falar inglês</li>
          </ul>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.logo_content}>
          <h2>
            Apresentando
            <br />
            <mark>o curso online:</mark>
          </h2>
          <img className={styles.img_one} src={logo} />
        </div>
        <div className={styles.course_info}>
          <h2>como esse curso funciona?</h2>
        </div>
        <div className={styles.contents_learn}>
          <div className={styles.learn}>
            <img src={pc} />
            <h3>Curso 100% online </h3>
            <p>Assista de qualquer computador, smartphone, tablet e etc</p>
          </div>
          <div className={styles.learn}>
            <img src={reprodution} />
            <h3>+100 vídeo aulas</h3>
            <p>Aulas didáticas, que desenvolvem a habilidade de programação</p>
          </div>
          <div className={styles.learn}>
            <img src={touch} />
            <h3>Acesso vitalício</h3>
            <p>Você paga uma única vez e pode acessar o curso para sempre</p>
          </div>
          <div className={styles.learn}>
            <img src={clock} />

            <h3>Liberado 24H/Dia </h3>
            <p>
              Assista quando quiser
              <br /> e na hora que você <br />
              desejar aprender
            </p>
          </div>
        </div>
      </div>
      <div className={styles.modules}>
        <h2>
          O que você <span>vai aprender </span>
          <br /> neste treinamento
        </h2>
        <div className={styles.module}>
          <div className={styles.img_module}>
            <img src={logica} />
          </div>
          <div className={styles.text_module}>
            <p>
              <span>Módulo 1</span>
            </p>
            <p>Lógica de programação</p>
            <h5>
              Nesse módulo você vai aprender como fazer uma sequência de passos
              necessários, para que uma função seja executada
            </h5>
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.text_module}>
            <p>
              <span>Módulo 2</span>
            </p>
            <p>Roadmap Front-end</p>
            <h5>
              Nesse módulo você vai entender como é a jornada de aprendizagem
              até se tornar um desenvolvedor Front-end
            </h5>
          </div>
          <div className={styles.img_module}>
            <img src={roadmap} />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.img_module}>
            <FaHtml5 className={styles.icon_module1} />
          </div>
          <div className={styles.text_module}>
            <p>
              <span>Módulo 3</span>
            </p>
            <p>HTML</p>
            <h5>
              Todo site necessita dessa linguagem de marcação, e nesse módulo
              você vai aprender a estruturar seus projetos com ela
            </h5>
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.text_module}>
            <p>
              <span>Módulo 4</span>
            </p>
            <p>CSS</p>
            <h5>
              é usado para estilizar elementos escritos em uma linguagem de
              marcação como HTML, então aqui você vai descobrir como deixar seus
              projetos mais estilosos
            </h5>
          </div>
          <div className={styles.img_module}>
            <FaCss3Alt className={styles.icon_module2} />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.img_module}>
            <FaJs className={styles.icon_module3} />
          </div>
          <div className={styles.text_module}>
            <p>
              <span>Módulo 5</span>
            </p>
            <p>Javascript</p>
            <h5>
              Você vai usar essa linguagem de programação para criar páginas
              interativas da Internet. As funções do JavaScript melhoraram a
              experiência durante a navegação em um site.
            </h5>
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.text_module}>
            <p>
              <span>Módulo 6</span>
            </p>
            <p>React js</p>
            <h5>
              Essa é a biblioteca mais popular do JavaScript e é usada para
              construir uma interface de usuário (IU). E ela vai te ajudar a
              adicionar comandos usando um novo método de renderizar sites
            </h5>
          </div>
          <div className={styles.img_module}>
            <FaReact className={styles.icon_module4} />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.img_module}>
            <FaVuejs className={styles.icon_module5} />
          </div>
          <div className={styles.text_module}>
            <p>
              <span>Módulo 7</span>
            </p>
            <p>Vue js</p>
            <h5>
              Com esse framework poderá criar aplicações single page (página
              única) e também para desenvolver vários tipos de interfaces, que
              possuem necessidades de maior interação e experiência mais
              valorosa para o usuário.
            </h5>
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.text_module}>
            <p>
              <span>Módulo 8</span>
            </p>
            <p>Angular js</p>
            <h5>
              Outro framework pra você usar, serve para construir aplicativos
              para web baseados em uma única página dinâmica. Os desenvolvedores
              também usam para criar menus animados.
            </h5>
          </div>
          <div className={styles.img_module}>
            <FaAngular className={styles.icon_module6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
