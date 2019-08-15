import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map(video => {
        let _key = video.id.videoId;
        return (
            <VideoItem 
                key={_key}
                onVideoSelect={onVideoSelect} 
                video={video}
            />
        );
        
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
}


export default VideoList;