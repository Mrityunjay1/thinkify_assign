import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AllMails from './components/AllMails/AllMails';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mails from './components/Mails/Mails';
import{ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={AllMails} />
          <Route path="/mail" component={Mails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
