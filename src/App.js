import { useState } from "react";
import Box from "./Box";
import boxes from "./boxes";
import "./style.css";

function App(props) {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box 
    key={square.id} 
    id={square.id} 
    on={square.on} 
    toggle={toggle} 
    // toggle={()=>toggle(square.id)} then don't need id={square.id}
    />
  ));

  return <main>{squareElements}</main>;
}

export default App;
