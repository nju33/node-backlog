import axios from 'axios';

export const createAxiosInstance = (apiKey: string) => {
  return axios.create({
    baseURL: 'https://geek.backlog.jp/api/v2/',
    params: {apiKey}
  });
};
