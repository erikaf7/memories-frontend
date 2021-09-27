//just to test can be deleted
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../config.js';

const ConnectionTestList = props => {

  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(false);


  useEffect(() => {
    fetch(`${APIURL}/entries`)
      .then(response => response.json())
      .then(data => {
        setEntries(data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return <div>Sorry, there was a problem getting the entries.</div>
  }

  return (
    <ul>
      {entries.map( entry => (
        <li key={ entry._id }>
          <Link to={`/entries/${ entry._id }`}>{ entry.name }</Link>
        </li>
      ))}
    </ul>
  )
}

export default ConnectionTestList;