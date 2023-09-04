import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==--IMPORT IMAGE--==

// ==--IMPORT STYLE--==
import './style.scss';

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
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Je me présente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactPlayer url='https://youtu.be/UdT9ylXkTg8' controls/>
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