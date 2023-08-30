import store from '../../store'
import {openCv} from '../../slice/utilities'

function openCvModal() {
    store.dispatch(openCv());
}


const base = {


    player : {x :0,y :0},
    targetCell : {x :7,y :4},
    littleCoffer : [],
    stones : [],
    stonesDestroyed : [],
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

    boardElm : document.querySelector('.board-card'),
    // inputSelectLvlElm : document.querySelector('#input-selectLvl'),

    cantMove : false,
   
    /**
     * Dessine le board et rapatrie les valeurs du level
     * @property {number} boardX - Taille X du board
     * @property {number} boardY- Taille Y du board
     * @property {number} playerX- Coordonée X du player
     * @property {number} playerY- Coordonée Y du player
     * @property {number} targetCellX- Coordonée X du coffre
     * @property {number} targetCellY- Coordonée Y du coffre
     * @property {string} playerDirection- Orientation de départ du perso
     * @property {array} stonesArray - Liste des coordonées des stones
     * @property {array} treesArray - Liste des coordonées des trees
     * @property {array} littleCoffer - Liste des coordonées des LittleCoffer
     * @property {function} nextLvl - nom de la fonction du prochain level
     * @property {function} currentLvl - nom de la fonction du curent level
     */
    valueFromLvl (boardX , boardY, playerX, playerY, targetCellX, targetCellY, playerDirection, stonesArray,treesArray,littleCofferArray, nextLvl, currentLvl) {
        base.board.x = boardX;
        base.board.y = boardY;
        base.player.x = playerX;
        base.player.y = playerY;
        base.targetCell.x = targetCellX;
        base.targetCell.y = targetCellY;
        base.player.direction = playerDirection;
        base.stones = stonesArray;
        base.trees = treesArray;
        base.littleCoffer = littleCofferArray;
        base.player.nextLvl = nextLvl;
        base.player.currentLvl = currentLvl;
        base.player.score = 0;
        base.cantMove = false;
        base.player.gantlet = false;
    },
    drawBoard (boardX = base.board.x, boardY = base.board.y) {
        
        console.log(base.boardElm)

        for (let indexY=0; indexY < boardY ; indexY++) {
            const boardRowElm = document.createElement('div');
            boardRowElm.classList.add('row');
            for(let indexX=0;indexX<boardX;indexX++ ) {
                const boardCellElm = document.createElement('div');
                boardCellElm.classList.add('cell');

                base.drawlittleCoffer (indexX,indexY,boardCellElm);
  
                if (indexX === (base.targetCell.x)  && (indexY === base.targetCell.y)) {
                    boardCellElm.classList.add('coffer');
                }
                
                if (indexX === (base.player.x) && indexY === (base.player.y)) {               
                    const playerElm = document.createElement('div');
                    console.log(playerElm);
                    playerElm.classList.add('player');                    
                    console.log(boardCellElm);
                    boardCellElm.append(playerElm);     
                    console.log(boardCellElm);
                    // boardCellElm.classList.add('coffer');
                }


              
                
                
                // // Ajout des coordonées des cases
                // boardCellElm.classList.add('coord');
                // boardCellElm.textContent = `${indexX} , ${indexY}`;
                // // Ajout des coordonées des cases

                
                base.drawStone (indexX,indexY,boardCellElm);
                base.drawTree (indexX,indexY,boardCellElm);
                boardRowElm.append(boardCellElm);   
            }
            base.boardElm.append(boardRowElm);
        }
        base.checkLittleCoffer();
        base.isGameOver();

    },

    drawStone (indexX, indexY, boardCellElm) {
        for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
            if (indexX === (base.stones[indexArray].x)  && (indexY === base.stones[indexArray].y)) {
                const stoneElm = document.createElement('div');
                stoneElm.classList.add('stone');
                boardCellElm.append(stoneElm);
            }
        }
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


    drawlittleCoffer (indexX, indexY, boardCellElm) {
        if (base.player.gantlet === false) {
            for (let indexArray=0;indexArray<base.littleCoffer.length;indexArray++) {
                if (indexX === (base.littleCoffer[indexArray].x)  && (indexY === base.littleCoffer[indexArray].y)) {
                    const littleCofferElm = document.createElement('div');
                    littleCofferElm.classList.add('littleCoffer');
                    boardCellElm.append(littleCofferElm);
                }
            }
        }
    },
    checkStones (XorY, valueBeforeMove) {
        for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
            if (base.player.x === (base.stones[indexArray].x)  && (base.player.y === base.stones[indexArray].y)) {
                base.player.score -= 1;
                return base.player[XorY] = valueBeforeMove;       
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
    checkLittleCoffer () {
        if (base.player.gantlet === false) {
            for (let indexArray=0;indexArray<base.littleCoffer.length;indexArray++) {
                if (base.player.x === (base.littleCoffer[indexArray].x) && (base.player.y === base.littleCoffer[indexArray].y)) {
                    base.player.gantlet = true;
                    base.cantMove = true;
                    setTimeout(base.isLittleCoffer(), 200);
                    return;
                }
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
    replay () {
        base.stones = base.stones.concat(base.stonesDestroyed);
        base.stonesDestroyed = [];
        base.player.x = 0;
        base.player.y = 0;
        base.player.direction = 'right';
        base.player.score = 0;
        base.player.gantlet = false;
        base.cantMove = false;
        base.clearBoard();
        base.init();

    },
    isGameOver () {
        if (base.player.x === base.targetCell.x && base.player.y === base.targetCell.y) {
            base.cantMove = true;
            setTimeout(base.isWin(), 200);
            return;
        }
    },
    isWin () {
        
        base.creatingBoxDialog();

        const winDivLeftButtonReplay = document.createElement('button');
        winDivLeftButtonReplay.classList.add('winDivLeftButtonReplay');
        const winDivLeftButtonNext = document.createElement('button');
        winDivLeftButtonNext.classList.add('winDivLeftButtonNext');
        const winDivLeftDivButton = document.querySelector('.winDivLeftDivButton');
        winDivLeftDivButton.append(winDivLeftButtonReplay,winDivLeftButtonNext);
        const winDivRightElm = document.querySelector('.winDivRightElm');
        winDivRightElm.style.backgroundImage ='url(../img/linkTresor.png)';
        winDivRightElm.style.margin ='10px -30px 0 60px';

        winDivLeftButtonReplay.addEventListener('click', base.handleOnClickReplayButton);
        winDivLeftButtonNext.addEventListener('click', base.handleOnClickNextButton);

        const winDivLeftH1 = document.querySelector('.winDivLeftH1');
        winDivLeftH1.textContent = `Bravo ${base.player.name} tu as gagné !!`;
        const winDivLeftP = document.querySelector('.winDivLeftP'); 
        winDivLeftP.textContent = `Tu as fait ${base.player.score} déplacements`;
        winDivLeftButtonNext.textContent ='Niveau suivant =>';
        winDivLeftButtonReplay.textContent ='Rejouer ?';

        openCvModal();
    },
    isLittleCoffer () {

        base.creatingBoxDialog();

        const winDivLeftButtonOK= document.createElement('button');
        winDivLeftButtonOK.classList.add('winDivLeftButtonOK');
        const winDivLeftDivButton = document.querySelector('.winDivLeftDivButton');
        winDivLeftDivButton.append(winDivLeftButtonOK);
        const winDivRightElm = document.querySelector('.winDivRightElm');
        winDivRightElm.style.backgroundImage ='url(../img/linkGantlet.png)';
        winDivRightElm.style.margin ='0px 29px 0 30px';
        // winDivLeftButtonOK.addEventListener('click', base.handleOnClickOKButton);

        let winDivLeftH1 = document.querySelector('.winDivLeftH1');
        winDivLeftH1.textContent = `Bravo ${base.player.name} tu as trouvé le gant briseur de rocher !!`;
        const winDivLeftP = document.querySelector('.winDivLeftP'); 
        winDivLeftP.textContent = 'Appuis sur \'ESPACE\' pour pouvoir l\'utiliser devant un rocher';
        const winDivLeftButtonNext = document.querySelector('.winDivLeftButtonOK');
        winDivLeftButtonNext.textContent ='Continuer';

    },

    creatingBoxDialog () {
        const winDivElm = document.createElement('div');
        winDivElm.classList.add('winDivElm');
        winDivElm.style.display ='flex';
        const winDivLeftElm = document.createElement('div');
        winDivLeftElm.classList.add('winDivLeftElm');
        const winDivLeftH1 = document.createElement('h1');
        winDivLeftH1.classList.add('winDivLeftH1');
        const winDivLeftP = document.createElement('p');
        winDivLeftP.classList.add('winDivLeftP');
        const winDivLeftDivButton = document.createElement('div');
        winDivLeftDivButton.classList.add('winDivLeftDivButton');
        const winDivRightElm = document.createElement('div');
        winDivRightElm.classList.add('winDivRightElm');
        winDivElm.append(winDivLeftElm, winDivRightElm);
        winDivLeftElm.append(winDivLeftH1,winDivLeftP,winDivLeftDivButton);
        base.boardElm.append(winDivElm);

        // const winDivLeftForm = document.createElement('form'); 
        // winDivLeftForm.classList.add('winDivLeftForm');
        // const winDivLeftElm = document.querySelector('.winDivElm');
        // const winDivLeftFormInput = document.createElement('input');
        // winDivLeftFormInput.classList.add('winDivLeftFormInput');
        // const winDivLeftFormButton = document.createElement('button');
        // winDivLeftFormButton.classList.add('winDivLeftFormButton');
        // winDivLeftFormButton.textContent = 'Confirmer';
        
        // winDivLeftForm.append(winDivLeftFormInput);
        // winDivLeftForm.append(winDivLeftFormButton);
        
        // const winDivLeftDivForm = document.createElement('div');
        // winDivLeftDivForm.append(winDivLeftForm);
        // winDivLeftElm.append(winDivLeftDivForm);

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
        base.checkStones(XorY,valueBeforeMove);
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
        base.checkStones(XorY,valueBeforeMove);
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
        base.checkStones(XorY,valueBeforeMove);
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
        base.checkStones(XorY,valueBeforeMove);
        base.checkTrees(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },
    spaceKey () {
        if (base.player.gantlet === true) {
            switch (base.player.direction) {
            case 'right' : {
                for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
                    if ((base.player.x+1) === (base.stones[indexArray].x)  && ((base.player.y) === base.stones[indexArray].y)) {
                        
                        const stoneDestroyed = base.stones.splice(indexArray,1);  
                        
                        base.stonesDestroyed = base.stonesDestroyed.concat(stoneDestroyed);
                        
                        base.redrawBoard ();
                
                    }
                }
            }
                break;
            case 'left' : {
                for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
                    if ((base.player.x-1) === (base.stones[indexArray].x)  && ((base.player.y) === base.stones[indexArray].y)) {
                        
                        const stoneDestroyed = base.stones.splice(indexArray,1);  
                        
                        base.stonesDestroyed = base.stonesDestroyed.concat(stoneDestroyed);
                        
                        base.redrawBoard ();
                
                    }
                }
            }
                break;
            case 'up' : {
                for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
                    if ((base.player.x) === (base.stones[indexArray].x)  && ((base.player.y-1) === base.stones[indexArray].y)) {
                        
                        const stoneDestroyed = base.stones.splice(indexArray,1);  
                        
                        base.stonesDestroyed = base.stonesDestroyed.concat(stoneDestroyed);

                        base.redrawBoard ();

                    }
                }
            }
                break;
            case 'down' : {
                for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
                    if ((base.player.x) === (base.stones[indexArray].x)  && ((base.player.y+1) === base.stones[indexArray].y)) {
                        
                        const stoneDestroyed = base.stones.splice(indexArray,1);  
                        
                        base.stonesDestroyed = base.stonesDestroyed.concat(stoneDestroyed);
                        
                        base.redrawBoard ();
                
                    }
                }
            }
                break;
            }
        }
    },
    listenKeyboardEvents () {
        document.addEventListener ('keyup', base.handleKeyboardEvents);
    },
    // listenEventInputNameElm () {
    //     const buttonInputNameElm = document.querySelector('#button-inputName');
    //     buttonInputNameElm.addEventListener ('click', base.handleSubmitHeroName);
    // },
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
        case ' ' : base.spaceKey();
            break;
        }
    },
    handleOnClickReplayButton () {
        base.replay();
    },
    handleOnClickNextButton () {
        base.player.score = 0;
        base.cantMove = false;
        base.gantlet = false;
        base.clearBoard();
        base.player.nextLvl();
    },
    handleOnClickConfirmerButton(event){
        event.preventDefault();
        const dialogBox = document.querySelector('.dialogBox');
        dialogBox.style.visibility = 'hidden';
        const inputName = document.querySelector('.inputName');
        const inputNameValue = inputName.value;
        const heroName = document.querySelector('.heroName');
        heroName.textContent = inputNameValue;
        base.player.name = inputNameValue;
    },
    handleOnClickOKButton () {
        
        const winDivElm = document.querySelector('.winDivElm');
        winDivElm.textContent = '';
        base.cantMove = false;
        base.redrawBoard();

    },
    // handleSubmitHeroName (event) {
    //     event.preventDefault();
    //     const inputNameElm = document.querySelector('#input-name');
    //     const inputNameElmValue = inputNameElm.value;
    //     inputNameElm.style.placeholder = inputNameElmValue;
    //     base.player.name = inputNameElmValue;
    // },
    init (boardContainer) {    
        console.log('coucou')
        base.boardElm = boardContainer
        base.listenKeyboardEvents();
        // base.listenEventInputNameElm();
        base.drawBoard();
    },
};

export default base; 
