<template>
  <div class="container">
    <h1 v-if="error.statusCode === 403">Forbidden</h1>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-if="error.statusCode === 500">Server Error</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
  <!-- <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>-->
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // 你可以为错误页面指定自定义的布局
};
</script>

<style scoped>
.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}
</style>