<!--  -->
<template>
  <div>
    <button @click="fetchSomething">请求</button>
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
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async fetchSomething() {
      // const data = await this.$axios.$get('/api/sitemap');

      const config = {
        headers: {
          Referer: 'https://c.mi.com/uk/miuidownload/detail?guide=2',
          Host: 'update.miui.com',
        },

        params: { d: 'lancelot_eea_global', b: 'F', r: 'eea', n: '' },
      };
      this.$axios.setHeader('Referer', 'https://c.mi.com/uk/miuidownload/detail?guide=2');
      const data = await this.$axios
        .$get('/miui/updates/v1/fullromdownload.php', config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {});
      console.log(data);
    },
  },
  components: {},
};
</script>

<style scoped lang='scss'>
</style>