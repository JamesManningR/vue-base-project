<template>
  <v-card>
    <v-card-text v-if="!editMode">
      <v-btn dark color="orange" @click="editMode = true">Edit</v-btn>
      <h2 class="text--primary display-1">
        {{ post.title }}
      </h2>
      <p>
        {{ post.body }}
      </p>
    </v-card-text>
    <post-edit-form v-else v-model="post">
      <v-btn
        @click.prevent="updatePost"
        color="primary"
        slot="submit"
        type="submit"
      >
        Update
      </v-btn>
    </post-edit-form>
  </v-card>
</template>

<script>
import PostEditForm from "@/components/post/PostEditForm";

export default {
  data() {
    return {
      editMode: false,
    };
  },
  components: {
    PostEditForm,
  },
  props: {
    post: {
      title: String,
      body: String,
    },
  },
  methods: {
    updatePost() {
      this.$store
        .dispatch("post/editPost", this.post)
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

<style lang="sass" scoped>
</style>