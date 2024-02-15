/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./styles/style.css";
import Dragula from "react-dragula";
import Youtube from "./helper/youtube";
import { WindowOpener } from "./components/window-opener";
import ContentstackUIExtension from "@contentstack/ui-extensions-sdk";
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.extension = {};
    this.state = {
      message: "",
      videoList: [],
      config: {},
    };
    this.sonResponse = this.sonResponse.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
  }
  componentDidMount() {
    ContentstackUIExtension.init().then((extension) => {
      const { items } = extension.field.getData();
      extension.window.enableAutoResizing();
      if (items && typeof items[0] !== "object") {
        // Youtube.initalizingVideoList(extension.config, items.toString())
        //   .then((videoList) => {
        //     const modifiedVideo = videoList.data.items.map((video) => {
        //       let newVideo = video;
        //       newVideo["id"] = { kind: "youtube#video", videoId: video.id };
        //       return newVideo;
        //     });
        //     this.setState(
        //       {
        //         config: extension.config,
        //         videoList: modifiedVideo,
        //       },
        //       () => {
        //         this.extension = extension;
        //         extension.window.enableAutoResizing();
        //       }
        //     );
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        console.log("no assest found")
      } else {
        console.log("assets found")
        this.setState(
          {
            config: extension.config,
            videoList: items || [],
          },
          () => {
            this.extension = extension;
            extension.window.enableAutoResizing();
          }
        );
      }
    }).catch((error) => {
      console.log("error here >>>", error)
    })

    const receiveMessage = (event) => {
      const { data } = event;
      const { videoList } = this.state;
      if (data.getConfig) {
        const { config } = this.state;
        event.source.postMessage(
          {
            message: "Sending Config files",
            config,
            selectedVideos: videoList,
          },
          event.origin
        );
      } else if (data.selectedVideosList) {
        this.saveExtensionData(data.selectedVideosList);
      }
      if (data.getSessionConfig) {
        console.log("yes session data needed in popup sending")
        // sending session data to popup
        // let sessionID = null
        // let clientid = null
        // let baseApiUrl = null
        // let expirationTime = null

        // this.extension.store.get('intelligence_bank_session_token').then((value)=> sessionID=value);
        // this.extension.store.get('intelligence_bank_client_token').then((value)=> clientid=value);
        // this.extension.store.get('intelligence_bank_url').then((value)=> baseApiUrl=value);
        // this.extension.store.get('intelligence_bank_expiration_token').then((value)=> expirationTime=value)
        // console.log("outside session id from storage is >>>>>>>>.", sessionID)

        // if (sessionID && clientid && baseApiUrl && expirationTime) {
        //   console.log("inside session id from storage is >>>>>>>>.", sessionID)
        //   event.source.postMessage(
        //     {
        //       message: "Sending session data to popup",
        //       sessionData: {
        //         sessionID: sessionID,
        //         clientid: clientid,
        //         baseApiUrl: baseApiUrl,
        //         expirationTime: expirationTime
        //       },
        //     },
        //     event.origin
        //   );
        // }

        const promises = [
          this.extension.store.get('intelligence_bank_session_token'),
          this.extension.store.get('intelligence_bank_client_token'),
          this.extension.store.get('intelligence_bank_url'),
          this.extension.store.get('intelligence_bank_expiration_token')
        ];

        // Execute all promises concurrently
        Promise.all(promises)
          .then((values) => {
            // Destructure the values array
            const [sessionID, clientid, baseApiUrl, expirationTime] = values;
            console.log("session id from storage is >>>>>>>>.", sessionID)

            if (sessionID && clientid && baseApiUrl && expirationTime) {
              console.log("inside session id from storage is >>>>>>>>.", sessionID)
              event.source.postMessage({
                message: "Sending session data to popup",
                sessionData: {
                  sessionID: sessionID,
                  clientid: clientid,
                  baseApiUrl: baseApiUrl,
                  expirationTime: expirationTime
                },
              }, event.origin);
            }
          })
          .catch((error) => {
            console.error('Error: in all promises', error); // Handle any errors
          });
      }
      if (data.sessionData) {
        // getting session data from popup
        const sessionData = data.sessionData
        const { sid, clientid, apiV3url, logintimeoutperiod } = sessionData
        // Calculate expiration time
        const expirationTime = Date.now() + logintimeoutperiod * 1000;

        //  setting data to session storage
        this.extension.store.set('intelligence_bank_session_token', sid);
        this.extension.store.set('intelligence_bank_client_token', clientid);
        this.extension.store.set('intelligence_bank_url', apiV3url);
        this.extension.store.set('intelligence_bank_expiration_token', expirationTime.toString())
      }
    };
    window.addEventListener("message", receiveMessage, false);
  }
  saveExtensionData(videos) {
    const { config } = this.state;
    let extensionData = [];
    if (!config.saveFullResponse) {
      videos.forEach((selected) => {
        extensionData.push(selected.id.videoId);
      });
    } else {
      extensionData = videos;
    }
    this.extension.field.setData({ items: extensionData });
    this.setState({ videoList: videos });
  }

  deleteVideo(event) {
    const videoId = event.target.parentNode.parentNode.parentNode.id;
    const { videoList } = this.state;
    videoList.splice(
      videoList.findIndex((index) => index.id.videoId === videoId),
      1
    );
    this.saveExtensionData(videoList);
  }

  sonResponse(err, res) {
    if (err) {
      this.setState({ message: res.message });
    }
  }
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {
        copySortSource: true,
      };
      Dragula([componentBackingInstance], options);
    }
  };


  render() {
    const { videoList, config } = this.state;
    return (
      <header className="App-header">
        <div className="wrapper">
          <div className="container">
            <div className="reference-loading" style={{ display: "none" }}>
              <div className="loading-flash">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="main">
              <div className="selected-item">
                <div className="row selected-list">
                  <ul className="drag1" ref={this.dragulaDecorator}>
                    {videoList && videoList.map((video) => {
                      return (
                        <li
                          id={video.id.videoId}
                          title={video.snippet.title}
                          key={video.snippet.channelTitle}
                        >
                          <div className="file">
                            <a
                              href={`https://www.youtube.com/embed/${video.id.videoId}`}
                              target="_blank"
                              className="fileimage"
                            >
                              <span
                                className="fileimg"
                                style={{
                                  backgroundImage: `url(${video.snippet.thumbnails.default.url})`,
                                }}
                              ></span>
                            </a>
                            <span>{video.snippet.title}</span>
                            <span className="file-text">
                              Channel Name-{video.snippet.channelTitle}
                            </span>
                            <span className="file-text">
                              Description-{video.snippet.description}
                            </span>
                            <div
                              className="file-action trash"
                              onClick={this.deleteVideo}
                            >
                              <span className="close-icon"></span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <WindowOpener
            url={config.redirectUrl}
            bridge={this.sonResponse}
            videos={videoList}
          >
            Choose Asset
          </WindowOpener>
        </div>
      </header>
    );
  }
}
