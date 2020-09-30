import React from 'react';
import { jsPDF } from "jspdf";
import './App.css';
import Canvas from './Canvas';
import { useState } from 'react';
import ColorOption from './ColorOption';

function App() {

  const [option, setOption] = useState({
      brushColor: '#000000',
      lineWidth: 2,
      canvasStyle: {
        backgroundColor: '#FFFFFF',
        borderColor: '#786B6B',
        borderStyle: 'solid'
      },
    clear: false
  })

  const handleClick = () => {
    const canvas = document.getElementById('canvas')
    var image = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(image, 'PNG', 0, 0);
    pdf.save("download.pdf");
  }

  return (
    <div className="App">
      <div className="colorOptionWraper">
          <span>Choose Brush Color: </span>
          <ColorOption option={option} setOption={setOption} />
      </div>
      <div className="canvasWraper">
        <Canvas {...option} />
      </div>
      <div className="buttons">
        <button onClick={()=>setOption({...option, clear: true})} className="danger">Clear</button>
        <a href=""><button className="success" onClick={handleClick}>Download</button></a>
      </div>
    </div>
  );
}

export default App;
