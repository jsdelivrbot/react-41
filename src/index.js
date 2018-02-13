import _ from "lodash";

import React, {Component} from 'react';

//to import to the DOM, you must also import react-dom
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar"; //./ means the current directory. then go into components folder. 
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";


const API_KEY = "AIzaSyAtAJeywO7pdI_hAPEpMZgoI5UC6WyXuTw";


// Create a new component. This component should produce HTML

class App extends Component  {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch("music") //this is the inital search/scrape

	}


videoSearch(term){
			YTSearch({key: API_KEY, term: term}, (videos) => {
			
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			
			
		});	

}

	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);


		return (
		<div>

		<SearchBar onSearchTermChange = {videoSearch}/>
		<VideoDetail video= {this.state.selectedVideo}/>
		<VideoList 
			onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
			videos= {this.state.videos}/>
		

		</div>
		) ;
	}	
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