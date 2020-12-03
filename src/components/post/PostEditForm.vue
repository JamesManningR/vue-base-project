<template>
  <v-container>
    <form @submit.prevent="updatePost">
      <v-text-field
        label="Title"
        type="text"
        name="title"
        v-model="updatedPost.title"
      >
      </v-text-field>
      <v-textarea name="body" label="Body" v-model="updatedPost.body" />
      <slot name="submit"></slot>
    </form>
  </v-container>
</template>

<script>
export default {
  props: { post: Object, postId: String },
  data() {
    return {
      updatedPost: this.post,
    };
  },
  methods: {
    updatePost() {
      this.$store
        .dispatch("post/updatePost", {
          post: this.updatedPost,
          id: this.postId,
        })
        .catch((err) => {
          console.error(err);
          return;
        })
        .then(() => {
          this.editMode = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
