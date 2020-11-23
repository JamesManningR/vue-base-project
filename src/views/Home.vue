<template>
  <main>
    <v-container>
      <h1>Posts</h1>
      <h2>Create a post</h2>
      <post-edit-form v-model="post">
        <v-btn
          @click.prevent="createPost"
          color="primary"
          slot="submit"
          type="submit"
        >
          Create
        </v-btn>
      </post-edit-form>
      <h2>Heres a list of posts</h2>
      <v-row>
        <v-col cols="4" v-for="post in posts" :key="post._id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapState } from "vuex";

import PostEditForm from "@/components/editPostForm";

export default {
  name: "Home",
  components: {
    PostEditForm,
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  computed: {
    ...mapState("post", ["posts"]),
  },
  methods: {
    async createPost() {
      await this.$store.dispatch("post/createPost", this.post);
      this.post = {};
    },
  },
  created() {
    this.$store.dispatch("post/resetPost");
    this.$store.dispatch("post/fetchPosts");
  },
};
</script>
