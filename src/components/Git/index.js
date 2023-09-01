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

  return (

    <Modal show={isOpenGit}>
        <Modal.Header closeButton>
          <Modal.Title>Git</Modal.Title>
        </Modal.Header>
        <Modal.Body>C'est la Modal Git</Modal.Body>
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
  
export default Git;