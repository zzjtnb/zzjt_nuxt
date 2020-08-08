<template>
  <div class="container">
    <h1 class="h1-responsive font-weight-bold">Make purchases with our app</h1>
    {{test}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ app, params }) {
    const data = await app.$axios.get(`/api/list?page=2&per_page=6`);
    // console.log(data);
    let test = data.data;
    return {
      test,
    };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {},
});
</script>

<style>
</style>
