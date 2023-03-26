import './App.css';
import archerRed from './Images/archerRed.jpg'
import assassinRed from './Images/assassinRed.png'
import berserkerblack from './Images/berserkerBlack.jpg'
import casterRed from './Images/CasterRed.jpg'
import lancerBlack from './Images/lancerBlack.jpg'
import lancerRed from './Images/lancerRed.jpg'
import riderBlack from './Images/riderBlack.jpg'
import saberRed from './Images/saberRed.jpg'

import Game from './Components/Game'

function App() {

  let Items = [
    {
      imgPath: archerRed,
      ID: 1,
    },
    {
      imgPath: assassinRed,
      ID: 2,
    },    
    {
      imgPath: berserkerblack,
      ID: 3,
    },    
    {
      imgPath: casterRed,
      ID: 4,
    },    
    {
      imgPath: lancerBlack,
      ID: 5,
    },
    {
      imgPath: lancerRed,
      ID: 6,
    },
    {
      imgPath: riderBlack,
      ID: 7,
    },
    {
      imgPath: saberRed,
      ID: 8,
    },
  ]

  function randomize(values) {
    let index = values.length,
      randomIndex;

    while (index !== 0) {
      randomIndex = Math.floor(Math.random() * index);
      index--;

      [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }

    return values;
  }

  return (
    <div>
      <Game 
        data = {randomize(Items)}
        randomize = {randomize}
      />
    </div>
  );
}

export default App;
