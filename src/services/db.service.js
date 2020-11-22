const axios = require("axios");

const API_URL = process.env.VUE_APP_NODE_API_URL;

export default {
  // Posts ============================
  // Create ------------------------------
  async postPost(post) {
    return axios
      .post(`${API_URL}/post`, post)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  },
  // Read ------------------------------
  // Multiple
  async getPosts() {
    return axios
      .get(`${API_URL}/post`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        throw err.response;
      });
  },
  // Single
  async getPost(id) {
    return axios
      .get(`${API_URL}/post/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  },
  // Update ----------------------
  async updatePost(post) {
    const { title, body } = post;
    const updatedPost = {
      title,
      body
    };
    const id = post._id;
    return axios
      .put(`${API_URL}/post/${id}`, updatedPost)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  },
  // Delete ----------------------
  async deletePost(id) {
    return axios
      .delete(`${API_URL}/post/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        throw err.response;
      });
  }
};
