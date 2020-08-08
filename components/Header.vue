<!--  -->
<template>
  <header>
    <b-navbar toggleable="lg" :fixed="isFixed" :class="{'top-nav-collapse':top_nav_collapse,'isNotIndex':this.$store.state.common.isNotIndex}" type="dark">
      <div class="container">
        <b-navbar-brand class="site-logo">
          <img src="../assets/images/header/logo-light.png" alt srcset />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" exact exact-active-class="active">首页</b-nav-item>
            <b-nav-item to="/blog/1" exact exact-active-class="active">编程</b-nav-item>
            <b-nav-item to="/music" exact exact-active-class="active">音乐</b-nav-item>
            <b-nav-item to="/video" exact exact-active-class="active">视频</b-nav-item>
            <b-nav-item to="/software" exact exact-active-class="active">软件</b-nav-item>
            <b-nav-item to="/test" exact exact-active-class="active">测试</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form inline>
              <div class="md-form my-0">
                <b-form-input type="text" placeholder="Search" aria-label="Search" size="sm" class="mr-2"></b-form-input>
              </div>
            </b-nav-form>
            <b-nav-item-dropdown text="语言" menu-class="w-100">
              <b-dropdown-item to="#" exact exact-active-class="active">EN</b-dropdown-item>
              <b-dropdown-item to="#" exact exact-active-class="active">ZH</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown menu-class="w-100">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>用户</em>
              </template>
              <b-dropdown-item to="/user/login" exact exact-active-class="active">登录</b-dropdown-item>
              <b-dropdown-item to="/user/register" exact exact-active-class="active">注册</b-dropdown-item>
            </b-nav-item-dropdown>
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
      isFixed: 'top',
      top_nav_collapse: false,
      path: this.$route.path,
    };
  },
  watch: {
    $route: function (val, oldVal) {
      // console.log("new: %s, old: %s", val.path, oldVal.path);
    },
  },
  mounted() {
    // console.log(this.$store.state.common.isNotIndex);
    //首先，在mounted钩子window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    //然后在方法中，添加这个handleScroll方法来获取滚动的位置
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetHeight = document.querySelector('header').offsetHeight;
      // console.log("scrollTop:" + scrollTop + "," + "offsetHeight:" + offsetHeight);
      //设置背景颜色的透明读
      if (scrollTop > offsetHeight) {
        this.top_nav_collapse = true;
      } else {
        this.top_nav_collapse = false;
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
  // height: 4rem;
}
.site-logo img {
  height: 2rem;
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
  // background-image: linear-gradient(-225deg, #69eacb 0%, #eaccf8 48%, #6654f1 100%);
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}
.isNotIndex {
  background-color: #607d8b;
}
.navbar {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  font-weight: 300;
}
.md-form {
  position: relative;
}
.md-form input[type='text'] {
  background-image: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  background-color: transparent;
  padding: 0.3rem 0 0.55rem;
  color: #fff;
  margin: 0 5px 1px 8px;
}
.md-form input[type='text']:focus:not([readonly]) {
  box-shadow: 0 1px 0 0 #4285f4;
  border-bottom: 1px solid #4285f4;
}
</style>