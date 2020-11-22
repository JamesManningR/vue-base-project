<template>
  <main>
    <h1>Posts</h1>
    <h2>Create a post</h2>
    <post-edit-form v-model="post">
      <button
        @click.prevent="$store.dispatch('post/createPost', post)"
        slot="submit"
        type="submit"
      >
        Create
      </button>
    </post-edit-form>
    <h2>Heres a list of posts</h2>
    <ul>
      <li v-for="post in posts" :key="post._id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState } from "vuex";

import PostEditForm from "@/components/editPostForm";

export default {
  name: "Home",
  components: {
    PostEditForm
  },
  data() {
    return {
      post: {
        title: "",
        body: ""
      }
    };
  },
  computed: {
    ...mapState("post", ["posts"])
  },
  created() {
    this.$store.dispatch("post/fetchPosts");
  }
};
</script>
