import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';
const KEY='KEY';

class App extends React.Component{

    state = { videos: [] , selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async term => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{
                part: 'snippet',
                maxResults:5,
                type:'video',
                key : KEY,
                q: term
             }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo : response.data.items[0]
        });
    };

    onVideoSelect = video =>{
        this.setState({ selectedVideo: video});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default App;