import store from '../../store'

// ==IMPORT REACT ACTION==
import { openCv, openGit, openLetter, openVideo, openNws, closeAllModal } from '../../slice/utilities'

// == CODE DU JEU ==
const base = {
    player : {x :0,y :0},
    targetCv : {x :1,y :3},
    targetGit : {x :5, y: 1},
    targetLetter : {x :2, y: 2},
    targetVideo : {x :7, y: 4},
    targetNws : {x :1, y: 0},
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

    /**
     * Dessine le board en fonction de la taille définie
     * @param {Object} boardX Taille horizonthale
     * @param {Object} boardY Taille verticale
     */
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
                    const videoElm = document.createElement('div');
                    videoElm.classList.add('video');     
                    boardCellElm.append(videoElm);                    
                }
                
                if (indexX === (base.targetNws.x) && indexY === (base.targetNws.y)) {               
                    const nwsElm = document.createElement('div');
                    nwsElm.classList.add('nws');                    
                    boardCellElm.append(nwsElm);     
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
                base.listenClickEvent();


    },
    /**
     * Implante les arbres sur le board
     * @param {Value} indexX Coordonnée X
     * @param {Value} indexY Coordonnée Y
     * @param {Object} boardCellElm Div qui doit accueillir l'élément
     */
    drawTree (indexX, indexY, boardCellElm) {
        for (let indexArray=0;indexArray<base.trees.length;indexArray++) {
            if (indexX === (base.trees[indexArray].x)  && (indexY === base.trees[indexArray].y)) {
                const treeElm = document.createElement('div');
                treeElm.classList.add('tree');
                boardCellElm.append(treeElm);
            }
        }
    },
    /**
     * Vérifier la présence d'arbre avant le déplacement
     * @param {String} XorY Direction du mouvement
     * @param {Value} valueBeforeMove Coordonnée de la direction avant déplacement
     * @returns 
     */
    checkTrees (XorY, valueBeforeMove) {
        for (let indexArray=0;indexArray<base.trees.length;indexArray++) {
            if (base.player.x === (base.trees[indexArray].x)  && (base.player.y === base.trees[indexArray].y)) {
                base.player.score -= 1;                 
                return base.player[XorY] = valueBeforeMove;
            }
        }
    },

    /**
     * Efface le board
     */
    clearBoard () {
        base.boardElm.textContent = '';
    },

    /**
     * Redessine le board
     */
    redrawBoard () {
        base.clearBoard();
        base.drawBoard();
    },

    /**
     * Vérifie si le joueur atteint un objectif
     * @returns Déclenche une action React
     */
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
        if (base.player.x === base.targetNws.x && base.player.y === base.targetNws.y) {
            store.dispatch(openNws());
            return;
        }
    },

    /**
     * Déplace le joueur vers la gauche
     * @returns Déplace le joueur vers la gauche si possiblité
     */
    goToLeft () {
        
        let valueBeforeMove = base.player.x;
        let XorY = 'x';
        base.player.x -= 1;
        if (base.player.x < 0) {
            base.player.x = 0;
            return base.player.x = valueBeforeMove;
        }
        base.checkTrees(XorY,valueBeforeMove);
        base.player.score += 1;
        store.dispatch(closeAllModal());
        base.redrawBoard ();

    },

    /**
     * Déplace le joueur vers la droite
     * @returns Déplace le joueur vers la droite si possiblité
     */
    goToRight () {

        let valueBeforeMove = base.player.x;
        let XorY = 'x';
        base.player.x += 1;
        if (base.player.x > base.board.x -1) {
            base.player.x = base.board.x -1;
            return base.player.x = valueBeforeMove;
        }
        base.checkTrees(XorY,valueBeforeMove);
        base.player.score += 1;
        store.dispatch(closeAllModal());
        base.redrawBoard ();

    },

    /**
     * Déplace le joueur vers le haut
     * @returns Déplace le joueur vers le haut si possiblité
     */
    goToUp () {

        let valueBeforeMove = base.player.y;
        let XorY = 'y';
        base.player.y -= 1;
        if (base.player.y < 0) {
            base.player.y = 0;
            return base.player.y = valueBeforeMove;
        }
        base.checkTrees(XorY,valueBeforeMove);
        store.dispatch(closeAllModal());      
        base.redrawBoard ();

    },

    /**
     * Déplace le joueur vers le bas
     * @returns Déplace le joueur vers le bas si possiblité
     */
    goToDown () {

        let valueBeforeMove = base.player.y;
        let XorY = 'y';
        base.player.y += 1;
        if (base.player.y > base.board.y-1) {
            return base.player.y = valueBeforeMove;
        }
        base.checkTrees(XorY,valueBeforeMove);
        base.player.score += 1;
        store.dispatch(closeAllModal());      
        base.redrawBoard ();

    },

    /**
     * Ecouteur d'événements clavier
     */
    listenKeyboardEvents () {
        document.addEventListener ('keyup', base.handleKeyboardEvents);
    },

    /**
     * Ecouteur d'événements souris
     */
    listenClickEvent () {
        document.querySelector(".cv").addEventListener ('click', ()=> {store.dispatch(openCv())});       
        document.querySelector(".git").addEventListener ('click', ()=> {store.dispatch(openGit())});       
        document.querySelector(".letter").addEventListener ('click', ()=> {store.dispatch(openLetter())});       
        document.querySelector(".video").addEventListener ('click', ()=> {store.dispatch(openVideo())});       
        document.querySelector(".nws").addEventListener ('click', ()=> {store.dispatch(openNws())});       
    },

    /**
     * En fonction de l'événement clavier déclenche un déplacement
     * @param {Object} event Touche utilisée
     */
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

    /**
     * Initiatialisation du jeux
     * @param {Object} boardContainer Element du DOM où sera executer le jeu
     */
    init (boardContainer) {    
        base.boardElm = boardContainer
        base.listenKeyboardEvents();
        base.drawBoard();
    },
};

export default base; 
