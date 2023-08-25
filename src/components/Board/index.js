
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ==IMPORT COMPONENTS==
import Row from '../Row'
// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';
import base from './base';
// ==--IMPORT IMAGE--==

// ==--IMPORT STYLE--==
import board from './style.scss'

// ==--IMPORT ACTION--==
import {changeBoard} from '../../slice/board';

function Board() {
  const dispatch = useDispatch();

  // const { boardY, boardX } = useSelector((state) => state.boardReducer);
  const {board, boardY, boardX} = useSelector((state) => state.boardReducer);

  useEffect(() => {
    const boardContainer = document.querySelector(".board-card");         
    base.init(boardContainer);
    // drawTree();
    // drawBoard();
  });

  // const drawTree = (indexX, indexY, boardCellElm) => {
  //   for (let indexArray=0;indexArray<base.trees.length;indexArray++) {
  //       if (indexX === (base.trees[indexArray].x)  && (indexY === base.trees[indexArray].y)) {
  //           const treeElm = document.createElement('div');
  //           treeElm.classList.add('tree');
  //           boardCellElm.append(treeElm);
  //       }
  //   }
  //   console.log('coucou');
  // };

  const drawBoard = () => {
    let preBoard = [];
    for (let indexY=0;indexY<boardY;indexY++) {
      // preBoard.push(<div className='row'>coucou</div>);
      const boardRowElm = document.createElement('div');
      boardRowElm.classList.add('row');
      for(let indexX=0;indexX<boardX;indexX++ ) {
        const boardCellElm = document.createElement('div');
        boardCellElm.classList.add('cell');
        boardRowElm.append(boardCellElm);   
      }
    preBoard.push(boardRowElm)
    };
    console.log(preBoard);
    dispatch(changeBoard(preBoard));
  };

  return (
    <div className="board">
    {/* ==--COMPONENT CARD--== */}
      <Card className="board-card">


        {/* 1ère méthode avec un spread */}
        {/* {[...Array(5)].map((x, i) =>
          <div className='row cell'>{[...Array(2)].map((x, i) =>
            <div></div>)}
          </div>)} */}


        {/* 2ème méthode avec Array.from */}
        {/* {
          Array.from(Array(4)).map((x,indexY) => 
            <div className='row'key={indexY}>
              {
                (Array.from(Array(7)).map((y,indexX) =>
                <div className='cell'key={indexX}></div>))
              }
            </div>)
        } */}

        {/* 3ème méthode avec une boucle for */}

      </Card>
    {/* ==--COMPONENT CARD--== */}

    </div>
  );
}

export default Board;