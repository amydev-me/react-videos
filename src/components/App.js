import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
const KEY='AIzaSyAL0PXO8OY9556hk5EpIVeNENrjgYXKt34';

class App extends React.Component{

    state = { videos: [] }


    onTermSubmit = async term => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{
                part: 'snippet',
                maxResults:5,
                key : KEY
             }
        });

        this.setState({ videos: response.data.items});
    };


    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;