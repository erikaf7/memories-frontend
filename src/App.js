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
      <Homepage />
      {/* just to test connection can be deleted/changed */}
      {/* <Switch>*/}
      {/*<Route exact path="/" component={ ConnectionTestHome } /> */}
      {/*<Route exact path="/entries" component={ ConnectionTestList } /> */}
      {/*</Switch>*/}
    </div>
  );
}

export default App;
