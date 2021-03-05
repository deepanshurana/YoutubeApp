import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
    console.log("Selected Video: ", selectedVideo);
      
    if (selectedVideo === null || selectedVideo === undefined){
        return (
        <div>
            LOADING...
        </div>)
    }
    else{
        const vidSource = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

         return(
             <div className="ui segment">
                 <div className="ui embed">
                     <iframe title="videoPlayer" src={vidSource}/>
                 </div>
                      <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                      <p>{selectedVideo.snippet.description}</p>
                  </div>
    
        )
    }
}

export default VideoDetail;