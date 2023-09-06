import { useSelector, useDispatch } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ==IMPORT ACTION==
import { openLetter } from '../../slice/utilities';

function Letter() {
  const dispatch = useDispatch();

  // ==CALL STORE==
  const { isOpenLetter } = useSelector((state) => state.utilitiesReducer);

  // == ACTIONS ==
  /**
   * Ferme la modal Letter
   */
  const handleClose = () => {
    dispatch(openLetter());
  }

  return (

    <Modal show={isOpenLetter}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Ma lettre de motivation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Madame, Monsieur, </p>
          <br /><br />
          Tout fraîchement reconverti depuis l'année dernière dans le développement web, je suis à la recherche d'un employeur afin de poursuivre ma formation pour devenir chef de projets digitaux. En formation au sein de la Normandie Web School de Rouen en 3ème année de bachelor en alternance, elle vient compléter ma formation initiale de développeur fullstack javascript dispensée par l'école O'Clock en 2022.
          <br /><br />
          Cette année est pour moi une année charnière me permettant de compléter mes connaissances théoriques du métier mais surtout de pouvoir mettre à profit les connaissances acquises lors de ma formation et durant mes projets personnels. 
          <br /><br />
          Collaborer avec votre entreprise durant cette année me permettra d'engranger des connaissances et une expérience importante pour la suite de mon projet. Cela vous permettra également de pouvoir travailler avec un collaborateur qui a une expérience professionnelle solide. En effet j'ai pu acquérir grâce à mon expérience passée des compétences et une éthique de travail me permettant de répondre avec efficacité, motivation et méthode aux problématiques et défis que je pourrai rencontrer au cours de cette année d'alternance. 
          <br /><br />
          De nature enjouée, jovial et avec un fort esprit d'équipe , je sais m'intégrer rapidement au sein d'une nouvelle équipe ou d'un nouvel environnement de travail. 
          Motivé et persévérant j'apprends vite et je suis capable de m'adapter rapidement à toutes les situations. Force de proposition et capable d'initiative, je saurai être un atout pour l'équipe.
          <br /><br />
          Je me tiens à votre disposition si vous désirez obtenir des informations supplémentaires et je serais ravi de pouvoir m'entretenir avec vous au sujet de votre entreprise et de vos projets.
          <br /><br /><br />
          Cordialement. 
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

  );
}
  
export default Letter;