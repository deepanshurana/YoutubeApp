import React from 'react';
import VideoItem from './VideoItem';
const videoList = ({videos, onVideoSelect}) => {

    const vList = videos.map((video) => {
        return <VideoItem 
                key={video.id.videoId} 
                onVideoSelect={onVideoSelect} 
                video={video} />
    })
     
    if(videos){
        return (
            <div className=""> 
                <div className="ui relaxed divided list">
                    {/* Video List: {videos.length} */}
                    {vList}
                </div>
            </div>
        )
    }
    else{
        return <div></div>
    }
}

export default videoList;