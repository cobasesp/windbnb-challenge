import './app.scss';
import { Fragment, useEffect, useState} from 'react';
import data from './stays.json';

// Components
import HeaderComponent from './components/HeaderComponent/headerComponent';
import CardComponent from './components/CardComponent/CardComponent';

function App() {

  const filterObj = {
    location: '',
    guests: 0
  }

  const [hotelList, setHotels] = useState([]);
  const [hotelFiltered, setFilteredHotels] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [filters, setFilters] = useState(filterObj);
  const [viewInfo, setViewInfo] = useState({text:'',num:0})

  // Load data
  useEffect(() => {
    setHotels(data);
    setFilteredHotels(data);
    setViewInfo({
      text: 'All stays',
      num: data.length
    })
  }, []);

  // When filtered change to true or false filter the hotel list or reset the list
  useEffect(() => {
    if(!firstLoad){
      let newArray = getHotelsByFilters(filters);
      setFilteredHotels(newArray);
      setViewInfo({
        text: `${filters.location} stays`,
        num: newArray.length
      })
    }
  }, [filters]);

  setTimeout(() => {
    setFirstLoad(false);
  }, 200);

  const getHotelsByFilters = (filters) => {
    if(filters.location == "" || filters.guests == 0){
      return hotelList;
    }else{
      return hotelList.filter(hotel => { 
        return (hotel.city + ', ' + hotel.country) == filters.location && hotel.maxGuests > filters.guests;  
      })
    }
  }
  
  return (
    <Fragment>

      <HeaderComponent></HeaderComponent>

      <div className="content">
        <h1>{viewInfo.text} <span className="stays-number pull-right">{viewInfo.num} stays</span></h1>

        <div className="hotel-list">
          {hotelFiltered.map((hotel) => (
            <CardComponent 
            key={hotel.title}
            hotel={hotel}>
            </CardComponent>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
