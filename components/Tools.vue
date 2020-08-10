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
    <b-button size="sm" class="mr-2" pill variant="success" @click="editBlog(id)" v-if="token">
      <b-icon icon="pencil-square" aria-hidden="true"></b-icon>编辑
    </b-button>
    <b-button size="sm" class="mr-2" pill variant="danger" @click="deleteGists(id)" v-if="token">
      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>删除
    </b-button>
    <!-- {{id,index}} -->
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
      token: this.$store.state.token.token,
    };
  },
  mounted() {},
  methods: {
    editBlog(index) {
      if (!this.token) {
        this.$message({
          message: '请绑定有效的Token',
          type: 'warning',
        });
        return;
      }
      this.$router.push('/blog/edit/' + this.id);
    },
    deleteGists(index) {
      this.$confirm('是否永久删除该博客?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        let blog = this.blogs[index];
        deleteGist(blog.id).then((result) => {
          this.$message({
            message: '删除成功',
            type: 'success',
          });
          this.blogs.splice(index, 1);
        });
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