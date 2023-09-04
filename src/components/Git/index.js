import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==
// import banner from '../../docs/images/banner.png'

// ==--IMPORT STYLE--==

// ==IMPORT ACTION==
import { openGit } from '../../slice/utilities';

function Git() {
  const dispatch = useDispatch();


  // ==CALL STORE==
  const { isOpenGit } = useSelector((state) => state.utilitiesReducer);

    // == ACTIONS ==
  const handleClose = () => {
    dispatch(openGit());
  }

  const handleOpen = () => {
    window.open('https://waytolearnx.com', '_blank');
  }

  return (

    <Modal show={isOpenGit}>
        <Modal.Header closeButton>
          <Modal.Title>Git</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOpen}>
          Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  );
}
  
export default Git;