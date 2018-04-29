import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar';
import  VideoList from './video_list';
import VideoDetail from './video_detail';

import YTSearch from 'youtube-api-search'; 
const API_KEY='AIzaSyAWCF51lFLbQgS2yqeASPqv0V2zXkvMcDw';


class App extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
            videos: [],
            selectedVideo: null
        };

YTSearch({key:API_KEY,term: 'songs'},(videos)=>{
this.setState({videos:videos,selectedVideo:videos[0]});
});


	}


	render() {
		return(
	        <div>
             <SearchBar />

             <VideoDetail video={this.state.selectedVideo} />
             <VideoList
             onVideoSelect={this.state.selectedVideo}
             videos={this.state.videos} />
             </div> 
               );
           }
	}


ReactDOM.render(<App />,document.getElementById('root'));