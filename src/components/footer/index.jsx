import { Container } from '../../assets/css/footer/style';

function Footer() {
  return (
    <Container>
      <span>
        <a
          target="_blank"
          href="https://servicodados.ibge.gov.br/api/docs/localidades"
        >
          API Localidades
        </a>
      </span>
      <span>
        <a
          target="_blank"
          href="https://servicodados.ibge.gov.br/api/docs/malhas?versao=3"
        >
          API Malhas
        </a>
        (Mapa)
      </span>
      <span>
        Feito por{' '}
        <a target="_blank" href="https://www.linkedin.com/in/phcsilva056/">
          Paulo Henrique Correa da Silva
        </a>
      </span>
    </Container>
  );
}
export default Footer;
