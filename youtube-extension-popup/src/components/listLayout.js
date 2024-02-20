/* eslint-disable react/prop-types */
import React from "react";
// import moment from "moment";
import Loader from "./loader";

export default class ListLayout extends React.PureComponent {
  render() {
    const {
      isSelected,
      assets,
      selectedAssetList,
      handleSelect,
      loadContent,
      totalAssets,
      checkFiles,
    } = this.props;
    const renderAssets = isSelected ? selectedAssetList : assets;

    return (
      <ul className="list-layout">
        <li className="table-head">
          <div className="table-cell w-5"></div>
          <div className="table-cell w-35">Name</div>
          <div className="table-cell w-30">Modified By</div>
          <div className="table-cell w-30">Last Modified</div>
        </li>
        <div className="table-body">
          {renderAssets.length > 0 ? (
            <>
              <ul className="video-list">
                {renderAssets?.map((asset) => {
                  const checked = selectedAssetList.some(
                    (check) => check.id === asset.id
                  );
                  return (
                    <li
                      title={asset.name}
                      id={asset.id}
                      key={asset.id}
                      className={checked ? "active" : ""}
                      onClick={(event) => {
                        const liElement = event.currentTarget;
                        !checked && asset.id === liElement.id
                          ? liElement.classList.add("active")
                          : liElement.classList.remove("active");
                        handleSelect(asset);
                        const checkbox =
                          liElement.childNodes[0].childNodes[0].childNodes[0];

                        checkbox.checked = !checkbox.checked;
                      }}
                    >
                      <div className="cs-checkbox">
                        <label>
                          <input
                            type="checkbox"
                            className="cs"
                            id={`checkbox-${asset.id}`}
                            defaultChecked={checked}
                            onChange={(event) => {
                              const style =
                                event.target.parentNode.parentNode.parentNode;
                              !checked && asset.id === style.id
                                ? style.classList.add("active")
                                : style.classList.remove("active");
                              handleSelect(asset);
                            }}
                          />
                          <span className="lbl"></span>
                        </label>
                      </div>
                      <div className="table-cell w-35">
                        {asset.name}
                      </div>
                      {/* <div className="table-cell w-30">
                        {asset.snippet.channelTitle}
                      </div> */}
                      {/* <div className="table-cell w-30">
                        {moment(video.snippet.publishTime).format(
                          "ddd, MMM D YYYY"
                        )}
                      </div> */}
                    </li>
                  );
                })}
              </ul>
              <div
                className="load-more"
                onClick={loadContent}
                style={{
                  display:
                    isSelected || assets.length + 1 > totalAssets
                      ? "none"
                      : "block",
                }}
              >
                <a>Load More</a>
              </div>
            </>
          ) : checkFiles ? (
            <div className="file-not-found">File Not Found!</div>
          ) : (
            <Loader />
          )}
        </div>
      </ul>
    );
  }
}
