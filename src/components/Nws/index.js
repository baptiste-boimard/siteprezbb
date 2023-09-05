import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==
import imgNws from '../../docs/images/sitenws.png'

// ==--IMPORT STYLE--==
import './style.scss';

// ==IMPORT ACTION==
import { openNws } from '../../slice/utilities';

function Nws() {
  const dispatch = useDispatch();

  // ==CALL STORE==
  const { isOpenNws } = useSelector((state) => state.utilitiesReducer);

  // == ACTIONS ==
  /**
   * Ferme la modal Nws
   */
  const handleClose = () => {
    dispatch(openNws());
  }
  /**
   * Ouvre un nouvel onglet vers la Nws
   */
  const handleOpen = () => {
    window.open('https://normandiewebschool.fr/', '_blank');
  }

  return (

    <Modal show={isOpenNws}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Lien vers la Normandie Web School</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Vous souhaitez découvrir mon école ?</p>
          <img src={imgNws}
               className="img-nws"
               alt="image_nws"
               onClick={handleOpen} />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleOpen}>
          Accepter
          </Button>
        </Modal.Footer>
      </Modal>

  );
}
  
export default Nws;