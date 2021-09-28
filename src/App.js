import './App.css';

import { Route, Switch } from 'react-router-dom'


//components
import EntryDetail from './components/EntryDetail';
import EntryCreate from './components/EntryCreate';
import Homepage from './components/Homepage';
import AllEntries from './components/AllEntries';
import EntryEdit from './components/EntryEdit';
import UserSignup from './components/UserSignup';
import UserSignin from './components/UserSignin';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/entries" component={AllEntries} />
        <Route exact path="/entries/create" component={EntryCreate} />
        <Route exact path="/entries/:id" component={EntryDetail} />
        <Route exact path="/entries/:id/edit" component={EntryEdit} />
        <Route exact path="/signup" component={UserSignup} />
        <Route exact path="/signin" component={UserSignin} />
      </Switch>
    </div>
  );
}

export default App;
