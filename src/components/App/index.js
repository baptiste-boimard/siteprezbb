import { useSelector } from 'react-redux';

// ==IMPORT COMPONENTS==
import Header from '../Header';
import Board from '../Board';
import Cv from '../Cv';
import Git from '../Git';
import Letter from '../Letter';
import Video from '../Video';
import Nws from '../Nws';
import Footer from '../Footer';

// ==--IMPORT STYLE--==
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  // ==CALL STORE==
  const { isOpenCv, isOpenGit, isOpenLetter, isOpenVideo, isOpenNws } = useSelector((state) => state.utilitiesReducer)


  return (
    <>
      <Header />
      <Board />
      {(isOpenCv && <Cv /> )}
      {(isOpenGit && <Git /> )}
      {(isOpenLetter && <Letter /> )}
      {(isOpenVideo && <Video /> )}
      {(isOpenNws && <Nws /> )}
      <Footer />
    </>
    
  );
}

export default App;
