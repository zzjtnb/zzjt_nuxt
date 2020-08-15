<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group label="文件名:">
      <b-form-input v-model="form.name" required placeholder="请输入标题"></b-form-input>
    </b-form-group>
    <b-form-group label="正文:">
      <div class="mavonEditor">
        <no-ssr>
          <mavon-editor ref="md" v-model="form.content" :ishljs="true" :codeStyle="true" codeStyle="agate" />
        </no-ssr>
      </div>
    </b-form-group>
    <div class="text-center">
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </div>
  </b-form>
</template>

<script >
export default {
  async asyncData({ app, params, error }) {
    // let data = new Buffer(params.id, 'base64').toString(); //base64解码
    // let title = data.split('\\').pop().replace(/\..+$/, '')
    // let base64 = require('js-base64').Base64;
    // let data = base64.decode(params.id); //base64解码
    // let name = data.replace(/.*\\|\..*$/g, '');

    return await app.$axios
      .$get('/api/blog/details', { params: { id: params.id, flag: 'edit' } })
      .then((res) => {
        let data = {
          name: res.name,
          content: res.details,
        };
        return { form: data };
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' });
      });
  },
  data() {
    return {
      show: true,
    };
  },
  head() {
    return {
      title: this.form.name,
    };
  },
  mounted() {},
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      let file = {};
      file.name = this.form.name.replace(/[<>,.*!:"/\\|?*]+/g, '');
      let base64 = require('js-base64').Base64;
      file.content = base64.encode(this.form.content);
      this.$axios.$put('/api/blog/edit', { data: { id: this.$route.params.id, file: file } }).then((res) => {
        if (res.stats) {
          this.$bvToast.toast(res.msg, {
            title: '提示',
            variant: 'success',
            solid: true,
          });
        } else {
          this.$bvToast.toast(res.msg, {
            title: '提示',
            variant: 'warning',
            solid: true,
          });
        }
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  components: {},
};
</script>

<style scoped lang='scss'>
.v-note-wrapper {
  z-index: 1;
}
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>