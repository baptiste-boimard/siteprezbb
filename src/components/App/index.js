import { useSelector } from 'react-redux';

// ==IMPORT COMPONENTS==
import Header from '../Header';
import Board from '../Board';
import Cv from '../Cv';
import Git from '../Git';
import Letter from '../Letter';
import Video from '../Video';

import 'bootstrap/dist/css/bootstrap.css';


function App() {

  // ==CALL STORE==
  const { isOpenCv, isOpenGit, isOpenLetter, isOpenVideo } = useSelector((state) => state.utilitiesReducer)


  return (
    <>
      <Header />
      <Board />
      {(isOpenCv && <Cv /> )}
      {(isOpenGit && <Git /> )}
      {(isOpenLetter && <Letter /> )}
      {(isOpenVideo && <Video /> )}
    </>
    
  );
}

export default App;
