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
      <h2 class="display-1 mb-4">Heres a list of posts</h2>
      <v-row>
        <v-col cols="4" v-for="(post, key) in orderedPosts" :key="key">
          <post-card :postId="key" :post="post"></post-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapState } from "vuex";

import PostEditForm from "@/components/post/PostEditForm";
import PostCard from "@/components/post/PostCard";

export default {
  name: "Home",
  components: {
    PostEditForm,
    PostCard,
  },
  data() {
    return {
      post: {
        title: "aa",
        body: "aa",
      },
    };
  },
  computed: {
    orderedPosts() {
      let sortedPosts = Object.fromEntries(
        Object.entries(this.posts).sort((a, b) => {
          return a > b;
        })
      );
      return sortedPosts;
    },
    ...mapState("post", ["posts"]),
  },
  methods: {
    async createPost() {
      await this.$store.dispatch("post/createPost", this.post);
      this.post = {};
    },
  },
  beforeCreate() {
    this.$store.dispatch("post/fetchPosts");
  },
};
</script>
