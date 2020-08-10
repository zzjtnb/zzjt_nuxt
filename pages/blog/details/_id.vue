<!--  -->
<template>
  <div class="container">
    <!-- 页面使用，不支持ssr，需要用client-only包裹，低版本是no-ssr标签，article_content为接口获取的markdown内容，想看配置请查看文档 -->
    <!-- <mavon-editor defaultOpen="preview" v-html="handbook" />
    <div class="mavonEditor">
      <no-ssr></no-ssr>
    </div>-->
    <div class="markdown-body">
      <client-only>
        <mavon-editor v-model="data.body" :subfield="false" defaultOpen="preview" :toolbarsFlag="false" :ishljs="true" codeStyle="agate" />
      </client-only>
    </div>
  </div>
</template>

<script >
export default {
  async asyncData({ app, params, query, store, route }) {
    const { data } = await app.$axios.get(`/api/details`, { params: { id: params.id } });
    return { data: data };
  },
  data() {
    return {};
  },
  head() {
    return {
      title: this.data.attributes.title,
    };
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style scoped lang='scss'>
.v-note-wrapper {
  z-index: 0;
}
</style>