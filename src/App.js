import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AllMails from './components/AllMails/AllMails';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mails from './components/Mails/Mails';
import{ToastContainer} from 'react-toastify';
import Favourites from './components/Favourites/Favourites';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={AllMails} />
          <Route path="/mail/:id" component={Mails} />
          <Route path='/favourites' component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
