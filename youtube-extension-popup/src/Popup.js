/* eslint-disable react/prop-types */
import React from "react";
import Modal from "./components/modal";
export class Popup extends React.Component {
  constructor(props) {
    console.log("props here in pop js")
    super(props);

    this.state = {
      message: "",
      config: undefined,
      selectedVideosList: [],
      sessionID: null,
      baseApiUrl: null,
      expirationTime: null,
      clientid: null,
    };
    this.onCloseWindow = this.onCloseWindow.bind(this);
  }
  componentDidMount() {
    if (!window.opener) {
      window.close();
    }
    window.opener.postMessage(
      { message: "get config and selected assets", getConfig: true },
      "*"
    );

    window.opener.postMessage(
      { message: "get session data", getSessionConfig: true },
      "*"
    );
    const receiveMessage = ({ data }) => {
      console.log("recieved message in popup>>>>>>>>>>>>>>>", data)
      if (data.config) {
        this.setState({
          message: data.message,
          config: data.config,
        });
      }
      if (data.selectedVideos) {
        this.setState({
          message: data.message,
          selectedVideosList: data.selectedVideos,
        });
      }
      if (data.sessionData) {
        console.log("session data recieved in popup >>>>>>>>>", data.sessionData)
        const { sessionID, expirationTime, clientid, baseApiUrl } = data.sessionData
        this.setState(prevState => ({
          ...prevState,
          baseApiUrl: baseApiUrl,
          clientid: clientid,
          sessionID: sessionID,
          expirationTime: expirationTime
        }));
      }
    };
    window.addEventListener("message", receiveMessage, false);
  }
  onCloseWindow = (selectedVideos, sessionData) => {
    console.log("sessionData on the close window >>>>>", sessionData)
    selectedVideos.length > 0
      ? window.opener.postMessage(
        {
          message: "sending selected videos",
          selectedVideosList: selectedVideos,
          sessionData: sessionData
        },
        "*"
      )
      : window.opener.postMessage(
        {
          message: "Window closed sending selected videos",
          sessionData: sessionData
        },
        "*"
      );
    window.close();
  };

  render() {
    const { config, selectedVideosList, sessionID, clientid, expirationTime, baseApiUrl } = this.state;
    console.log("config here >>>>> in modal", config)
    return (
      <div>
        {config && (
          <Modal
            config={config}
            closeWindow={this.onCloseWindow}
            selectedVideos={selectedVideosList}
            sessionID={sessionID}
            clientid={clientid}
            expirationTime={expirationTime}
            baseApiUrl={baseApiUrl}
          />
        )}
      </div>
    );
  }
}
