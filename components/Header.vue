<!--  -->
<template>
  <header>
    <b-navbar toggleable="lg" :fixed="this.$store.state.common.isFixed" :class="{'top-nav-collapse':top_nav_collapse,'isNotIndex':this.$route.path!='/'}" type="dark">
      <div class="container">
        <b-navbar-brand class="site-logo">
          <img src="../assets/images/header/logo-light.png" alt srcset />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
          <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav align="center" fill>
            <b-nav-item to="/" exact exact-active-class="active">首页</b-nav-item>
            <b-nav-item to="/blog/1" exact exact-active-class="active">编程</b-nav-item>
            <b-nav-item to="/music" exact exact-active-class="active">音乐</b-nav-item>
            <b-nav-item to="/video" exact exact-active-class="active">视频</b-nav-item>
            <b-nav-item to="/software" exact exact-active-class="active">软件</b-nav-item>
            <b-nav-item to="/test" exact exact-active-class="active">测试</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <!-- space-around -->
          <b-navbar-nav class="ml-auto" justified>
            <b-nav-item-dropdown text="语言" menu-class="headerdown">
              <b-dropdown-item active-class="actives">EN</b-dropdown-item>
              <b-dropdown-item active-class="actives">ZH</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="用户" menu-class="headerdown" v-if="!this.$cookies.get('TOKEN_KEY')">
              <b-dropdown-item to="/user/login" active-class="actives">登录</b-dropdown-item>
              <b-dropdown-item to="/user/register" active-class="actives">注册</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="用户" menu-class="headerdown" v-else>
              <b-dropdown-item to="/user/account">个人中心</b-dropdown-item>
              <b-dropdown-item @click="cancellation()">注销</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-form inline>
              <b-form-input type="search" placeholder="输入关键词，回车..." class="searchInput" debounce="200" v-model="searchValue" @keyup.enter="search($event)"></b-form-input>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script >
export default {
  data() {
    return {
      top_nav_collapse: false,
      path: this.$route.path,
      searchValue: '',
    };
  },
  watch: {
    $route: function (val, oldVal) {
      // console.log("new: %s, old: %s", val.path, oldVal.path);
    },
  },
  mounted() {
    //首先，在mounted钩子window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    //然后在方法中，添加这个handleScroll方法来获取滚动的位置
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetHeight = document.querySelector('header').offsetHeight;
      // console.log('scrollTop:' + scrollTop + ',' + 'offsetHeight:' + offsetHeight);
      //设置背景颜色的透明读
      if (scrollTop > offsetHeight) {
        this.$store.dispatch('common/SetIsFixed', 'top');
        this.top_nav_collapse = true;
      } else {
        this.$store.dispatch('common/SetIsFixed', '');
        this.top_nav_collapse = false;
      }
    },
    search(event) {
      console.log(1);
      let data = event.target.value;
      this.$router.push({
        path: `/blog/1`,
        query: { query: data },
        params: { id: pageNum, per_page: this.query.per_page },
      });
      // this.$store.dispatch('SetSearchValue', data);
      // if (this.$route.path == '/search') {
      //   this.onRefresh();
      // } else {
      //   this.$router.push('/blog/1');
      // }
    },
    cancellation() {
      this.$cookies.remove('TOKEN_KEY');
      if (this.$route.path == '/') {
        location.reload();
      } else {
        this.$router.replace({ path: '/' });
      }
    },
  },
  components: {},
  //由于是在整个window中添加的事件，所以要在页面离开时摧毁掉，否则会报错
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped lang='scss'>
header {
  position: relative;
  z-index: 100;
  // height: 4rem;
}
.site-logo img {
  width: 3rem;
  height: 3rem;
}
/**logo扫光效果CSS**/
.site-logo {
  position: relative;
  overflow: hidden;
}

.site-logo:before {
  /**根据logo外div样式名称修改before前名称**/
  content: '';
  position: absolute;
  left: -665px; /**第一个数字参数控制扫光速度，数字越大越慢**/
  top: -460px;
  width: 200px;
  height: 0.2rem; /**光标的宽度，可根据实际调整**/
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: searchLights 1s ease-in 1s infinite;
  -o-animation: searchLights 1s ease-in 1s infinite;
  animation: searchLights 1s ease-in 1s infinite; /**第一个数字参数控制扫光速度，数字越大越慢**/
}
@-webkit-keyframes searchLights {
  0% {
    left: -100px;
    top: 0;
  }
  to {
    left: 120px;
    top: 100px;
  }
}
@-o-keyframes searchLights {
  0% {
    left: -100px;
    top: 0;
  }
  to {
    left: 120px;
    top: 100px;
  }
}
@-moz-keyframes searchLights {
  0% {
    left: -100px;
    top: 0;
  }
  to {
    left: 120px;
    top: 100px;
  }
}
@keyframes searchLights {
  0% {
    left: -100px;
    top: 0;
  }
  to {
    left: 120px;
    top: 100px;
  }
}
.top-nav-collapse {
  padding: 5px 0;
  background: #9542425e;
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}
.isNotIndex {
  background: #485563;
  background: -webkit-linear-gradient(to right, #29323c, #485563);
  background: linear-gradient(to right, #29323c, #485563);
}
.navbar {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  font-weight: 300;
}
.navbar-nav {
  flex-direction: initial;
}

.searchInput {
  background-image: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  background-color: transparent;
  color: #fff;
}
input[type='search']:focus:not([readonly]) {
  box-shadow: 0 0 0 0 #8ff442;
  border-bottom: 1px solid #8ff442;
}

input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  background: url('../assets/images/x.png') no-repeat;
  background-size: contain;
}
input::placeholder {
  color: #ffffffb0;
  font-size: 0.9rem;
}
.dropdown-item.actives,
.dropdown-item:actives {
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
}
.actives {
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
}
.dropdown-item:hover,
.dropdown-item:focus {
  color: #ffffff;
  text-decoration: none;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
}
</style>