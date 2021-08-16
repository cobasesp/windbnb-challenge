import './app.scss';
import {useEffect, useState} from 'react';
import data from './stays.json';

// Components
import HeaderComponent from './components/HeaderComponent/headerComponent';
import CardComponent from './components/CardComponent/CardComponent';

function App() {

  const [hotelList, setHotels] = useState([]);

  // Load data
  useEffect(() => {
    setHotels(data);
  }, []);
  
  return (
    <div>

      <HeaderComponent></HeaderComponent>

      {hotelList.map((hotel) => (
        <CardComponent 
          key={hotel.title}
          hotel={hotel}>
        </CardComponent>
      ))}
    </div>
  );
}

export default App;
