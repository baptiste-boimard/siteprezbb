import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT STYLE--==
import './style.scss';

// ==IMPORT ACTION==
import { openVideo } from '../../slice/utilities';

function Video() {
  const dispatch = useDispatch();

  // ==CALL STORE==
  const { isOpenVideo } = useSelector((state) => state.utilitiesReducer);

  // == ACTIONS ==
  /**
   * Ferme la modal Video
   */
  const handleClose = () => {
    dispatch(openVideo());
  }

  return (

    <Modal show={isOpenVideo}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Je me présente</Modal.Title>
        </Modal.Header>
        <Modal.Body className='player-wrapper'>
          <ReactPlayer url='https://youtu.be/WKarF1reZsM'
                       className='react-player'
                       controls
                       width='100%'
                       height='100%'
          />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

  );
}
  
export default Video;