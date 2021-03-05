import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtubeapi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
 // using custom hooks.
 import useVideos from '../customHooks/useVideos';

const App = () => {
 
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('pizza');


  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])


  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }


  return (
    <div className="App ui container">
      <SearchBar formProp={search}/>
      <div className="ui grid">
      <div className=" ten wide column">
        <VideoDetail selectedVideo={selectedVideo}/>
        </div>
      <div className="six wide column">
      <VideoList 
        videos={videos} 
        onVideoSelect={setSelectedVideo} 
        />
      </div>
      </div>
    </div>
  );

}

export default App;




// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {videos: [], selectedVideo: null};
//   }

//   // We don't want our website to have empty website on loading. So we'll fill the term 

//   componentDidMount(){
//     this.onSearchSubmit('Youtube API');
//   }


//   // create a callback method
//   onSearchSubmit =  async (term) => {
//     console.log("SEARCH TERM: ", term);

//     const res = await youtube.get('/search', {
//       params: {q: term}
//     })
//     this.setState({videos: res.data.items, selectedVideo: res.data.items[0]});
//   }

  // callback function from 2 level down.(VideoItem Compnt.)
  // onVideoSelect = (video) => {
  //   this.setState({ selectedVideo: video });
  //   console.log("Video:", video.snippet.title);

  // }



//   render(){
//     return (
//       <div className="App ui container">
//         <SearchBar formProp={this.onSearchSubmit}/>
//         <div className="ui grid">
//         <div className=" ten wide column">
//           <VideoDetail selectedVideo={this.state.selectedVideo}/>
//           </div>
//         <div className="six wide column">
//         <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
//         </div>
//         </div>
//       </div>
//     );
//   }
// }


