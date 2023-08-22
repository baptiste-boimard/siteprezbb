
import { useEffect } from 'react';
// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';
import base from './base';
// ==--IMPORT IMAGE--==

// ==--IMPORT STYLE--==
import board from './style.scss'

function Board() {

  useEffect(() => {
    const boardContainer = document.querySelector(".board-card");         
    base.init(boardContainer);
  }, []);

  return (
    <div className="board">
    {/* ==--COMPONENT CARD--== */}
      <Card className="board-card" style={board} >
      </Card>
    {/* ==--COMPONENT CARD--== */}

    </div>
  );
}

export default Board;