<template>
  <div class="zzjt">
    <Header />
    <div class="view" :class="{'index':!this.$store.state.common.isNotIndex}">
      <div class="mask">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header';
export default {
  data() {
    return {};
  },
  mounted() {
    if (/(iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone)/i.test(navigator.userAgent)) {
      //移动端
      this.$store.commit('common/SET_ISMOBILE', true);
    } else {
      //电脑PC端
      this.$store.commit('common/SET_ISMOBILE', false);
    }
    // this.$myInjectedFunction("test");
  },
  methods: {},
  components: {
    Header,
  },
};
</script>

<style  lang='scss'>
html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}
.view {
  // position: relative;
  overflow: hidden;
  cursor: default;
  width: 100%;
  height: 100%;
}

.view .mask {
  margin-top: 4rem;
}
.index {
  background-image: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%), url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
}
.rgba-gradient {
  /* background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
	background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
	background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
	background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
	background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%); */
}
</style>