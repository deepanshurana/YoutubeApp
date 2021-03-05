import React from 'react';
import '../css/VideoItem.css';






const VideoItem = ({video, onVideoSelect}) => {
 
    const thumbnail = video.snippet.thumbnails.medium.url
    const altDes = video.snippet.description;

    return (
            <div onClick={()=>onVideoSelect(video)}
            className=" video-item item" >

                <img className="ui image" 
                alt={altDes} src={thumbnail} />

                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
                
            </div>
       
    )
}

export default VideoItem;