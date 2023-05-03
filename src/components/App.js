import React from 'react';
// import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };


  componentDidMount() {
    this.onTermSubmit('wzbmsurvey');
  }


  onTermSubmit1 = async (term) => {
    let urls = [
      "https://www.youtube.com/watch?v=Y78HA3UhXIE",
      "https://www.youtube.com/watch?v=WJdVwylV3Ok",
    ];
    const requests = urls.map((url) => youtube.get(url));
    axios.all(requests).then((responses) => {
      responses.forEach((resp) => {
        console.log(resp.data.items)
        this.state.videos.push(resp.data.items);
      });
    });
    
      this.setState({
        selectedVideo: this.state.videos[0],
    });
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/playlistItems', {
      params: {
        q: term,
      },
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container myEdit">
        {/* <SearchBar onFormSubmit={this.onTermSubmit} /> */}
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
