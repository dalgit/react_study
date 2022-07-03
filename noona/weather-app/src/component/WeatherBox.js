import React from 'react'

const WeatherBox = ({weather}) => { // props라는 오브젝터에서 weather만 끌고옴, // 이렇게하면 props.weather가 아닌 weather로 사용가능
  return (
    <div className="weather-box">
        <div>{weather?.name}</div>  {/* weather가 있어? 있으면 weather.name (삼항연산식임)  App.js에서 ui가 다 그려진후 useeffect가 작동하기 때문에 이렇게! */}
        <h2>{weather?.main.temp}C / {(weather?.main.temp*1.8+32).toFixed(2)}화씨</h2>         {/* 화씨 = 섭씨*1.8 + 32 */}
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox