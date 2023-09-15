import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==
import cv from '../../docs/images/cvNew.png'

// ==--IMPORT STYLE--==
import './style.scss';

// ==IMPORT ACTION==
import { openCv } from '../../slice/utilities';

function Cv() {
  const dispatch = useDispatch();

  // ==CALL STORE==
  const { isOpenCv } = useSelector((state) => state.utilitiesReducer);

  // == ACTIONS ==
  /**
   * Ferme la modal Cv
   */
  const handleClose = () => {
    dispatch(openCv());
  }

  return (

    <Modal show={isOpenCv}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Consulter mon CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={cv} className="img-cv" alt="cv"/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

  );
}
  
export default Cv;