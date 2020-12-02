import db from "../../services/db.service";

export const namespaced = true;

export const state = {
  posts: [
    {
      title: "",
      body: ""
    }
  ],
  post: {},
};

export const mutations = {
  ADD_POST(state, post) {
    state.posts.push(post);
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  RESET_POSTS(state) {
    state.posts = {};
  },
  SET_POST(state, post) {
    state.post = post;
  },
  RESET_POST(state) {
    state.post = {};
  },
  UPDATE_POST(state, post) {
    const postIndex = state.posts.findIndex((item) => item.id == post._id);
    state.posts[postIndex] = post;
  },
  REMOVE_POSTS(state, ids) {
    const updatedPosts = state.posts.filter((item) => !ids.includes(item._id));
    state.projects = updatedPosts;
  },
};

export const actions = {
  async createPost({ commit }, post) {
    try {
      const post_2 = await db.postPost(post);
      commit("ADD_POST", post_2);
      commit("SET_POST", {});
    } catch (err) {
      console.log(err.data.messege);
    }
  },
  async fetchPosts({ commit }) {
    try {
      const posts = await db.getPosts();
      commit("SET_POSTS", posts);
      return posts;
    } catch (err) {
      console.log(err.data.messege);
    }
  },
  async fetchPost({ commit }, id) {
    try {
      const post = await db.getPost(id);
      commit("SET_POST", post);
    } catch (err) {
      console.log(err);
    }
  },
  resetPost({ commit }) {
    commit("RESET_POST");
  },
  async updatePost({ commit }, post) {
    try {
      const post_2 = await db.updatePost(post);
      commit("UPDATE_POST", post_2);
    } catch (err) {
      console.log(err.data.messege);
    }
  },
  async deletePost({ commit }, post) {
    try {
      const post_1 = await db.deletePost(post._id);
      commit("REMOVE_POST", [post_1._id]);
    } catch (err) {
      console.log(err.data.messege);
    }
  },
};
