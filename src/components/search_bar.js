import React, {Component} from "react"; //needs to be imported on all components that contain jsx


//define a new class called SearchBar and give it access to all the functuality React.Component has
class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = {term: ""};
	}

	render(){
		return (
			<div className="search-bar">
				<input 
				value = {this.state.term}
				onChange = {event => this.onInputChange(event.target.value)} />

			</div>
	);
	}

onInputChange(term){
	this.setState({term: term});
	//cound also do this.setStat({term})
	this.props.onSearchTermChange(term);

}


}

export default SearchBar; 

// onChange is a property of input

//THE FUNCTION BELOW IS ACHEIEVED ABOVE IN THE EVENT ARROW FUNCTION
	// onInputChange(event){
	// 	// console.log(event.target.value); 
	// 	// event.target.value is the event object. Target property is reference to input
	// }