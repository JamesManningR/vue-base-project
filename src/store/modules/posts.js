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
  UPDATE_POST(state, { post, id }) {
    state.posts[id] = post;
  },
  REMOVE_POSTS(state, ids) {
    const updatedPosts = state.posts.filter((item) => !ids.includes(item._id));
    state.projects = updatedPosts;
  },
};

export const actions = {
  async createPost({ commit }, post) {
    let createdPost
    try {
      createdPost = await db.postPost(post);
    } catch (err) {
      throw err.data.messege;
    }
    commit("ADD_POST", createdPost);
    commit("SET_POST", {});
    return createdPost;
  },
  async fetchPosts({ commit }) {
    let posts
    try {
      posts = await db.getPosts();
    } catch (err) {
      throw err.data.messege;
    }
    commit("SET_POSTS", posts);
    return posts;
  },
  async fetchPost({ commit }, id) {
    let posts;
    try {
      post = await db.getPost(id);
    } catch (err) {
      throw err;
    }
    commit("SET_POST", post);
    return post;
  },
  resetPost({ commit }) {
    commit("RESET_POST");
  },
  async updatePost({ commit }, postInfo) {
    const { post, id } = postInfo;
    let updatedPost
    try {
      updatedPost = await db.updatePost(post, id);
    } catch (err) {
      throw err.data.message;
    }
    commit("UPDATE_POST", { post, id });
    return post;
  },
  async deletePost({ commit }, postId) {
    let post;
    try {
      post = await db.deletePost(postId);
    } catch (err) {
      throw err.data.messege;
    }
    commit("REMOVE_POST", postId);
    return post;
  },
};
