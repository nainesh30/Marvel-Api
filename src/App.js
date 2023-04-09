
import './App.css';
import MainContainer from './components/Main-container/Main-container';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import CharDetails from './CharDetails';
import Resultcontainer from './components/Resultcontainer';


function App() {
  return (
    <>

    
      <Navbar></Navbar>
      {/* <MainContainer></MainContainer> */}


      <Routes>
        <Route path="/" element={ <MainContainer/> } />
        <Route path="/result/:value/:id" element={ <CharDetails/> } />
        <Route path="/result/:value" element={ <Resultcontainer/>} />
      </Routes>

      </>
  );
}

export default App;
