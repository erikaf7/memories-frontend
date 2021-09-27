import './App.css';

import { Link, Route, Switch } from 'react-router-dom'
import Homepage from './Homepage';
import AllEntries from './AllEntries';

//components
import ConnectionTestHome from './components/ConnectionTestHome';
import ConnectionTestList from './components/ConnectionTestList';

function App() {
  return (
    <div className="container">
      <header>
        /* Link components if needed */
        {/* just to test connection can be deleted/changed
        <Link to="/">Home</Link> |
        <Link to="/entries">All Entries</Link>
        */}
        <h1>Memories Book</h1>
      </header>
      /* Router components if needed */
      {/* just to test connection can be deleted/changed */}
      {/* <Switch>*/}
        {/*<Route exact path="/" component={ ConnectionTestHome } /> */}
        {/*<Route exact path="/entries" component={ ConnectionTestList } /> */}
      {/*</Switch>*/}
    </div>
  );
}

export default App;
