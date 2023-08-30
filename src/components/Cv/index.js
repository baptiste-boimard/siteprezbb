import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==
// import banner from '../../docs/images/banner.png'

// ==--IMPORT STYLE--==
import './style.scss';

// ==IMPORT ACTION==
import { openCv } from '../../slice/utilities';

function Cv() {
  const dispatch = useDispatch();


  // ==CALL STORE==
  const { isOpenCv } = useSelector((state) => state.utilitiesReducer);

    // == ACTIONS ==
  const handleClose = () => {
    dispatch(openCv());
  }

  return (

    <Modal show={isOpenCv}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  );
}
  
export default Cv;