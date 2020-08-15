<template>
  <div>软件</div>
</template>

<script>
export default {
  // async asyncData({ app }) {
  //   const { data } = await app.$axios.$get('/miui/updates/v1/fullromdownload.php', {
  //     headers: {},
  //     params: { d: 'lancelot_eea_global', b: 'F', r: 'eea', n: '' },
  //   });

  //   return data;
  // },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async fetchSomething() {
      // const data = await this.$axios.$get('/api/blog/sitemap');
      // const data = await this.$axios
      //   .$get('/miui/updates/v1/fullromdownload.php', {
      //     //重点在这里，添加配置项 headers 就可以了
      //     headers: {
      //       Referer: 'https://c.mi.com/uk/miuidownload/detail?guide=2',
      //       Host: 'update.miui.com',
      //     },
      //     proxy: {
      //       host: '127.0.0.1',
      //       port: 3000,
      //     },
      //     params: { d: 'lancelot_eea_global', b: 'F', r: 'eea', n: '' },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });
    },
  },
  components: {},
};
</script>

<style scoped lang='scss'>
</style>