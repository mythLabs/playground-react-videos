import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
   const VideoList = videos.map((video) => {
       return <VideoItem video= {video}/>
    })

    return VideoList
}

export default VideoList