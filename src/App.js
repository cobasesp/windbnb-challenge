import './app.scss';
import { Fragment, useEffect, useState} from 'react';
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
    <Fragment>

      <HeaderComponent></HeaderComponent>

      <div className="content">
        <span class="material-icons">face</span>

        {hotelList.map((hotel) => (
          <CardComponent 
            key={hotel.title}
            hotel={hotel}>
          </CardComponent>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
