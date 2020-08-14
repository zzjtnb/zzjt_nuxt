<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="formShow">
    <b-form-group label="文件名:">
      <b-form-input v-model="form.name" required placeholder="请输入标题"></b-form-input>
      <!-- <p>这里将会显示您输入的值：{{form.name}}</p>
      <p>这里将会显示您过滤后的值(v-model如何使用过滤器)：{{msgF}}</p>-->
    </b-form-group>
    <b-form-group label="内容:">
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
  data() {
    return {
      form: {
        name: '',
        content: `---
title: 
img: 
categories: 前端
tags:
  - Javascript
---

`,
      },
      formShow: true,
    };
  },
  head() {
    return {
      title: '添加博客',
    };
  },
  computed: {
    // msgF() {
    //   return (this.form.name = this.form.name.replace(/[\\/:*?"<>|]/, ''));
    // },
  },
  mounted() {},
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // var str = '---' + '\n';
      // str += 'layout: ' + $('#layout').val() + '\n';
      // str += 'name: ' + $('#name').val() + '\n';
      // str += 'description: ' + $('#desc').val() + '\n';
      // str += 'tags: [' + $('#tags').val() + ']\n';
      // str += 'comments: ' + $('#comments').val() + '\n';
      // str += 'related_blog: [' + $('#related_blog').val() + ']\n';
      // str += '---' + '\n\n';
      // str += $('#editor').val();
      // var obj = {
      //   str: str,
      //   slug: $('#slug').val(),
      // };
      // JSON.stringify(obj),
      // alert(JSON.stringify(this.form));
      let file = {};
      file.name = this.form.name.replace(/[<>,.*!:"/\\|?*]+/g, '');
      let base64 = require('js-base64').Base64;
      file.content = base64.encode(this.form.content);
      this.$axios.$put('/api/add', { data: { file: file } }).then((res) => {
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
      this.formShow = false;
      this.$nextTick(() => {
        this.formShow = true;
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