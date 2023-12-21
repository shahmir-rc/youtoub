/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

class Bank {
    constructor({ platformUrl }) {
        this.platformUrl = platformUrl;
    }


    getSidandContent() {
        const setting = this;
        const requestUrl = `https://${setting.platformUrl}/v1/auth/app/getYapiAddress`;

        // Parse the request URL to extract the origin
        const parsedUrl = new URL(requestUrl);
        const origin = `${parsedUrl.protocol}//${parsedUrl.host}`;
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    // Make the Axios request with the determined origin
                    axios.get(requestUrl, {
                        headers: {
                            'Origin': `https://app.contentstack.com`,
                            // Add other headers as needed
                        }
                    })
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    // getSelectedAssets(assetIds) {
    //     console.log("video ids here >>>>>> ", assetIds)
    //     const setting = this;
    //     return new Promise((resolve, reject) => {
    //         try {
    //             resolve(
    //                 axios({
    //                     method: "GET",
    //                     baseURL: "https://www.googleapis.com/youtube/v3/videos/",
    //                     url: `/?part=snippet&key=${setting.apiKey}
    //     &channelId=${setting.channelId}
    //     &type=video&order=date&id=${videoIds}`,
    //                 })
    //             );
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // }
}

export default {
    async initalizingAssetList(config, selectedAssets) {
        console.log("config and selected videos here >>>>>>", selectedAssets)
        const bank = new Bank(config);
        return await bank.getSidandContent();
        // return await bank.getSelectedAssets(selectedVideos);
    },
};
