import React from 'react';
import Moment from 'moment';
import { Grid } from 'semantic-ui-react';


const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url
	const pubTime = Moment(video.snippet.publishedAt).format('DD-MM-YYYY, h:mm:ss a')

	return (
		<Grid.Column className="item-panel">
			<div onClick={() => onVideoSelect(video)}>
				<img className='thumbnail' alt='{video.snippet.title}' src={imageUrl} />
				<h5 className="meta-small-title">{video.snippet.title}</h5>
				<div className="meta-info">{video.snippet.channelTitle}</div>
				<div className="meta-time">{pubTime}</div>
			</div>
		</Grid.Column>
		);
};

export default VideoListItem;