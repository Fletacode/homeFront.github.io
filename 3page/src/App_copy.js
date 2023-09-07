
import './App.css';
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
	
	let [관사이름, a] = useState('제8전투비행단 - 청나래 아파트 101동');
	let [위치, b] = useState('')
	
  return (
    <div className="App_copy">
	 <div className= "black-nav">
		<h4>{ 관사이름 }</h4>	  
	 </div>
	 <div className = "main-bar"></div>
	 
	 <div className = "location">
		 <h4> 1. 위치 </h4>
		 <h2> { 위치 } </h2>
	 </div>	  
	 	  
	</div>
  );
}

export default App;
