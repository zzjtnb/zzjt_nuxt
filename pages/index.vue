<template>
  <div :class="{'index':this.$route.path=='/'}">
    <div class="container text-center">
      <div class="view">
        <!-- {{this.$route.path}} -->
        <h1 class="mt-5 font-weight-bold">欢迎来到我的小站</h1>
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
  position: relative;
  margin-top: 6rem;
}

.index {
  position: fixed;
  top: 0;
  z-index: -1;
  overflow: hidden;
  cursor: default;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%), url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>