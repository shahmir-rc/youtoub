/* eslint-disable react/prop-types */
import React from "react";
import gridIcon from "../images/grid.png";
import refreshIcon from "../images/refresh.png";
import listIcon from "../images/list.png";
import Logo from "../images/download.png"
import GridLayout from "./gridLayout";
import ListLayout from "./listLayout";
import Youtube from "../helper/youtube";

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: true,
      searchQuery: "",
      renderVideos: [],
      errorFound: false,
      isSelected: false,
      nextPageToken: undefined,
      initialReqVideo: undefined,
      selectedVideoList: props.selectedVideos,
      apiv3Url: ""
    };
    this.loadMore = this.loadMore.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
    this.refreshHandler = this.refreshHandler.bind(this);
    this.selectingVideos = this.selectingVideos.bind(this);
    this.fetchQueryVideos = this.fetchQueryVideos.bind(this);
    this.searchQueryHandler = this.searchQueryHandler.bind(this);
    this.userLogin = this.userLogin.bind(this);
  }

  userLogin() {
    const { config } = this.props
    const requestUrl = `${`https://apiau.intelligencebank.com`}/webapp/1.0/login`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    // hard coded data below
    var urlencoded = new URLSearchParams();
    urlencoded.append("p70", "barathkumar.j@royalcyber.com");
    urlencoded.append("p80", "Barath@2023");
    urlencoded.append("p90", `${config.platformUrl}`);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(requestUrl, requestOptions)
      .then(response => response.text())
      .then(result => console.log("result here from api 2 in modal >>>>", result))
      .catch(error => console.log('error here from api 2 in modal >>>>', error));
  }

  selectingVideos = (selectedVideos) => {
    const { selectedVideoList } = this.state;
    const checkList = selectedVideoList.some(
      (video) => video.id.videoId === selectedVideos.id.videoId
    );
    if (checkList) {
      selectedVideoList.splice(
        selectedVideoList.findIndex(
          (index) => index.id.videoId === selectedVideos.id.videoId
        ),
        1
      );
      this.setState({
        selectedVideoList: [...selectedVideoList],
      });
    } else {
      const newlist = [...selectedVideoList];
      newlist.push(selectedVideos);
      this.setState({ selectedVideoList: newlist });
    }
  };

  componentDidMount() {
    const { config } = this.props;
    Youtube.initalizingVideoList(config)
      .then((videoList) => {
        videoList.data.items.length + 1 >=
          videoList.data.pageInfo.totalResults &&
          (document.getElementsByClassName("load-more")[0].style.display =
            "none");
        const errorFound = videoList.data.items.length === 0 ? true : false;
        this.setState({
          initialReqVideo: videoList.data,
          renderVideos: videoList.data.items,
          nextPageToken: videoList.data.nextPageToken,
          errorFound
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorFound: true
        })
      });
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    const { selectedVideos } = this.props;
    if (newProps.selectedVideos !== selectedVideos) {
      this.setState({
        selectedVideoList: newProps.selectedVideos,
      });
    }
  }

  refreshHandler = () => {
    const { config } = this.props;
    Youtube.initalizingVideoList(config)
      .then((videoList) => {
        this.setState({
          initialReqVideo: videoList.data,
          renderVideos: videoList.data.items,
          nextPageToken: videoList.data.nextPageToken,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  loadMore = (event) => {
    const { config } = this.props;
    const { searchQuery, nextPageToken, renderVideos, initialReqVideo } =
      this.state;
    if (renderVideos.length !== initialReqVideo.pageInfo.totalResults) {
      Youtube.initalizingVideoList(config, searchQuery, nextPageToken)
        .then((videoList) => {
          let newVideos = this.state.renderVideos;
          newVideos = newVideos.concat(videoList.data.items);
          newVideos.length + 1 >= initialReqVideo.pageInfo.totalResults &&
            (event.target.style.display = "none");
          const errorFound = newVideos.length === 0 ? true : false
          this.setState({
            renderVideos: newVideos,
            nextPageToken: videoList.data.nextPageToken,
            errorFound
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ errorFound: true })
        });
    } else {
      event.target.style.display = "none";
    }
  };

  sendAndClose = (closeandsend) => {
    const { selectedVideoList } = this.state;
    closeandsend
      ? this.props.closeWindow(selectedVideoList)
      : this.props.closeWindow([]);
  };

  handleClick() {
    this.setState((prevState) => ({
      isGrid: !prevState.isGrid,
    }));
  }

  changeLayout = () => {
    this.setState((prevState) => ({
      isGrid: !prevState.isGrid,
    }));
  };

  showAllVideos = () => {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  showSelectedVideos = () => {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  searchQueryHandler = (event) => {
    const { config } = this.props;
    const query = event.target.value.toLowerCase();
    this.setState({ searchQuery: query });
    if (event.charCode === 13) {
      Youtube.initializeSearchField(config, query).then((queryVideos) => {
        const errorFound = queryVideos.data.items.length === 0 ? true : false
        this.setState({
          initialReqVideo: queryVideos.data,
          renderVideos: queryVideos.data.items,
          nextPageToken: queryVideos.data.nextPageToken,
          errorFound
        });
      });
    }
  };

  fetchQueryVideos = () => {
    const { config } = this.props;
    const { searchQuery } = this.state;
    Youtube.initializeSearchField(config, searchQuery).then((queryVideos) => {
      this.setState({
        initialReqVideo: queryVideos.data,
        renderVideos: queryVideos.data.items,
        nextPageToken: queryVideos.data.nextPageToken,
      });
    });
  };

  render() {
    const { renderVideos, selectedVideoList, initialReqVideo, isSelected, errorFound, apiv3Url } =
      this.state;

    console.log("in modal here >>>>>", apiv3Url)
    return (
      <div className="modal display-block">
        {apiv3Url ? (
          <section className="modal-main">
            {this.props.children}
            <div className="modal-header">
              <h2>Select Video</h2>
            </div>
            <div className="search-bar">
              <div className="cs-form-group search-box no-margin">
                <span className="search-input">
                  <input
                    type="search"
                    id="search"
                    className="cs-text-box cs-global-search"
                    placeholder="Search Videos"
                    onKeyPress={this.searchQueryHandler}
                  />
                </span>
                <span className="search-icon" onClick={this.fetchQueryVideos}>
                  <i className="icon-search"></i>
                </span>
              </div>
            </div>
            <div className="modal-body">
              <div className="video-section">
                <span>All Videos</span>
                <div className="icons">
                  <img
                    src={refreshIcon}
                    alt="refresh-icon"
                    onClick={this.refreshHandler}
                  />
                  <img
                    src={this.state.isGrid ? gridIcon : listIcon}
                    onClick={this.changeLayout}
                    alt="view-option"
                  />
                </div>
              </div>
              <div className="video-section">
                {this.state.isSelected ? (
                  <span className="select-count" onClick={this.showAllVideos}>
                    Show all videos({initialReqVideo?.pageInfo.totalResults})
                  </span>
                ) : (
                  <span
                    className="select-count"
                    onClick={this.showSelectedVideos}
                  >
                    Show selected videos({selectedVideoList.length})
                  </span>
                )}
                <span className="video-count">
                  showing {renderVideos.length} of{" "}
                  {initialReqVideo?.pageInfo.totalResults} videos
                </span>
              </div>
              {this.state.isGrid ? (
                <GridLayout
                  videos={renderVideos}
                  isSelected={isSelected}
                  checkFiles={errorFound}
                  loadContent={this.loadMore}
                  handleSelect={this.selectingVideos}
                  selectedVideoList={selectedVideoList}
                  totalVideos={initialReqVideo && initialReqVideo.pageInfo.totalResults}
                />
              ) : (
                <ListLayout
                  videos={renderVideos}
                  isSelected={isSelected}
                  checkFiles={errorFound}
                  loadContent={this.loadMore}
                  handleSelect={this.selectingVideos}
                  selectedVideoList={selectedVideoList}
                  totalVideos={initialReqVideo && initialReqVideo.pageInfo.totalResults}
                />
              )}
            </div>

            <div className="modal-footer">
              <div className="right">
                <button
                  className="cancel-btn btn"
                  onClick={() => this.sendAndClose(false)}
                >
                  Cancel
                </button>
                <button
                  className="add-btn btn"
                  onClick={() => this.sendAndClose(true)}
                >
                  Add Selected Videos {selectedVideoList.length}
                </button>
              </div>
            </div>
          </section>
        ) : (
          <section className="modal-main">
            <div className="container">
              <form onSubmit={this.userLogin} className="main-container">
                <div className="image-container">
                  <img src={Logo} alt="" className="logoImage" />
                  <div className="parent-container">
                    <div>
                      <p>
                        Login to your intelliganceBank account by entering your
                        credentials below.
                      </p>
                    </div>
                    <div className="child-container">
                      <span htmlFor="url" className="urltext">URL (without https://)</span>
                      <div>
                        <input type="url" id="url" name="url" className="ib-url" required />
                        <span>.intelligencebank.com</span>
                      </div>
                      <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"> Custom URL</span>
                      </label>

                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input-email"
                        required
                      />

                      <label htmlFor="password" className="password-field">Password:</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="input-password"
                        required
                      />

                      <button type="submit" className="login-button">Login</button>
                    </div>
                    <label className="checkbox-login">
                      <input type="checkbox" />
                      <span className="browser-login">Browser Login (for SSO Users)</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </section>
        )}
      </div>
    );
  }
}
