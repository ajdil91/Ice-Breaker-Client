import React, {Fragment} from "react";
import './App.css';

//components 
import ListQuestions from "./components/ListQuestions"
import "./assets/css/Text.css"

function App() {
  return (
    <Fragment>
      <diV class="container">
        <h1 className="text-center mt-5 TextStyle">ICE BREAKER</h1>
        <p className="text-center TextStyle" style={{"font-size": "12px"}}>Click "Break"</p>
        <ListQuestions/>
      </diV>  
    </Fragment>
  )
}

export default App;
