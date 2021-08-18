import logo from "./assets/logo.svg";
import './App.css';
import { useState, useEffect } from "react";
import RequestMain from "./RequestMain/RequestMain";
import lock from "./assets/lock.svg";

function App() {
  const [data, SetData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      SetData(res);
    })
  }, [])

  const getData = async () => {
    const request = await fetch('request1.json');
    const data = await request.json();
    return data;
  }

  return (
    <div className="app">
      <div>
        <div className="logo-container">
          <img className="logo" src={logo}></img>
        </div>
        
        <div className="warning-block">
          <img className="lock-icon" src={lock} alt="Lock"/>
          <span className="warning-text">Security Message</span>
          <span className="normal-text">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</span>
        </div>
        {data && data.id && <RequestMain data={data}/>}
      </div>
    </div>
  );
}

export default App;
