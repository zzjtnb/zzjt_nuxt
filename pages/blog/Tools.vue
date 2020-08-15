<!--  -->
<template>
  <div class="tools">
    <b-button size="sm" class="mr-2" pill variant="primary" @click="$share('/blog/details/'+id)" animation="throb">
      <b-iconstack animation="throb">
        <b-icon stacked icon="circle-fill" variant="primary"></b-icon>
        <b-icon stacked icon="share-fill" scale="0.5" variant="white" aria-hidden="true"></b-icon>
        <b-icon stacked icon="circle" variant="white"></b-icon>
      </b-iconstack>分享
    </b-button>
    <b-button size="sm" class="mr-2" pill variant="success" @click="editBlog(id)" v-if="this.$cookies.get('TOKEN_KEY')">
      <b-icon icon="pencil-square" aria-hidden="true"></b-icon>编辑
    </b-button>
    <b-button size="sm" class="mr-2" pill variant="danger" @click="deleteGists(index)" v-if="this.$cookies.get('TOKEN_KEY')">
      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>删除
    </b-button>
    <!-- {{index}} -->
    <!-- class="position-fixed fixed-top m-0 rounded-0 text-center"
    style="z-index: 2000;"-->
  </div>
</template>

<script >
export default {
  props: {
    id: String,
    index: Number,
  },
  data() {
    return {
      token: this.$cookies.get('TOKEN_KEY'),
    };
  },
  mounted() {},
  methods: {
    editBlog(id) {
      this.$router.push('/admin/blog/edit/' + id);
    },
    deleteGists(index) {
      this.$bvModal
        .msgBoxConfirm('是否永久删除该博客?', {
          title: '请确认',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value == true) {
            this.$axios.$delete('/api/blog/delete', { params: { id: this.id } }).then((res) => {
              if (res.stats == 200) {
                this.$bvToast.toast(res.msg, {
                  title: '提示',
                  variant: 'success',
                  solid: true,
                });
                // getChildValue是在父组件v-on:click='getChildValue'(@getChildValue)监听的方法
                // 第二个参数this.getChildValue是需要传的值
                this.$emit('getChildValue', index);
              } else {
                // this.$store.commit('common/SET_ALERT', this.alert);
                this.$bvToast.toast(res.msg, {
                  title: '提示',
                  variant: 'warning',
                  solid: true,
                  // noAutoHide: true,
                });
              }
            });
          }
        });
    },
  },
  components: {},
};
</script>

<style scoped lang='scss'>
.tools,
button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>