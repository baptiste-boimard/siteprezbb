// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
import banner from '../../docs/images/banner.png'

// ==--IMPORT STYLE--==
import './style.scss'

function Header() {
  return (
    <div className="header">
    {/* ==--COMPONENT CARD--== */}
      <Card className="header-card">
          <Card.Img variant="top" src={banner} className="header-card-image"/>
        <Card.Body className="header-card-body">
          <Card.Text className="header-card-text">
            Déplacez mon avatar avec les touches ←↑↓→ de votre clavier ou vous pouvez cliquer directement sur l'élément qui vous intéresse.
          </Card.Text>
        </Card.Body>
      </Card>
    {/* ==--COMPONENT CARD--== */}

    </div>
  );
}

export default Header;