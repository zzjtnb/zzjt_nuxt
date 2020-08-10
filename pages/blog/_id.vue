<template>
  <div v-if="!blogList.msg" style="height: 1500px;">
    <!-- 博客分类 -->
    <div class="container rounded shadow-lg text-center mt-3 mb-3 p-3">
      <div class="sort-title mb-2">
        <b-icon-bookmark-fill></b-icon-bookmark-fill>&nbsp;&nbsp;
        <span class="display-5 font-weight-bold" size="2rem">文章分类</span>
      </div>
      <div class="sort-chips mt-2">
        <b-button
          v-b-hover="handleHover"
          variant="light"
          tag="a"
          :class="{'chip-active':flag==index}"
          class="shadow rounded mr-2 chip"
          v-for="(value,item,index) in blogList.sort"
          :key="index"
          @click="getSortList(index,item)"
        >
          {{item}}
          <b-badge pill variant="info">{{value}}</b-badge>
        </b-button>
      </div>
    </div>
    <!-- 博客列表 -->

    <b-container fluid="xl" align="center">
      <b-row cols-sm="1" cols-md="2" cols-lg="3" align="center">
        <b-card-group v-for="(item,index) in blogList.blogs" :key="index">
          <b-card no-body class="shadow m-1 bg-white rounded">
            <b-link :to="`/blog/details/${item.id}`" class="position-relative">
              <b-card-img-lazy :src="item.attributes.img||imgsrc" height="220rem" blank-src=" https://via.placeholder.com/220?text=Loading+..." blank-height="220px"></b-card-img-lazy>
              <b-card-title title-tag="span">{{item.attributes.title}}</b-card-title>
            </b-link>
            <b-card-body body-class="card-content">
              <div class="summary block-with-text">{{item.body}}</div>
              <div class="publish">
                <p class="m-1">
                  <b-icon-clock-history variant="info"></b-icon-clock-history>
                  {{item.date}}
                </p>
                <b-link v-if="item.attributes.categories!=undefined" class="text-dark">
                  <span>
                    <b-icon-bookmark-fill></b-icon-bookmark-fill>
                    {{item.attributes.categories}}
                  </span>
                </b-link>
              </div>
              <Tools :id="item.id" :index="index"></Tools>
            </b-card-body>
            <b-card-footer class="bg-white p-1" v-if="item.attributes.tags">
              <b-button size="sm" class="mr-2" pill variant="success" v-for="(tags,index) in item.attributes.tags" :key="index">{{tags}}</b-button>
            </b-card-footer>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
    <!-- 分页 -->
    <div class="overflow-auto" v-if="blogList.pagination!=undefined">
      <b-pagination-nav
        :number-of-pages="blogList.pagination.num"
        pills
        size="lg"
        first-text="⏮"
        prev-text="⏪"
        next-text="⏩"
        last-text="⏭"
        align="center"
        @change="pageChange"
        :link-gen="linkGen"
        v-if="blogList.pagination.num>1"
      ></b-pagination-nav>
    </div>
  </div>
  <div v-else>
    <b-alert show variant="danger" class="text-center">
      <a href="/blog/1" class="alert-link">{{blogList.msg}}刷新重试</a>
    </b-alert>
  </div>
</template>

<script >
import fetch from 'node-fetch';
// global.fetch = fetch;
import Tools from '../../components/Tools';
export default {
  async asyncData({ app, params, query, store, route }) {
    let blogList = await app.$axios.get(`/api/list?page=${params.id}&per_page=${app.store.state.common.query.per_page}`).then((res) => {
      return res.data;
    });
    return { blogList };
  },
  middleware: ['cookie'],
  data() {
    return {
      query: {
        pageNum: this.$store.state.common.query.pageNum,
        per_page: this.$store.state.common.query.per_page,
      },
      token: this.$store.state.token.token,
      title: '博客',
      imgsrc: 'https://source.unsplash.com/random/800x600',
      isHovered: false,
      flag: -1,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  mounted() {
    // this.$axios({
    // 	url: "/gist/users/zzjtnb/gists?page=1&per_page=10"
    // }).then(res => {
    // 	console.log("gist: ", res);
    // });
    // this.$axios({
    // 	url: "/frist/scripts/quote/q.php?type=detailed&symbol=TRNX"
    // }).then(res => {
    // 	console.log("frist: ", res);
    // });
  },
  methods: {
    goDetails(id) {
      // console.log(id);
      this.$router.push('/blog/details/' + id);
    },
    // 分页点击事件的方法
    pageChange(pageNum) {
      this.query.pageNum = pageNum;
      // this.$store.commit('common/SET_QUERY', this.query);
      this.$store.dispatch('common/SetQueryPageNumber', this.query.pageNum);
    },
    linkGen(pageNum) {
      // return {
      //   path: `/blog/${pageNum}`,
      //   // query: { query: this.query },
      //   name: 'blog-id',
      //   params: { id: pageNum, per_page: this.query.per_page },
      // };
      return `/blog/${pageNum}`;
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    getSortList(index, path) {
      this.flag = index;
      console.log(this.flag, index);
      this.$axios(`/api/list?page=${this.$store.state.common.query.pageNum}&per_page=${this.$store.state.common.query.per_page}`, { params: { path: path } }).then((res) => {
        console.log('gist: ', res);
        this.blogList.blogs = res.data.blogs;
      });
    },
  },
  components: {
    Tools,
  },
};
</script>

<style scoped lang='scss'>
.chip-active {
  color: #fff;
  background: linear-gradient(to bottom right, #ff5e3a 0%, #ff2a68 100%);
  box-shadow: 2px 5px 10px #aaa;
}
.publish {
  display: flex;
  justify-content: space-between;
}
.card .card-title {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  margin: 0;
  font-size: 1.3rem;
  color: white;
}
.block-with-text:before {
  content: '...';
  position: absolute;
  right: 0.2em;
  bottom: 0;
}
.block-with-text:after {
  content: '';
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.4em;
  background: white;
}
.block-with-text {
  overflow: hidden;
  position: relative;
  line-height: 1.5em;
  max-height: 4.5em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
}
.chip-active {
  color: #fff !important;
  background: linear-gradient(to bottom right, #ff5e3a 0%, #ff2a68 100%) !important;
  box-shadow: 2px 5px 10px #aaa !important;
}
.chip:hover {
  color: #fff;
  background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%) !important;
}
</style>