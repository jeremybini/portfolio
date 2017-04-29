import axios from 'axios';
import { Base64 } from 'js-base64';
import qs from 'qs';

import exportBoundMethods from '../utils/exportBoundMethods';

const extractData = response => response.data;
const extractAccessToken = response => extractData(response).access_token;
const extractNestedData = response => extractData(response).data;

class VimeoClient {
  constructor({ clientId, clientSecret, userId }) {
    Object.assign(this, {
      clientId,
      clientSecret,
      userId,
    });
  }

  getAccessToken() {
    if (!this._accessTokenResolver) {
      this._accessTokenResolver = axios.post(
        'https://api.vimeo.com/oauth/authorize/client',
        {
          grant_type: 'client_credentials',
        },
        {
          headers: {
            Authorization: `Basic ${Base64.encode(`${this.clientId}:${this.clientSecret}`)}`
          }
        }
      )
      .then(extractAccessToken);
    }

    return this._accessTokenResolver;
  }

  async fetchIframe(iframeOptions) {
    return extractData(await axios.get(
      `https://vimeo.com/api/oembed.json?${qs.stringify(iframeOptions)}`,
    ));
  }

  async fetchVideos() {
    const accessToken = await this.getAccessToken();
    const videos = extractNestedData(await axios.get(
      `https://api.vimeo.com/users/${this.userId}/videos`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    ));

    return videos.map(video => ({
      id: video.link,
      ...video,
    }));
  }

  async fetchVideosWithIframes(iframeOptions) {
    const videos = await this.fetchVideos();
    const iframes = await Promise.all(
      videos.map(video =>
        this.fetchIframe({
          url: video.link,
          ...iframeOptions
        })
      )
    );

    return videos.map((video, index) => ({
      ...video,
      embed: iframes[index],
    }));
  }
}

const {
  REACT_APP_VIMEO_CLIENT_ID,
  REACT_APP_VIMEO_CLIENT_SECRET,
  REACT_APP_VIMEO_USER_ID,
} = process.env;

const vimeoClient = new VimeoClient({
  clientId: REACT_APP_VIMEO_CLIENT_ID,
  clientSecret: REACT_APP_VIMEO_CLIENT_SECRET,
  userId: REACT_APP_VIMEO_USER_ID,
});

export default vimeoClient;

exportBoundMethods(vimeoClient, [
  'getAccessToken',
  'fetchVideos',
  'fetchIframe',
  'fetchVideosWithIframes'
], module.exports);
