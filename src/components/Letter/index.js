import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==
// import banner from '../../docs/images/banner.png'

// ==--IMPORT STYLE--==

// ==IMPORT ACTION==
import { openLetter } from '../../slice/utilities';

function Letter() {
  const dispatch = useDispatch();


  // ==CALL STORE==
  const { isOpenLetter } = useSelector((state) => state.utilitiesReducer);

    // == ACTIONS ==
  const handleClose = () => {
    dispatch(openLetter());
  }

  return (

    <Modal show={isOpenLetter}>
        <Modal.Header closeButton>
          <Modal.Title>Letter</Modal.Title>
        </Modal.Header>
        <Modal.Body>C'est la Modal Letter</Modal.Body>
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
  
export default Letter;