import axios from "axios";

// axios.interceptors.response.use(
//   (response) => {
//     // do something with the response data
//     console.log("Response was received");

//     return response;
//   },
//   (error) => {
//     // handle the response error
//     return Promise.reject(error);
//   }
// );

export const Axios = axios.create({
  baseURL: `https://disease.sh/v3`,
});
