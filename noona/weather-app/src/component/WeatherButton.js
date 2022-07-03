//부트스트랩:https://react-bootstrap.github.io/getting-started/introduction

import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, handleCityChange, city }) => {
  return (
    <div class>
      <Button 
        variant={`${city === '' ? "outline-warning" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>

      {cities.map((item, index) => (
        <Button
          variant={`${city === item ? "outline-warning" : "warning"}`}
          key={index}
          onClick={() => setCity(item)}  //버튼 클릭하면 city를 item으로 셋. 그러면 app.js의 city가 바뀜
        >{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton