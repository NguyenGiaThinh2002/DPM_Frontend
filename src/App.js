import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
function App() {
  return (
    <div className="App" style={{width: "100%", height:"100%"}}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/mainPage' element={<MainPage/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
  