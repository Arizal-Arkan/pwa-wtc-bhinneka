import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Offline from './component/Offline';
import Home from './page/Home';
import './style.css';

function App() {
  const [items, setItems] = useState([]);
  const [offline, setOffline] = React.useState(!navigator.onLine);

  function handleOfflineStatus() {
    setOffline(!navigator.onLine);
  }

  useEffect(() => {
    return axios({
      url: 'https://api.themoviedb.org/3/movie/438631?api_key=04a9ec5cdd2c8b4ee1d83b7fe5b2a1c7&append_to_response=videos,images,credits',
      method: 'GET',
    })
      .then((res) => {
        // console.log(res);
        setItems(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(
    function () {
      handleOfflineStatus();
      window.addEventListener('online', handleOfflineStatus);
      window.addEventListener('offline', handleOfflineStatus);

      return function () {
        window.removeEventListener('online', handleOfflineStatus);
        window.removeEventListener('offline', handleOfflineStatus);
      };
    },
    [offline]
  );

  // console.log(offline);

  return (
    <div className="bg-gray-900">
      {offline && <Offline />}
      <Home items={items} />
    </div>
  );
}

export default App;
