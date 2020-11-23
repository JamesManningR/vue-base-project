<template>
  <v-card>
    <v-card-text>
      <h2 class="text--primary display-1">
        {{ post.title }}
      </h2>
      <p>
        {{ post.body }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      title: String,
      body: String,
    },
  },
};
</script>

<style lang="sass" scoped>
</style>