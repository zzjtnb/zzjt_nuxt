<template>
  <div class="view" :class="{'index':this.$store.state.common.isIndex}">
    <div class="mask">
      <div class="container">
        <h1 class="h1-responsive font-weight-bold">Make purchases with our app</h1>
        <!-- {{test}} -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // async asyncData({ app, params }) {
  //   const data = await app.$axios.get(`/api/list?page=2&per_page=6`);
  //   let test = data.data;
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
});
</script>

<style scoped lang="scss">
.view {
  // position: relative;
  overflow: hidden;
  cursor: default;
  width: 100%;
  height: 100%;
}

.view .mask {
  margin-top: 4rem;
}
.index {
  background-image: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%), url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
}
</style>