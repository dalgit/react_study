import React from 'react'
//부트스트랩:https://react-bootstrap.github.io/getting-started/introduction
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {

  return (
    <div>
        <Button variant="warning" onClick={()=>setCity('')}>Current Location</Button>
        {cities.map((item,index)=>(
            <Button 
              variant="warning" 
              key={index}
              //버튼 클릭하면 city를 item으로 셋. 그러면 app.js의 city가 바뀜
              onClick={()=>setCity(item)}
              >{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton