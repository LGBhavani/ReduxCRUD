import './styles/App.scss';
import Navbar from './components/elements/Navbar';
import Contact from './components/contacts/Contacts';
import store from './components/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
function App() {
  return (
    <Provider store = {store}> 
      <Router>
       <div className="App">
        <Navbar />
        <div className = "container">
          <div className="py-3">
             <Switch>
               <Route exact path = "/" component= {Contacts}/>
               <Route exact path="/contacts/add" component = {AddContact}/>
               <Route exact path="/contacts/edit/:id" component = {EditContact}/>{/* Dynamic Routing i.e., id is a parameter here*/}
             </Switch>
          </div>
        </div>
       </div>
      </Router>
    </Provider>
  );
}

export default App;
