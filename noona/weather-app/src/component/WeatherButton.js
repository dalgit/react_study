import React from 'react'
//부트스트랩:https://react-bootstrap.github.io/getting-started/introduction
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities}) => {
  return (
    <div>
        <Button variant="warning">Current Location</Button>
        {cities.map((item)=>(
            <Button variant="warning">{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton