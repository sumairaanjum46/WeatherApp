import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState(
        {
            city:"Hyderabad",
        feelsLike : 27.64,
        humidity: 50,
        temp: 27.23,
        tempMax: 27.23,
        tempMin: 23.73,
        weather: "haze"

        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);

    }



    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Sumaira</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
    

}