import { Container, Image } from './styles';
import clipboardSVG from '../../assets/images/clipboard.svg';
import bootsSVG from '../../assets/images/boots.svg';
import fieldSVG from '../../assets/images/field.svg';
import { Link } from 'react-router-dom';

function Sidebar() {

  const currentComponent = document.location.pathname;

  return (
    <>
      <Container>
        <Link to="/field">
          <Image src={fieldSVG} alt="campo" bright={currentComponent === '/field'} />
        </Link>
        <Link to="/">
        <Image src={clipboardSVG} alt="prancheta" bright={currentComponent === '/'} />
        </Link>
        <Image src={bootsSVG} alt="chuteira" bright={currentComponent === '/test'} />

      </Container>
    </>
  );
}

export default Sidebar;