import './App.css';
import MainForm from './components/MainForm';
import ChatRoom from './components/ChatRoom';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {

  return (
      <>
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{height:'100%'}}>
        <Router>
          <Routes>
            <Route index element={<MainForm/>}></Route>
            <Route path='/chat/:roomName' element={<ChatRoom/>}></Route>
            <Route path='*' element={<h1>404 Not found!!</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
