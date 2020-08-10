<!--  -->
<template>
  <div>
    <!-- <div v-html="test"></div> -->
    <ul v-for="item in test">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // async asyncData({ app }) {
  //   const data = await app.$axios.get('/api/test');
  //   let test = data.data;
  //   return {
  //     test,
  //   };
  // },
  // async asyncData({ app }) {
  //   // const data = await app.$axios.get('/api/test');
  //   const data = await app.$axios.get('/api/v1/data');
  //   let test = data.data.data;
  //   return {
  //     test,
  //   };
  // },
  // async asyncData({ app }) {
  //   const data = await app.$axios.get('/api/blog');
  //   let test = data.data.data;
  //   return {
  //     test,
  //   };
  // },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style scoped lang='scss'>
</style>