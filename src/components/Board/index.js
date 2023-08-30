
import { useEffect } from 'react';
// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';
import base from './base';
// ==--IMPORT IMAGE--==

// ==--IMPORT STYLE--==
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

// ==--IMPORT ACTION--==

function Board() {

  useEffect(() => {
    const boardContainer = document.querySelector(".board");         
    base.init(boardContainer);
  }, []);

  return (
    <>

    {/* ==--COMPONENT CARD--== */}
      <Card className="board">

      </Card>
    {/* ==--COMPONENT CARD--== */}

    </>
  );
}

export default Board;