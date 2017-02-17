import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Grid } from 'semantic-ui-react';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			term: '',
			btn1: 'vue.js',
			btn2: 'react.js',
			btn3: 'ES6',
			btn4: 'Semantic UI',
		};
		
	}

 	handleClick(e){
	    let term = e.target.value;
	    this.setState({term});
		this.props.onSearchTermChange(term);
	  }

	render() {
		return (
		<Grid.Row columns={12} divided>
			<Grid.Column width={4}>
				<Input icon='search' placeholder='Search...' 
		        	value={this.state.term} 
					onChange={event => this.onInputChange(event.target.value)} />
			</Grid.Column>
			<Grid.Column width={8}>
				 <Button centered name='btn1' color='green' onClick={this.handleClick.bind(this)} value={this.state.btn1}>{this.state.btn1}</Button>
				 <Button centered name='btn2' color='green' onClick={this.handleClick.bind(this)} value={this.state.btn2}>{this.state.btn2}</Button>
				 <Button centered name='btn3' color='green' onClick={this.handleClick.bind(this)} value={this.state.btn3}>{this.state.btn3}</Button>
				 <Button centered name='btn4' color='green' onClick={this.handleClick.bind(this)} value={this.state.btn4}>{this.state.btn4}</Button>
			</Grid.Column>
		</Grid.Row>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

export default SearchBar;