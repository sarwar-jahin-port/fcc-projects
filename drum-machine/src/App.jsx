import { useState } from 'react'
import './App.css'
import DrumPad from './DrumPad';

function App() {
  const [volumn, setVolumn] = useState("0.5");
  const [status, setStatus] = useState("Heater Kit");
  const [power, setPower] = useState(true);

  const  updateStatus = (newStatus) =>{
    setStatus(newStatus);
  }

  const handleVolumnChange = (e) => {
    setVolumn(e.target.value);
  };

  return (
    <>
      <div id="drum-machine">
        <div id="display">
          <div className="drum-pads">
            <DrumPad power={power} soundSrc={`Heater-1.mp3`} keyTriggered="Q" updateStatus={updateStatus}></DrumPad>
            <DrumPad power={power} soundSrc={`Heater-2.mp3`} keyTriggered="W" updateStatus={updateStatus}></DrumPad>
            <DrumPad power={power} soundSrc={`Heater-3.mp3`} keyTriggered="E" updateStatus={updateStatus}></DrumPad>
            <DrumPad power={power} soundSrc={`Heater-4_1.mp3`} keyTriggered="A" updateStatus={updateStatus}></DrumPad>
            <DrumPad power={power} soundSrc={`Clap.mp3`} keyTriggered="S" updateStatus={updateStatus}></DrumPad>
            <DrumPad power={power} soundSrc={`Open-HH.mp3`} keyTriggered="D" updateStatus={updateStatus}></DrumPad>
            <DrumPad power={power} soundSrc={`Kick_n_Hat.mp3`} keyTriggered="Z" updateStatus={updateStatus}></DrumPad>
            <DrumPad power={power} soundSrc={`KICK.mp3`} keyTriggered="X" updateStatus={updateStatus}></DrumPad>
            <DrumPad power={power} soundSrc={`Closed-HH.mp3`} keyTriggered="C" updateStatus={updateStatus}></DrumPad>  
          </div>
          <div className="status">
            <label htmlFor="power">Power </label>
            <button id="power" onClick={()=>setPower(!power)}> {power ? "ON" : "OFF"}</button>
            <p>{status}</p>
            <input
              type="range"
              name="volumn"
              id="volumn"
              min=".1"
              max="1"
              step="0.1"
              value={volumn}
              onChange={handleVolumnChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
