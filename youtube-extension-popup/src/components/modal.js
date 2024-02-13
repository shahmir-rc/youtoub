/* eslint-disable react/prop-types */
import React from "react";
import gridIcon from "../images/grid.png";
import refreshIcon from "../images/refresh.png";
import listIcon from "../images/list.png";
// import GridLayout from "./gridLayout";
// import ListLayout from "./listLayout";
import Youtube from "../helper/youtube";
// import axios from "axios";

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
      sessionID: "",
      clienId: "",
      baseApiUrl: "",
      loginFormData: {
        url: "",
        email: "",
        password: "",
      },
      loginLoading: false
    };
    this.loadMore = this.loadMore.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
    this.refreshHandler = this.refreshHandler.bind(this);
    this.selectingVideos = this.selectingVideos.bind(this);
    this.fetchQueryVideos = this.fetchQueryVideos.bind(this);
    this.searchQueryHandler = this.searchQueryHandler.bind(this);
  }

  // handling submit
  handleLoginSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loginLoading: true });
    const { url, email, password } = this.state.loginFormData;
    console.log("Login Form Data:", { url, email, password });

    const apiUrl = "https://apiau.intelligencebank.com/webapp/1.0/login";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("p70", email);
    urlencoded.append("p80", password);
    urlencoded.append("p90", url);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    await fetch(apiUrl, requestOptions)
      .then(response => response.text())
      .then(text => {
        // Convert text to JSON
        let jsonData = JSON.parse(text);
        const { apiV3url, clientid, sid } = jsonData

        this.setState(prevState => ({
          ...prevState,
          baseApiUrl: apiV3url,
          clientId: clientid,
          sessionID: sid
        }));
        console.log("json data here >>>>", jsonData);
      })
      .catch(error => console.log('error', error));

  };

  // handling the input data
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value,
      },
    }));
  };

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
    const { renderVideos, selectedVideoList, initialReqVideo,
      //  isSelected, errorFound, 
      sessionID, loginFormData, loginLoading } =
      this.state;
    console.log("sessionId here in modal >>>>>", sessionID)
    if (sessionID?.length > 1) {
      return (
        <div className="modal display-block">

          <section className="modal-main">
            {this.props.children}
            <div className="modal-header">
              <h2>Select Asset</h2>
            </div>
            <div className="search-bar">
              <div className="cs-form-group search-box no-margin">
                <span className="search-input">
                  <input
                    type="search"
                    id="search"
                    className="cs-text-box cs-global-search"
                    placeholder="Search Videos"
                  // onKeyPress={this.searchQueryHandler}
                  />
                </span>
                <span className="search-icon"
                // onClick={this.fetchQueryVideos}
                >
                  <i className="icon-search"></i>
                </span>
              </div>
            </div>
            <div className="modal-body">
              <div className="video-section">
                <span>All Assets</span>
                <div className="icons">
                  <img
                    src={refreshIcon}
                    alt="refresh-icon"
                  // onClick={this.refreshHandler}
                  />
                  <img
                    src={this.state.isGrid ? gridIcon : listIcon}
                    // onClick={this.changeLayout}
                    alt="view-option"
                  />
                </div>
              </div>
              <div className="video-section">
                {this.state.isSelected ? (
                  <span className="select-count"
                  // onClick={this.showAllVideos}
                  >
                    Show all Assets({initialReqVideo?.pageInfo.totalResults})
                  </span>
                ) : (
                  <span
                    className="select-count"
                  // onClick={this.showSelectedVideos}
                  >
                    Show selected Assets({selectedVideoList.length})
                  </span>
                )}
                <span className="video-count">
                  showing {renderVideos.length} of{" "}
                  {initialReqVideo?.pageInfo.totalResults} assets
                </span>
              </div>
              {this.state.isGrid ? (
                <p>grid here</p>
                // <GridLayout
                //   videos={renderVideos}
                //   isSelected={isSelected}
                //   checkFiles={errorFound}
                //   loadContent={this.loadMore}
                //   handleSelect={this.selectingVideos}
                //   selectedVideoList={selectedVideoList}
                //   totalVideos={initialReqVideo && initialReqVideo.pageInfo.totalResults}
                // />
              ) : (
                <p>list here </p>
                // <ListLayout
                //   videos={renderVideos}
                //   isSelected={isSelected}
                //   checkFiles={errorFound}
                //   loadContent={this.loadMore}
                //   handleSelect={this.selectingVideos}
                //   selectedVideoList={selectedVideoList}
                //   totalVideos={initialReqVideo && initialReqVideo.pageInfo.totalResults}
                // />
              )}
            </div>

            <div className="modal-footer">
              <div className="right">
                <button
                  className="cancel-btn btn"
                // onClick={() => this.sendAndClose(false)}
                >
                  Cancel
                </button>
                <button
                  className="add-btn btn"
                // onClick={() => this.sendAndClose(true)}
                >
                  Add Selected assets {selectedVideoList.length}
                </button>
              </div>
            </div>
          </section>
        </div>
      )
    } else {
      return (
        <div className="modal display-block">
          <section className="modal-main">
            <div className="container">
              <form className="main-container" onSubmit={this.handleLoginSubmit} >
                <div className="image-container">
                  <img src="https://images.contentstack.io/v3/assets/blt221fb47986d5e67e/blt2cb29b8ea92a9836/65a7bfeebad37d43f89df7de/download.png" alt="" className="logo" />
                  <div className="parent-container">
                    <div>
                      <p>
                        Login to your intelliganceBank account by entering your
                        credentials below.
                      </p>
                    </div>
                    <div className="child-container">
                      <span htmlFor="url" className="urltext">URL (without https://)</span>
                      <div className="url-container">
                        <input type="text" id="url" name="url" className="ib-url" value={loginFormData.url} onChange={this.handleInputChange} required />
                        <span>.intelligencebank.com</span>
                      </div>
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" value={loginFormData.email} onChange={this.handleInputChange} className="input-email" required />
                      <label htmlFor="password" className="password-field">Password:</label>
                      <input type="password" id="password" name="password" value={loginFormData.password} onChange={this.handleInputChange} className="input-password" required />
                      <button type="submit" className="login-button">{loginLoading ? "Loading..." : "Login"}</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      );
    }
  }
}
