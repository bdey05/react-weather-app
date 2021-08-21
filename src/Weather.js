import { useState } from "react";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [place, setPlace] = useState('');
   
    
    const getInfo = (e) => {
        e.preventDefault();
        fetch(`http://api.weatherapi.com/v1/current.json?key=0ad3d247d03d414289c22243210908&q=${place}&aqi=no`)
        .then(res => res.json())
        .then(data => setWeather(data))

        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );

    }


    return ( 
        <div className="weatherInfo">
            <h1>Weather</h1>
            <form onSubmit = {getInfo}>
                <input type = "text" placeholder = "Enter City Name" onChange = {e => setPlace(e.target.value)}></input>
                <button>Search</button>
            </form>
            { weather && <div className="information">
                {(typeof weather.current != "undefined" && typeof weather.location != "undefined") ? (
                    <div className="weatherStuff">
                        <div className="temp">
                            { weather.current.temp_f }°F
                        </div>
                        <div className="location">
                            { weather.location.name }, { weather.location.region }, { weather.location.country }
                        </div>
                    </div>
                ) : (<div className = "errMessage">Error. Enter A Real City Name.</div>)}
            </div>}
        </div>
     );
}
 
export default Weather;