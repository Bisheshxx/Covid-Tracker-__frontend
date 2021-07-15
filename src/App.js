import logo from './logo.svg';
import Register from './Container/Register';
import Header from './Container/header/Header'
import Login from './Container/Login.jsx'
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Footer from './Container/Footer/Footer';
import EventPage from './Container/EventPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <switch>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/createevent'>
          <EventPage/>
        </Route>
      </switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
