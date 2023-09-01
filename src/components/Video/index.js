import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==
// import banner from '../../docs/images/banner.png'

// ==--IMPORT STYLE--==

// ==IMPORT ACTION==
import { openVideo } from '../../slice/utilities';

function Video() {
  const dispatch = useDispatch();


  // ==CALL STORE==
  const { isOpenVideo } = useSelector((state) => state.utilitiesReducer);

    // == ACTIONS ==
  const handleClose = () => {
    dispatch(openVideo());
  }

  return (

    <Modal show={isOpenVideo}>
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>C'est la Modal Video</Modal.Body>
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
  
export default Video;