/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

class Bank {
    constructor(config) {
        console.log("CONFIG HERE",config)
    }


    getSidandContent() {
        // const setting = this;
        // const requestUrl = `https://${setting.platformUrl}/v1/auth/app/getYapiAddress`;

        // const parsedUrl = new URL(requestUrl);
        // const origin = `${parsedUrl.protocol}//${parsedUrl.host}`;
        // return new Promise((resolve, reject) => {
        //     try {
        //         resolve(
        //             // Make the Axios request with the determined origin
        //             axios.get(requestUrl, {
        //                 headers: {
        //                     'Origin': `https://app.contentstack.com`,
        //                     // Add other headers as needed
        //                 }
        //             })
        //         );
        //     } catch (error) {
        //         reject(error);
        //     }
        // });
    }
}

export default {
    async initalizingAssetList(config, selectedAssets) {
        const bank = new Bank(config);
        return await bank.getSidandContent();
    },
};
