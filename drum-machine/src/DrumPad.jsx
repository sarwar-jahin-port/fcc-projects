import React, { useEffect } from 'react'

const DrumPad = ({ power, soundSrc, keyTriggered, updateStatus }) => {
  const handleClick = () => {
    if (power) {
      document.querySelectorAll(".drum-pad").forEach(pad => {
        pad.addEventListener('click', ()=>{
          const audio = pad.querySelector('.clip');
          if(audio){
            audio.play();
          }
        })
      })
      const audio = new Audio(soundSrc);
      audio.play();
      updateStatus(soundSrc.split(".")[0]);
    }
  }

  const handleKeyPress = (e) => {
    if (power) {
      console.log(e.key.toUpperCase() === keyTriggered);
      if ((e.key.toUpperCase() === keyTriggered)) {
        document.getElementById(keyTriggered).play();
        updateStatus(soundSrc.split(".")[0]);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  })

  return (
    <div id={`clip-${keyTriggered}`} className='drum-pad' onClick={handleClick}>
      {keyTriggered}
      <audio src={soundSrc} className='clip' id={keyTriggered}></audio>
    </div>
  )
}

export default DrumPad