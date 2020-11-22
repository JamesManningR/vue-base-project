<template>
  <form>
    <label>
      Title
      <input type="text" name="title" v-model="value.title" />
    </label>
    <label>
      Body
      <textarea name="body" v-model="value.body" />
    </label>
    <slot name="submit"></slot>
  </form>
</template>

<script>
export default {
  props: { value: Object },
  watch: {
    value: {
      deep: true,
      handler() {
        this.$emit("input", this.value);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
