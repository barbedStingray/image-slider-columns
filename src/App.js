import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import imperials from './images/imperials.jpeg'
import pelennorFields from './images/pelenorFields.jpeg'
import gondorCommand from './images/gondorCommand.webp'



function App() {

  const [focusCard, setFocusCard] = useState(0)
  const photoArray = [imperials, pelennorFields, gondorCommand]



  return (
    <div className="App">

      <div className='display'>
        {photoArray.map((photo, i) => (
          <div
            key={i}
            className={`section ${i === focusCard ? 'focus' : ''}`}
            onClick={() => setFocusCard(i)}
          >
            <img className='picture' src={photo} />
          </div>
        ))}
      </div>

    </div>
  );
}


export default App;
