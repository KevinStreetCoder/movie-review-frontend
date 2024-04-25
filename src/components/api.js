// api.js
import axios from 'axios';

const API_URL = 'https://dev-moviesreviewsites.pantheonsite.io/wp-json/wp/v2';

export default {
    getPosts() {
        return axios.get(`${API_URL}/posts`);
    },
    getPost(id) {
        return axios.get(`${API_URL}/posts/${id}`);
    },
    getMedia(id) {
        return axios.get(`${API_URL}/media/${id}`);
    },
    getCategory(id) {
        return axios.get(`${API_URL}/categories/${id}`);
    },
    // Add more methods for other API endpoints as needed
};