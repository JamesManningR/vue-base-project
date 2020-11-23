<template>
  <v-container>
    <form>
      <v-text-field
        label="Title"
        type="text"
        name="title"
        v-model="value.title"
      >
      </v-text-field>
      <v-textarea name="body" label="Body" v-model="value.body" />
      <slot name="submit"></slot>
    </form>
  </v-container>
</template>

<script>
export default {
  props: { value: Object },
  watch: {
    value: {
      deep: true,
      handler() {
        this.$emit("input", this.value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
