import './App.css';

import { Link, Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage';
import AllEntries from './components/AllEntries';

//components
import ConnectionTestHome from './components/ConnectionTestHome';
import ConnectionTestList from './components/ConnectionTestList';
import EntryDetail from './components/EntryDetail';
import EntryCreate from './components/EntryCreate';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/entries" component={AllEntries} />
        <Route exact path="/entries/create" component={EntryCreate} />
        <Route exact path="/entries/:id" component={EntryDetail} />
      </Switch>
    </div>
  );
}

export default App;
