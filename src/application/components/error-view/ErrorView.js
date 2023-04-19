import { Container, Image, ErrorMessage } from './ErrorView.style';
import ErrorImage from './undraw_server_down.svg';

function ErrorView() {
  return (
    <Container>
      <Image src={ErrorImage} alt="error image" />
      <ErrorMessage>Oops...something went wrong</ErrorMessage>
    </Container>
  );
}

export default ErrorView;
