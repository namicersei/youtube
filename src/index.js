import React, { Component } from 'react';
import _ from 'lodash';
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
     }

videoSearch(term)
{
	YTSearch({key:API_KEY,term: term},(videos)=>{
this.setState({videos:videos,selectedVideo:videos[0]
  });
  
  });

}

	


	render() {
      
const videoSearch=_.debounce{(term)=>{this.videoSearch(term)},300};

		return(
	        <div>
             <SearchBar onSearchTermChange={videoSearch} />

             <VideoDetail video={this.state.selectedVideo} />
             <VideoList
             onVideoSelect={selectedVideo=> {this.setState({selectedVideo:selectedVideo});}}
             videos={this.state.videos} />
             </div> 
               );
           }
	}


ReactDOM.render(<App />,document.getElementById('root'));