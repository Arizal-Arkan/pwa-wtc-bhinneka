import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Offline from './component/Offline'
import DetailMovie from './page/DetailMovie'
import Home from './page/Home'
import Footer from './component/Footer'
import WatchList from './page/WatchList'

function App() {
  const [items, setItems] = useState([]);
  const [offline, setOffline] = React.useState(!navigator.onLine);

  function handleOfflineStatus() {
    setOffline(!navigator.onLine);
  }

  useEffect(() => {
    return (
      axios({
        url: "https://api.themoviedb.org/3/movie/580489?api_key=04a9ec5cdd2c8b4ee1d83b7fe5b2a1c7&append_to_response=videos,images,credits,release_dates",
        method: "GET",
      })
        .then(res => {
          console.log(res);
          setItems(res)
        })
        .catch(err => {
          console.error(err);
        })
    );
  }, []);

  useEffect(function() {
    handleOfflineStatus();
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return function() {
      window.removeEventListener('online', handleOfflineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    }
  }, [offline]);

  console.log(items);

  return (
    <div className='bg-gray-900'>
      {offline && <Offline/>}
      <Home/>
      <Footer/>
    </div>
  );
}

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/detail/:id" exact component={DetailMovie} />
      <Route path="/watchlist" exact component={WatchList} />
    </Router>
  )
};