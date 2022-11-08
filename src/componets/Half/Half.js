import styles from "./Half.module.css";
import React from "react";
import {
  FaDiscord,
  FaBootstrap,
  FaGithub,
  FaCode,
  FaUserTie,
} from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import certificate from "./img_half/certificado.png";
import pro1 from "./img_half/profile1.jpg";
import pro2 from "./img_half/profile2.jpg";
import pro3 from "./img_half/profile3.jpg";

function Half() {
  return (
    <div className={styles.container_half}>
      <div className={styles.area_bonus}>
        <div className={styles.h2_bonus}>
          <h2>
            Além do curso completo <br />
            vou disponibilizar mais 4 bônus
          </h2>
        </div>

        <div className={styles.bonus}>
          <div className={styles.icon_bonus}>
            <FaBootstrap className={styles.icon1} />
          </div>
          <div className={styles.text_bonus}>
            <h4>BOOTSTRAP</h4>
            <p>
              Aqui nesse módulo, vou te ensinar a usar o BOOTSTRAP para
              desenvolvimento de componentes de interface front-end para sites e
              aplicações web
            </p>
          </div>
        </div>
        <div className={styles.bonus}>
          <div className={styles.icon_bonus}>
            <FaGithub className={styles.icon2} />
          </div>
          <div className={styles.text_bonus}>
            <h4>Git e Github</h4>
            <p>
              são utilizados no dia a dia das pessoas que criam software por um
              motivo bem simples: ter uma forma fácil de gerenciar o código
              fonte da aplicação. E aqui você vai aprender usá-los.
            </p>
          </div>
        </div>
        <div className={styles.bonus}>
          <div className={styles.icon_bonus}>
            <FaCode className={styles.icon3} />
          </div>
          <div className={styles.text_bonus}>
            <h4>Dicas de programação</h4>
            <p>
              Nesse bônus você vai aprender a organizar seu LinkedIn, e também
              como procurar vagas e trabalhos freelancer para começar a entrar
              no mercado.
            </p>
          </div>
        </div>
        <div className={styles.bonus}>
          <div className={styles.img_bonus}>
            <img src={certificate} />
          </div>
          <div className={styles.text_bonus}>
            <h4>Certificado de conclusão</h4>
            <p>
              Você não irá apenas aprender a desenvolver seus sites e projetos.
              Ao finalizar o curso, você receberá o seu certificado de conclusão
              de curso que poderá ser apresentado e usado onde você quiser.
            </p>
          </div>
        </div>
        <div className={styles.h2_bonus}>
          <h2>
            O valor somado de todos os bônus é de: <br />
            <del>R$57,00</del>
            <br />e eles <mark>não terão</mark> custo pra você
          </h2>
        </div>
      </div>
      <div className={styles.community}>
        <div className={styles.community_text}>
          <h2>
            Você fará parte da comunidade
            <br />
            <span>Front-end</span>
            <FaDiscord className={styles.icon} />
          </h2>
        </div>
        <div className={styles.community_text}>
          <p>
            A comunidade Front-end tem vários membros para você compartilhar
            suas experiências, e também tem instrutores para te auxiliar.
          </p>
        </div>
        <div className={styles.community_text}>
          <h5>Ao entrar na comunidade você poderá:</h5>
        </div>
        <div className={styles.community_text}>
          <ul>
            <li>
              Envia seus códigos para serem analisados e avaliados, para
              descobrir onde você tá errando.
            </li>
            <li>Enviar qualquer dúvida sobre as aulas do curso</li>
            <li>
              Participar de sorteios e competições exclusivas entre os alunos
            </li>
            <li>Se motivar, tendo apoio de outros alunos</li>
          </ul>
        </div>
      </div>
      <div className={styles.carousel_area}>
        <div className={styles.title_carousel}>
          <h2>Depoimento de alunos sobre o curso formação Front-end</h2>
        </div>

        <Carousel>
          <Carousel.Item>
            <div className={styles.background}>
              <img className="d-block w-80" src={pro1} />
            </div>
            <Carousel.Caption>
              <h3>Luciano ferreira</h3>
              <p>"Muito bom, em poucos meses já consigo ver resultados!"</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className={styles.background}>
              <img className="d-block w-80" src={pro2} />
            </div>

            <Carousel.Caption>
              <h3>Karla santos</h3>
              <p>
                "Finalmente consegui achar uma direção para trilhar nessa área!"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.background}>
              <img className="d-block w-80" src={pro3} />
            </div>

            <Carousel.Caption>
              <h3>Gabriel borges</h3>
              <p>"O melhor curso Front-end do mercado sem dúvidas!"</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.about}>
        <div className={styles.title_about}>
          <h2>Quem sou eu?</h2>
        </div>

        <div className={styles.contents_about}>
          <div className={styles.contents}>
            <FaUserTie className={styles.my_profile} />
          </div>

          <div className={styles.contents}>
            <h5>
              Sou um desenvolvedor web que sempre busca evoluir, e para isso
              crio e refaço sites do zero, elaboro ideias para fazer meus
              próprios projetos pessoais.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Half;
