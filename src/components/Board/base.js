import store from '../../store'

// ==IMPORT REACT ACTION==
import { openCv, openGit, openLetter, openVideo } from '../../slice/utilities'

// == CODE DU JEU ==
const base = {
    player : {x :0,y :0},
    targetCv : {x :1,y :3},
    targetGit : {x :5, y: 1},
    targetLetter : {x :2, y: 2},
    targetVideo : {x :7, y: 4},
    trees : [
        {x : 3,y : 2},
        {x : 2,y : 0},
        {x : 5,y : 2},
        {x : 2,y : 3},
        {x : 1,y : 1},
        {x : 1,y : 2},
        {x : 5,y : 3},
        {x : 5,y : 4},
        {x : 7,y : 3},
        {x : 6,y : 1},
    ],
    board : {x :8,y :5},
    // boardElm : document.querySelector('.board-card'),

    drawBoard (boardX = base.board.x, boardY = base.board.y) {
        
        for (let indexY=0; indexY < boardY ; indexY++) {
            const boardRowElm = document.createElement('div');
            boardRowElm.classList.add('row');
            for(let indexX=0;indexX<boardX;indexX++ ) {
                const boardCellElm = document.createElement('div');
                boardCellElm.classList.add('cell');
  
                if (indexX === (base.targetCv.x)  && (indexY === base.targetCv.y)) {
                    const cvElm = document.createElement('div');
                    cvElm.classList.add('cv');     
                    boardCellElm.append(cvElm);                    
                }

                if (indexX === (base.targetGit.x)  && (indexY === base.targetGit.y)) {
                    const gitElm = document.createElement('div');
                    gitElm.classList.add('git');     
                    boardCellElm.append(gitElm);                    
                }

                if (indexX === (base.targetLetter.x)  && (indexY === base.targetLetter.y)) {
                    const letterElm = document.createElement('div');
                    letterElm.classList.add('letter');     
                    boardCellElm.append(letterElm);                    
                }

                if (indexX === (base.targetVideo.x)  && (indexY === base.targetVideo.y)) {
                    const VideoElm = document.createElement('div');
                    VideoElm.classList.add('video');     
                    boardCellElm.append(VideoElm);                    
                }
                
                if (indexX === (base.player.x) && indexY === (base.player.y)) {               
                    const playerElm = document.createElement('div');
                    playerElm.classList.add('player');                    
                    boardCellElm.append(playerElm);     
                }

                // Ajout des coordonées des cases
                // boardCellElm.classList.add('coord');
                // boardCellElm.textContent = `${indexX} , ${indexY}`;

                
                base.drawTree (indexX,indexY,boardCellElm);
                boardRowElm.append(boardCellElm);   
            }
            base.boardElm.append(boardRowElm);
        }
        base.isGameOver();

    },

    drawTree (indexX, indexY, boardCellElm) {
        for (let indexArray=0;indexArray<base.trees.length;indexArray++) {
            if (indexX === (base.trees[indexArray].x)  && (indexY === base.trees[indexArray].y)) {
                const treeElm = document.createElement('div');
                treeElm.classList.add('tree');
                boardCellElm.append(treeElm);
            }
        }
    },

    checkTrees (XorY, valueBeforeMove) {
        for (let indexArray=0;indexArray<base.trees.length;indexArray++) {
            if (base.player.x === (base.trees[indexArray].x)  && (base.player.y === base.trees[indexArray].y)) {
                base.player.score -= 1;                 
                return base.player[XorY] = valueBeforeMove;
            }
        }
    },

    clearBoard () {
        base.boardElm.textContent = '';
    },
    redrawBoard () {
        base.clearBoard();
        base.drawBoard();
    },

    isGameOver () {
        if (base.player.x === base.targetCv.x && base.player.y === base.targetCv.y) {
            store.dispatch(openCv());
            return;
        }
        if (base.player.x === base.targetGit.x && base.player.y === base.targetGit.y) {
            store.dispatch(openGit());
            return;
        }
        if (base.player.x === base.targetLetter.x && base.player.y === base.targetLetter.y) {
            store.dispatch(openLetter());
            return;
        }
        if (base.player.x === base.targetVideo.x && base.player.y === base.targetVideo.y) {
            store.dispatch(openVideo());
            return;
        }
    },

    goToLeft () {
        
        if (base.cantMove === true)
            return;

        base.player.direction = 'left';
        let valueBeforeMove = base.player.x;
        let XorY = 'x';
        base.player.x -= 1;
        if (base.player.x < 0) {
            base.player.x = 0;
            return base.player.x = valueBeforeMove;
        }
        base.checkTrees(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },
    goToRight () {
        
        if (base.cantMove === true)
            return;

        base.player.direction = 'right';
        let valueBeforeMove = base.player.x;
        let XorY = 'x';
        base.player.x += 1;
        if (base.player.x > base.board.x -1) {
            base.player.x = base.board.x -1;
            return base.player.x = valueBeforeMove;
        }
        base.checkTrees(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },
    goToUp () {
        
        if (base.cantMove === true)
            return;

        base.player.direction = 'up';
        let valueBeforeMove = base.player.y;
        let XorY = 'y';
        base.player.y -= 1;
        if (base.player.y < 0) {
            base.player.y = 0;
            return base.player.y = valueBeforeMove;
        }
        base.checkTrees(XorY,valueBeforeMove);
        base.redrawBoard ();

    },
    goToDown () {
        
        if (base.cantMove === true)
            return;

        base.player.direction = 'down';
        let valueBeforeMove = base.player.y;
        let XorY = 'y';
        base.player.y += 1;
        if (base.player.y > base.board.y-1) {
            return base.player.y = valueBeforeMove;
        }
        base.checkTrees(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },

    listenKeyboardEvents () {
        document.addEventListener ('keyup', base.handleKeyboardEvents);
    },

    listenClickEvent () {
        document.querySelector(".cv").addEventListener ('click', ()=> {store.dispatch(openCv())});       
        document.querySelector(".git").addEventListener ('click', ()=> {store.dispatch(openGit())});       
        document.querySelector(".letter").addEventListener ('click', ()=> {store.dispatch(openLetter())});       
        document.querySelector(".video").addEventListener ('click', ()=> {store.dispatch(openVideo())});       
    },

    handleKeyboardEvents (event) {
        const keyupPressed = event.key;
        console.log(keyupPressed);
        switch(keyupPressed) {
        case 'ArrowLeft' : base.goToLeft();
            break;
        case 'ArrowRight' : base.goToRight();
            break;
        case 'ArrowUp' : base.goToUp();
            break;
        case 'ArrowDown' : base.goToDown();
            break;
        default:
        }
    },

    init (boardContainer) {    
        base.boardElm = boardContainer
        base.listenKeyboardEvents();
        base.drawBoard();
        base.listenClickEvent();
    },
};

export default base; 
