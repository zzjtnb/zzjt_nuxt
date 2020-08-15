<template>
  <b-container>
    <!-- 页面使用，不支持ssr，需要用client-only包裹，低版本是no-ssr标签，article_content为接口获取的markdown内容，想看配置请查看文档 -->
    <!-- <mavon-editor defaultOpen="preview" v-html="handbook" />
    <div class="mavonEditor">
      <no-ssr></no-ssr>
    </div>-->
    <b-card no-body class="shadow m-1 bg-white rounded">
      <template v-slot:header>
        <b-row>
          <b-col cols="auto" class="mr-auto">
            <b-button class="ml-1" size="sm" pill variant="success" v-for="(tags,index) in data.details.attributes.tags" :key="index">{{tags}}</b-button>
          </b-col>
          <b-col cols="auto">
            <b-link v-if="data.details.attributes.categories!=undefined" class="text-variant">
              <span>
                <b-icon-bookmark-fill></b-icon-bookmark-fill>
                {{data.details.attributes.categories}}
              </span>
            </b-link>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col cols="auto">
            <b-icon-calendar2 variant="info"></b-icon-calendar2>
            发布日期:
            {{data.date}}
          </b-col>
          <b-col cols="auto">
            <b-icon-file-text variant="info"></b-icon-file-text>
            文章字数:
            {{data.details.body.replace(/[\\\`\*\_\[\]\#\+\-\!\>]/g,'').length}}
          </b-col>
          <b-col cols="auto">
            <b-icon-clock variant="info"></b-icon-clock>
            预计阅读时长:
            {{data.details.body.replace(/[\\\`\*\_\[\]\#\+\-\!\>]/g,'').length |readTime }}
            分钟
          </b-col>
        </b-row>
      </template>
      <b-card-body class="p-0">
        <client-only>
          <mavon-editor v-model="data.details.body" :boxShadow="false" :subfield="false" defaultOpen="preview" :toolbarsFlag="false" :ishljs="true" codeStyle="agate" />
        </client-only>
      </b-card-body>
      <!-- <b-card-footer>
        <b-card-text>Header and footers using props.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card-footer>-->
    </b-card>
  </b-container>
</template>

<script >
export default {
  async asyncData({ app, params, query, store, route, error }) {
    return await app.$axios
      .get('/api/blog/details', { params: { id: params.id } })
      .then((res) => {
        return { data: res.data };
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' });
      });
  },
  data() {
    return {};
  },
  head() {
    return {
      title: this.data.details.attributes.title,
    };
  },
  filters: {
    readTime: function (value) {
      if (!value) return '';
      // var readTXT = document.querySelector('.article').innerText.length;
      let readTime = value / 400; //计算阅读时间(一般，人的阅读速度是300-500字/分钟 ，所以就取了个400，这个值可以根据自己的实际需求来更改)
      let mathReadTime = Math.round(readTime); //四舍五入
      if (mathReadTime > 1) {
        return mathReadTime;
        // console.log('预计阅读时长：' + readTime + '分钟');
      } else {
        return 1;
        // console.log('预计阅读时长：1分钟');
      }
    },
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
// .publish {
//   display: flex;
//   justify-content: space-between;
// }
</style>