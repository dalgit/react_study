//1.앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
//2.날씨정보에는 도시, 섭씨 화씨 날씨상태
//3.5개의 버튼이있따. 1개는 현재위치, 4개는 다른도시
//4.도시버튼을 클릭할때마다 도시별 날씨가 나온다.
//5.현재위치버튼을 누르면다시 현재위치기반의 날씨가 나옴
//6.데이터를 들고오는 동안 로딩 스피너가 돈다.

import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";
import WeatherButton from './component/WeatherButton';

function App() {
  const cities = ['paris', 'new york', 'tokyo', 'seoul']
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');   //버튼js에서 만들면 app.js로 부르기 어려워 간단하게 여기서 생성하고 보내줌
  const [loading, setLoading] = useState(false)

  const getCurrentLocation = () => { //https://www.w3schools.com/html/html5_geolocation.asp , showposition불러오기 귀찮으니 바로 position넣어놓고 함수 만듬
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude //위도
      let lon = position.coords.longitude //경도
      getWeatherByCurrentLocation(lat, lon)
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => { //https://openweathermap.org/current
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=996b4278d1bc0004176cf79149a302ef&units=metric`
    setLoading(true)
    let response = await fetch(url) //url데이터 가져올때까지 기다려주십쇼, await쓰려면 함수가 async여야
    let data = await response.json(); //api는 대부분 json, json파일을 추출해야 데이터를 볼 수 있다, response에서 json추출을 할때까지 가다려줘
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=996b4278d1bc0004176cf79149a302ef&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
    console.log(setCity);
  }

  const handleCityChange = (city)=>{
    if (city === "current"){
      setCity('');
    } else {
      setCity(city);
    }
  };

  useEffect(() => { //1. ui가 처음에 그려졌을때, 2. 배열에 값이 있다면, 배열에 있는 state 값이 바뀔때
    if (city === "") {
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  }, [city]);



  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton 
            cities={cities} 
            handleCityChange={handleCityChange}
            setCity={setCity}
            city={city} />
        </div>
      )}
    </div>
  );
}

export default App;
