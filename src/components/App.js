import React from 'react';
import SearchBar from './SearchBar';
import '../apis/youtube';
import youtube from '../apis/youtube';

class App extends React.Component {
    onTermSubmit = async (term) => {
        const videos = await youtube.get('/search',{
             params: {
                 q: term
             }
         });
         console.log(videos);
    }

    render() {
        return ( 
            <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit}/>
             <div>App</div>
             </div>
            )
    }
}

export default App;