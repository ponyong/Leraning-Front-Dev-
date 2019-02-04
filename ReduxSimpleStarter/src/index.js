import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
const API_KEY = "";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "myway" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // key와 value 이름이 같으면 ({ videos }) 로 가능
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));