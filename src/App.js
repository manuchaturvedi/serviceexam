import './App.css';
import Login from './Login.js';
import Signin from './signin.js';
import SideBar from './sidebar.js';
import AddAgent from './AddAgent.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Home() {
  return <div>
    <Login/>
    </div>;
}

function AddAgentfun() {
  return <div>
    <SideBar/>
  </div>;
}

function AddBookingfun() {
  return <div>
  <SideBar/>
</div>;
}
function App() {
  return (
    <Router>
    <div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/AddAgent">
          <AddAgentfun />
        </Route>
        <Route path="/AddBooking">
          <AddBookingfun />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
  
}


export default App;
