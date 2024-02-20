/* eslint-disable react/prop-types */
import React from "react";
import Loader from "./loader";

export default class GridLayout extends React.PureComponent {
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
      <ul className="grid-layout">
        <div className="grid-body">
          {renderAssets.length > 0 ? (
            <>
              <ul>
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
                            defaultChecked={checked}
                            id={`checkbox-${asset.id}`}
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
                      <div className="item">
                        <span
                          className="img"
                          style={{
                            backgroundImage: `url(${asset.thumbnail})`,
                          }}
                        ></span>
                        <span className="name">{asset.name}</span>
                      </div>
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
