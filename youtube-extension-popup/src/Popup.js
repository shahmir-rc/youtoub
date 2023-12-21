/* eslint-disable react/prop-types */
import React from "react";
import Modal from "./components/modal";
export class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      config: undefined,
      selectedVideosList: [],
      sid: "",
      content: ""
    };
    this.onCloseWindow = this.onCloseWindow.bind(this);
  }
  componentDidMount() {
    if (!window.opener) {
      window.close();
    }
    window.opener.postMessage(
      { message: "get youtube config and selected videos", getConfig: true },
      "*"
    );
    const receiveMessage = ({ data }) => {
      console.log("popup data recieved >>>>>>", data)
      if (data.config) {
        this.setState({
          message: data.message,
          config: data.config,
        });
      }
      
      if (data.selectedVideos) {
        this.setState({
          message: data.message,
          selectedVideosList: data.selectedVideos.videos,
          sid: data.selectedVideos.sid,
          content: data.selectedVideos.content
        })
      }
    };
    window.addEventListener("message", receiveMessage, false);
  }
  onCloseWindow = (selectedVideos) => {
    selectedVideos.length > 0
      ? window.opener.postMessage(
        {
          message: "sending selected videos",
          selectedVideosList: selectedVideos,
        },
        "*"
      )
      : window.opener.postMessage(
        {
          message: "Window closed sending selected videos",
        },
        "*"
      );
    window.close();
  };

  render() {
    const { config, selectedVideosList, sid, content } = this.state;
    console.log("sid here in popup >>>>>", sid, content)
    console.log('config before modal>>>',config)
    return (
      <div>
        {config && (
          <Modal
            config={config}
            closeWindow={this.onCloseWindow}
            selectedVideos={selectedVideosList}
            sid={sid}
            content={content}
          />
        )}
      </div>
    );
  }
}
