import React from 'react';

//to import to the DOM, you must also import react-dom
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar"; //./ means the current directory. then go into components folder. 

const API_KEY = "AIzaSyAtAJeywO7pdI_hAPEpMZgoI5UC6WyXuTw";



// Create a new component. This component should produce HTML

const App = () => {
	return ( <div>

	<SearchBar/>

	</div>
	) ;
	
}



ReactDOM.render(<App/>, document.querySelector(".container"));
//Here ReactDOM needs a second argument... where to render App
//When you render this component, insert that HTML into the container element
//Putting app in JSX creates an instance of App. 
//If just "App" that would be a class, not an instance


// Take this component's generated HTML and put it on page
// (in the DOM) ........

// This is JSX. A subset of JS that looks like HTML,
	// but is really just JS
	// Babel translates this JSX to be viewed by browser
	// purpose of JSX is to have code that produces HTML