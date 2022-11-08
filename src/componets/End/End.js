import styles from "./End.module.css";
import React from "react";
import {
  FaLock,
  FaTrophy,
  FaCheckCircle,
  FaCheck,
  FaWhatsapp,
} from "react-icons/fa";
import logoText from "./img_end/logo ff.png";
import whats from "./img_end/whatsap.png";

function End() {
  return (
    <div className={styles.container_end}>
      <div className={styles.price}>
        <div className={styles.text_price}>
          <h2>
            Essa oferta é por tempo limitado <br />
            <mark>você nunca mais verá esse preço</mark>
          </h2>
        </div>

        <h3>
          Por apenas R$ 97,00 <br /> ou só
          <span> 10x11,08</span>
        </h3>

        <button>Sim, eu quero</button>
        <div className={styles.text_price}>
          <h6>
            <span>Aviso:</span> o número de vagas para essa turma está se
            esgotando <br />a qualquer momento essa página pode sair do ar
          </h6>
        </div>

        <div className={styles.icons_price}>
          <div className={styles.icons}>
            <FaCheckCircle className={styles.icon} />
            <p>Checkout seguro</p>
          </div>
          <div className={styles.icons}>
            <FaTrophy className={styles.icon} />
            <p> satisfação garantida</p>
          </div>
          <div className={styles.icons}>
            <FaLock className={styles.icon} />
            <p>Privacidade protegida</p>
          </div>
        </div>
      </div>
      <div className={styles.warranty}>
        <div className={styles.icon_warranty}>
          <h3>
            Garantia <br />
            <span>7</span> <br />
            dias
          </h3>
        </div>
        <div className={styles.text_warranty}>
          <p>Garantia incondicional de 7 dias</p>
          <p>Fique 100% satisfeito ou peça seu dinheiro de volta</p>
          <p>
            Você tem 7 dias para acessar o conteúdo e se ainda achar que o curso
            não é para você, basta pedir reembolso e devolverei seu dinheiro de
            forma integral. sem perguntas e questionamentos.
          </p>
          <h5>Nesse caso, os riscos são todos meus.</h5>
        </div>
      </div>
      <div className={styles.doubts}>
        <div className={styles.doubts_title}>
          <h2>
            Alguma dúvida? <br />
            as respostas para todas as <br />
            perguntas abaixo é <span>sim</span>
          </h2>
        </div>
        <div className={styles.doubts_answer}>
          <div className={styles.answer_icon}>
            <FaCheck className={styles.icon} />
          </div>
          <div className={styles.answer}>
            <p>É seguro realizar a compra do curso formação Front-end?</p>
          </div>
        </div>
        <div className={styles.doubts_answer}>
          <div className={styles.answer_icon}>
            <FaCheck className={styles.icon} />
          </div>
          <div className={styles.answer}>
            <p>Você realmente devolve o dinheiro caso eu não goste do curso?</p>
          </div>
        </div>
        <div className={styles.doubts_answer}>
          <div className={styles.answer_icon}>
            <FaCheck className={styles.icon} />
          </div>
          <div className={styles.answer}>
            <p>Eu posso pagar em até 10x no cartão de crédito?</p>
          </div>
        </div>
        <div className={styles.doubts_answer}>
          <div className={styles.answer_icon}>
            <FaCheck className={styles.icon} />
          </div>
          <div className={styles.answer}>
            <p>
              Ao terminar o curso vou ter acesso imediato ao meu certificado?
            </p>
          </div>
        </div>
        <div className={styles.doubts_answer}>
          <div className={styles.answer_icon}>
            <FaCheck className={styles.icon} />
          </div>
          <div className={styles.answer}>
            <p>
              É verdade que nos primeiros meses já consigo ver os resultados?
            </p>
          </div>
        </div>
        <div className={styles.doubts_answer}>
          <div className={styles.answer_icon}>
            <FaCheck className={styles.icon} />
          </div>
          <div className={styles.answer}>
            <p>
              As técnicas do curso servem para mim que tem uma idade avançada?
            </p>
          </div>
        </div>
        <div className={styles.doubts_answer}>
          <div className={styles.answer_icon}>
            <FaCheck className={styles.icon} />
          </div>
          <div className={styles.answer}>
            <p>
              Sinto que não tenho talento para programar, acha que vou conseguir
              aprender?
            </p>
          </div>
        </div>
      </div>

      <div className={styles.steps}>
        <div className={styles.steps_title}>
          <h2>
            siga os <mark>3 passos simples</mark> abaixo para <br /> garantir
            sua vaga no formação Front-end
          </h2>
        </div>
        <div className={styles.steps_organization}>
          <div className={styles.number_steps}>1°</div>
          <div className={styles.number_text}>clicar no botão abaixo</div>
        </div>
        <div className={styles.steps_organization}>
          <div className={styles.number_steps}>2°</div>
          <div className={styles.number_text}>
            Preencha as informações de pagamento 100% seguras com encriptação
            militar de dados.
          </div>
        </div>
        <div className={styles.steps_organization}>
          <div className={styles.number_steps}>3°</div>
          <div className={styles.number_text}>
            Receber nosso email imediato com os dados de login e senha para seu
            acesso.
          </div>
        </div>
        <div className={styles.steps_one}>
          <h4>siga o passo 1° abaixo:</h4>
        </div>
        <div className={styles.button}>
          <button>Sim, eu quero</button>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contact_icon}>
          <FaWhatsapp className={styles.icon_whatsap} />
        </div>
        <div className={styles.contact_text}>
          <p>Quer um atendimento exclusivo pelo Whatsapp?</p>
          <h6>
            no caso de dúvida basta acionar a nossa central de atendimento via
            WhatsApp pelo número abaixo:
          </h6>
          <p>(99) 99999-9999</p>
        </div>
      </div>
      <div className={styles.logo}>
        <img src={logoText} />
      </div>
      <div className={styles.footer}>
        <p>Todos os direitos reservados - Formação Front-end</p>
        <p>Política de privacidade - Termos de uso</p>
      </div>
      <img className={styles.whats} src={whats} />
    </div>
  );
}

export default End;
