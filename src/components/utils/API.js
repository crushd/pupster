import axios from "axios";

const BASEURL = "https://dog.ceo/api/breed/";
const POSTURL = "/images";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + POSTURL);
  }
};
