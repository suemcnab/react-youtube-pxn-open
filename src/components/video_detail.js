import React from 'react';
import Moment from 'moment';
import { Embed, Grid } from 'semantic-ui-react';

const VideoDetail = ({video}) => {
	if (!video){
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	const pubTime = Moment(video.snippet.publishedAt).format('DD-MM-YYYY, h:mm:ss a')

	return (
		<Grid.Row stretched>
			<Grid.Column >
		<Embed active
			autoplay={false}
	    	brandedUI={false}
			id={videoId}
			placeholder='http://semantic-ui.com/images/image-16by9.png'
			src={url}
			source='youtube'/>
			<div className="details">
				<h5 className="meta-big-title">{video.snippet.title}</h5>
				<div className="meta-description">{video.snippet.description}</div>
				<div className="meta-time">Published: {pubTime}</div>
			</div>
			</Grid.Column>
		</Grid.Row>
		);
};

export default VideoDetail;