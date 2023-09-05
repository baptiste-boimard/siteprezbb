
import { useEffect } from 'react';

// ==--IMPORT BOOTSTRAP--==
import Card from 'react-bootstrap/Card';

// ==--IMPORT DU JEU--==
import base from './base';

// ==--IMPORT STYLE--==
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

function Board() {

  /**
   * Initialise le jeux avec en paramètre l'élément le contenant
   */
  useEffect(() => {
    const boardContainer = document.querySelector(".board");         
    base.init(boardContainer);
  }, []);

  return (
    <>
      <Card className="board"></Card>
    </>
  );
}

export default Board;