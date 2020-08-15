<template>
  <div v-if="!allBlog.msg">
    <!-- <div>{{this.allBlog.blogs}}</div> -->
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
          v-for="(value,item,index) in allBlog.sort"
          :key="index"
          @click="getSortList(index,item)"
        >
          {{item}}
          <b-badge pill variant="info">{{value}}</b-badge>
        </b-button>
      </div>
    </div>
    <div class="container">
      <b-form-select v-model="selectedTime" :options="options" value-field="item" text-field="name" disabled-field="notEnabled"></b-form-select>
    </div>
    <!-- 博客列表 -->
    <b-container>
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3" cols-xl="3" align="center">
        <b-card-group v-for="(item,index) in allBlog.blogs" :key="index">
          <b-card no-body class="shadow m-1 bg-white rounded">
            <b-link :to="`/blog/details/${item.id}`" class="position-relative hover-img">
              <b-card-img-lazy :src="item.attributes.img||imgsrc+ allBlog.imgArr[index]" height="220rem" blank-src=" https://via.placeholder.com/220?text=Loading+..." blank-height="220rem" rounded></b-card-img-lazy>
              <b-card-title title-tag="span">{{item.attributes.title}}</b-card-title>
            </b-link>
            <b-card-body body-class="card-content">
              <div class="summary" :class="{'block-with-text':item.body.length>130}">{{item.body}}</div>
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
              <Tools :id="item.id" :index="index" @getChildValue="getValue"></Tools>
            </b-card-body>
            <b-card-footer class="bg-white p-1" v-if="item.attributes.tags">
              <b-button size="sm" class="mr-2" pill variant="success" v-for="(tags,index) in item.attributes.tags" :key="index">{{tags}}</b-button>
            </b-card-footer>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
    <!-- 分页 -->
    <div class="overflow-auto" v-if="allBlog.pagination!=undefined">
      <b-pagination-nav
        v-if="!this.$store.state.common.isMobile&&allBlog.pagination.num>1"
        :number-of-pages="allBlog.pagination.num"
        pills
        size="lg"
        first-text="⏮"
        prev-text="⏪"
        next-text="⏩"
        last-text="⏭"
        align="center"
        @change="pageChange"
        :link-gen="linkGen"
      ></b-pagination-nav>
      <b-pagination-nav v-if="this.$store.state.common.isMobile&&allBlog.pagination.num>1" align="center" pills :number-of-pages="allBlog.pagination.num" :link-gen="linkGen" class="mt-3 mb-3"></b-pagination-nav>
    </div>
  </div>
  <div v-else>
    <b-alert show variant="danger" class="text-center">
      <a href="/blog/1" class="alert-link">{{allBlog.msg}}刷新重试</a>
    </b-alert>
  </div>
</template>

<script >
import Tools from './Tools';
export default {
  head() {
    return {
      title: this.title,
    };
  },
  async asyncData({ app, params, query, store, route, error }) {
    return await app.$axios
      .get(`/api/list?page=${params.id}&per_page=${app.store.state.common.query.per_page}`)
      .then((res) => {
        // store.dispatch('blogs/SetBlogList', res.data);
        return { allBlog: res.data };
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' });
      });
  },
  data() {
    return {
      token: this.$cookies.get('TOKEN_KEY'),
      title: '博客',
      imgsrc: 'https://source.unsplash.com/random/800x600?',
      isHovered: false,
      flag: -1,
      allBlog: {},
      selectedTime: 'b',
      options: [
        { item: 'b', name: '最新发表' },
        { item: 'a', name: '最早发表' },
      ],
      nowSort: null,
    };
  },
  watch: {
    selectedTime: function (newVal, oldVal) {
      // console.log('new: %s, old: %s', newVal, oldVal);
      // if (this.selectedTime == 'b') {
      //   this.allBlog.blogs = this.allBlog.blogs.sort((a, b) => {
      //     return a.date.localeCompare(b.date);
      //   });
      // } else {
      //   this.allBlog.blogs = this.allBlog.blogs.sort((a, b) => {
      //     return b.date.localeCompare(a.date);
      //   });
      // }
      this.getSelectedTime(newVal);
    },
  },
  mounted() {},

  methods: {
    goDetails(id) {
      this.$router.push('/blog/details/' + id);
    },
    // 分页点击事件的方法
    pageChange(pageNum) {
      // console.log(JSON.parse(JSON.stringify(pageNum)));
      // this.$store.dispatch('common/SetQueryPageNumber', pageNum);
    },
    linkGen(pageNum) {
      return { path: `/blog/${pageNum}` };
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    getSortList(index, path) {
      this.flag = index;
      this.nowSort = path;
      this.$axios(`/api/list?page=${this.$store.state.common.query.pageNum}&per_page=${this.$store.state.common.query.per_page}`, { params: { path: path } }).then((res) => {
        this.allBlog.blogs = res.data.blogs;
        this.allBlog.pagination = res.data.pagination;
      });
    },
    getSelectedTime(newVal) {
      this.$axios(`/api/list?page=${this.$store.state.common.query.pageNum}&per_page=${this.$store.state.common.query.per_page}`, { params: { timeOrder: newVal, path: this.nowSort } }).then((res) => {
        console.log(res.data);
        this.allBlog.blogs = res.data.blogs;
        this.allBlog.pagination = res.data.pagination;
      });
    },
    getValue(index) {
      // index就是子组件传过来的值
      this.allBlog.blogs.splice(index, 1);
    },
  },
  computed: {},
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

.chip-active {
  color: #fff !important;
  background: linear-gradient(to bottom right, #ff5e3a 0%, #ff2a68 100%) !important;
  box-shadow: 2px 5px 10px #aaa !important;
}
.chip:hover {
  color: #fff;
  background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%) !important;
}
.card .card-title {
  position: absolute;
  width: 100%;
  top: 30%;
  left: 0;
  margin: 0;
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
  font-family: cursive;
  z-index: 2;
}

.hover-img:before,
.hover-img:after {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  z-index: 1;
  opacity: 0.5;
  transform: scaleY(1);
}
.hover-img:hover:before,
.hover-img:hover:after {
  transform: scale(1);
  opacity: 0;
  transition: all 0.3s ease;
}
</style>