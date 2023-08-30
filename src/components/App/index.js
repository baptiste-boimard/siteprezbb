import { useSelector } from 'react-redux';

// ==IMPORT COMPONENTS==
import Header from '../Header';
import Board from '../Board';
import Cv from '../Cv';

import 'bootstrap/dist/css/bootstrap.css';


function App() {

  // ==CALL STORE==
  const { isOpenCv } = useSelector((state) => state.utilitiesReducer)


  return (
    <>
      <Header />
      <Board />
      {/* {(isOpenCv && <Cv /> )} */}
      <Cv />
    </>
    
  );
}

export default App;
