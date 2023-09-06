import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==
import github from '../../docs/images/github.png'

// ==--IMPORT STYLE--==
import './style.scss';

// ==IMPORT ACTION==
import { openGit } from '../../slice/utilities';

function Git() {
  const dispatch = useDispatch();

  // ==CALL STORE==
  const { isOpenGit } = useSelector((state) => state.utilitiesReducer);

  // == ACTIONS ==
  /**
   * Ferme la modal Git
   */
  const handleClose = () => {
    dispatch(openGit());
  }
  /**
   * Ouvre un nouvel onglet vers Github
   */
  const handleOpen = () => {
    window.open('https://github.com/baptiste-boimard?', '_blank');
  }

  return (

    <Modal show={isOpenGit}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Lien vers mon Github</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Souhaitez-vous ouvrir mon Github dans un autre onglet ?</p>
          <img src={github}
               className="img-git"
               alt="image_github"
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
  
export default Git;