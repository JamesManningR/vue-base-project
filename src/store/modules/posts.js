import db from "../../services/db.service";

export const namespaced = true;

export const state = {
  posts: {},
  post: {},
};

export const mutations = {
  ADD_POST(state, post) {
    state.posts.push(post);
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_POST(state, post) {
    state.post = post;
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
  createPost({ commit }, post) {
    return db
      .postPost(post)
      .then((post) => {
        commit("ADD_POST", post);
      })
      .catch((err) => {
        console.log(err.data.messege);
      });
  },
  fetchPosts({ commit }) {
    return db
      .getPosts()
      .then((posts) => {
        commit("SET_POSTS", posts);
        return posts;
      })
      .catch((err) => {
        console.log(err.data.messege);
      });
  },
  fetchPost({ commit }, id) {
    return db
      .getPost(id)
      .then((post) => {
        commit("SET_POSTS", post);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updatePost({ commit }, post) {
    return db
      .updatePost(post)
      .then((post) => {
        commit("UPDATE_POST", post);
      })
      .catch((err) => {
        console.log(err.data.messege);
      });
  },
  deletePost({ commit }, post) {
    return db
      .deletePost(post._id)
      .then((post) => {
        commit("REMOVE_POST", [post._id]);
      })
      .catch((err) => {
        console.log(err.data.messege);
      });
  },
};
