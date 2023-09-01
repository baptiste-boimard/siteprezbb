import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==
// import banner from '../../docs/images/banner.png'

// ==--IMPORT STYLE--==

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
          <Modal.Title>CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>C'est la Modal CV</Modal.Body>
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