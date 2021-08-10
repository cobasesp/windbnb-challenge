import './app.scss';
import {useEffect, useState} from 'react';
import data from './stays.json';

function App() {

  const [hotelList, setHotels] = useState([]);

  // Load data
  useEffect(() => {
    setHotels(data);
  }, []);
  return (
    <div>
      windbnb app

      {hotelList.map((hotel) => (
        <p>{hotel.title}</p>
      ))}
    </div>
  );
}

export default App;
