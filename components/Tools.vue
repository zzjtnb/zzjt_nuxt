<!--  -->
<template>
  <div class="tools">
    <b-button @click="$share('/blog/details/'+id)" style="padding: 3px 0">分享</b-button>
    <b-button @click="editBlog(id)" style="padding: 3px 0" v-if="token">编辑</b-button>
    <b-button @click="deleteGists(id)" style="padding: 3px 0" v-if="token">删除</b-button>
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
      console.log(index);
      this.$confirm('是否永久删除该博客?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        let blog = this.blogs[index];
        deleteGist(blog.id).then((result) => {
          console.log(result);
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

<style scoped lang='scss'></style>