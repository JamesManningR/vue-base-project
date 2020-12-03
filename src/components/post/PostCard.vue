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
      <time>
        {{ new Date(post.dateUpdated).toLocaleDateString() }}
      </time>
    </v-card-text>
    <post-edit-form v-else :post="post" :post-id="postId">
      <v-btn color="primary" slot="submit" type="submit"> Update </v-btn>
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
    postId: String,
    post: {
      title: String,
      body: String,
    },
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
</style>