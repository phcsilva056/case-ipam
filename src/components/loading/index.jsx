import { Container } from '../../assets/css/loading/style';
import loadingArrow from '../../assets/images/loading-arrow.svg';

export default function Loading() {
  return (
    <Container>
      <img src={loadingArrow} />
      <span>CARREGANDO...</span>
    </Container>
  );
}
