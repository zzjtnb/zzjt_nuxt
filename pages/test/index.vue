<!--  -->
<template>
  <div>
    <b-button variant="primary" @click="fetchSomething">请求</b-button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '测试',
    };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async fetchSomething() {
      // const data = await this.$axios.$get('/api/blog/sitemap');
      // const data = await this.$axios
      //   .$get('/miui/updates/v1/fullromdownload.php', {
      //     headers: {
      //       referer: 'https://c.mi.com/uk/miuidownload/detail?guide=2',
      //       host: 'update.miui.com',
      //     },
      //     params: { d: 'lancelot_eea_global', b: 'F', r: 'eea', n: '' },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {});
    },
  },
  components: {},
};
</script>

<style scoped lang='scss'>
</style>