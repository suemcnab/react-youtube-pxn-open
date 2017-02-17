import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import { Segment, Grid } from 'semantic-ui-react';


const API_KEY = 'YOUR_API_KEY_HERE'


class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
			};

		this.videoSearch('vue.js');
	}

	videoSearch(term){
			YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
			
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<Segment>
				<Grid columns='equal' divided>
					<VideoDetail video={this.state.selectedVideo} />
					<SearchBar onSearchTermChange={videoSearch} />
					<VideoList 
							onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
							videos={this.state.videos} />
			</Grid>
			</Segment>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.content-panel'));
